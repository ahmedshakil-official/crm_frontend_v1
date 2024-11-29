import apiClient from "@/services/api-client";
import axios from "axios";
import { NextAuthOptions, User as NextAuthUser } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";

// Extend NextAuth's user type to include the JWT token
interface UserWithToken extends NextAuthUser {
  token?: string; // Custom field for storing the JWT token
}

// TypeScript Declaration Module for Custom Session and User Properties
declare module "next-auth" {
  interface Session {
    user: {
      name?: string | null;
      email?: string | null;
      image?: string | null;
      accessToken?: string; // Add the accessToken here
    };
  }
  interface User {
    accessToken?: string; // Ensure compatibility with user object
  }
}

export const authoption: NextAuthOptions = {
  session: {
    strategy: "jwt", // Use JWT strategy for managing sessions
    maxAge: 30 * 2 * 60 * 60,
  },
  pages: {
    signIn: "/auth/login", // Custom login page
    signOut: "/auth/login", // Redirect here after signing out
  },
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        console.log("Attempting to authorize with credentials:", credentials); // Log credentials
        try {
          if (!credentials) {
            throw new Error("No credentials provided");
          }

          // Make API call to obtain JWT token
          console.log("Sending credentials to API:", credentials);
          const response = await apiClient.post("/auth/jwt/create/", {
            email: credentials.email,
            password: credentials.password,
          });
          console.log("API response:", response.data);

          console.log({ response: response.data });

          // Log the full response
          console.log("Response from backend:", response.data);

          if (response.data?.access) {
            // console.log("Access Token:", response.data.access);
            return {
              id: response.data.user_id || "default_id",
              name: response.data.name || credentials.email,
              email: credentials.email,
              token: response.data.access, // Attach JWT token
            };
          }
          return null;
        } catch (error) {
          console.error("Login error:", error);
          throw new Error("Invalid email or password.");
        }
      },
    }),
    Github({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    // Add token from user to the JWT payload
    async jwt({ token, user }) {
      if (user) {
        const userWithToken = user as UserWithToken;
        if (userWithToken.token) {
          token.accessToken = userWithToken.token; // Assign the token here
        }
      }
      return token;
    },

    // Add the JWT token to the session object
    async session({ session, token }) {
      session.user = {
        ...session.user,
        accessToken: token.accessToken as string | undefined,
      };
      console.log("Session Callback User:", session.user);
      return session;
    },
    // Handle redirects after sign-in or sign-out
    async redirect({ url, baseUrl }) {
      return url.startsWith(baseUrl) ? url : baseUrl;
    },
  },
  debug: true, // Enable debugging in development
};
