import axios from "axios";
import { NextAuthOptions, User as NextAuthUser } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";

interface UserWithToken extends NextAuthUser {
  token?: string;
}

export const authoption: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth/login",
    signOut: "/auth/login",
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
        try {
          if (!credentials) {
            throw new Error("No credentials provided");
          }

          const response = await axios.post(
            "https://d3d1-123-253-215-58.ngrok-free.app/auth/jwt/create/",
            {
              email: credentials.email,
              password: credentials.password,
            }
          );
          console.log("Response:", response.data);

          if (response.data && response.data.access) {
            return {
              id: response.data.user_id || "default_id", // Use a unique ID here if available
              name: response.data.name || credentials.email, // Or any other available name field
              email: credentials.email,
              token: response.data.access,
            };
          }

          return null;
        } catch (error) {
          console.error("Login error:", error);
          return null;
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
    async jwt({ token, user }) {
      if (user?.email) {
        token.email = user.email;

        // NEW: Check if the user has a token, and assign it to token.accessToken
        const userWithToken = user as UserWithToken;
        if (userWithToken.token) {
          token.accessToken = userWithToken.token;
        }
      }
      return token;
    },
    async redirect({ url, baseUrl }) {
      return url.startsWith(baseUrl) ? url : baseUrl;
    },
  },
  debug: true,
};
