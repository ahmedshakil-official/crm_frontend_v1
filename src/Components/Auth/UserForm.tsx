import { CreateAccount, DontHaveAccount, EmailAddressLogIn, ForgotPassword, OrSignInWith, Password, RememberPassword, SignIn, SignInToAccount } from "@/Constant";
import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { toast } from "react-toastify";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import imageOne from "../../../public/assets/images/logo/logo1.png";
import imageTwo from "../../../public/assets/images/logo/logo-dark.png";
import { signIn } from "next-auth/react";
import UserSocialApp from "./UserSocialApp";

export const UserForm = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("Test123@gmail.com");
  const [password, setPassword] = useState("Test@123");
  const router = useRouter();
 
  const formSubmitHandle = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();                                                                                  
    const result = await signIn("credentials", {
      email,   
      password,  
      redirect: false,
      callbackUrl: "/dashboard/ecommerce",
    });
  
    if (result?.ok) {
      toast.success("successfully Logged in Rediract......")
      router.push(result.url || "/dashboard/ecommerce");
    } else {     
      toast.error("Invalid Credentaial...");
    }
  };
  return (
    <div>
      <div>
        <Link className="logo" href="/dashboard/default">
          <Image width={91} height={27} className="img-fluid for-light" src={imageOne} alt="login page" priority />
          <Image width={91} height={27} className="img-fluid for-dark" src={imageTwo} alt="login page" priority />
        </Link>
      </div>
      <div className="login-main">
        <Form className="theme-form" onSubmit={(event)=>formSubmitHandle(event)}>
          <h2 className="text-center">{SignInToAccount}</h2>
          <p className="text-center">Enter your email & password to login</p>
          <FormGroup>
            <Label className="col-form-label">{EmailAddressLogIn}</Label>
            <Input type="email" defaultValue={email} onChange={(event) => setEmail(event.target.value)} placeholder="Test123@gmail.com" />
          </FormGroup>
          <FormGroup>
            <Label className="col-form-label">{Password}</Label>
            <div className="position-relative form-input">
              <Input type={show ? "text" : "password"} defaultValue={password} onChange={(event) => setPassword(event.target.value)} placeholder="Test@123" />
              <div className="show-hide" onClick={() => setShow(!show)}><span className="show"> </span></div>
            </div>
          </FormGroup>
          <FormGroup className="mb-0 checkbox-checked">
            <FormGroup className="checkbox-solid-info" check>
              <Input id="checkbox1" type="checkbox" />
              <Label className="text-muted" htmlFor="checkbox1">{RememberPassword}</Label>
            </FormGroup>
            <Link className="link" href={`/authentication/forget_password`}>{ForgotPassword}</Link>
            <div className="text-end mt-3"><Button type="submit" color="primary" block>{SignIn}</Button></div>
          </FormGroup>
          <div className="login-social-title"><h6>{OrSignInWith}</h6></div>
          <UserSocialApp />
          <p className="mt-4 mb-0 text-center">{DontHaveAccount}
            <Link className="ms-2" href="/others/authentication/registersimple">{CreateAccount}</Link>
          </p>
        </Form>
      </div>
    </div>
  );
};
