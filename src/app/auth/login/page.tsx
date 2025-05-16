"use client";
import { UserForm } from "@/Components/Auth/UserForm";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Col, Container, Row } from "reactstrap";

const UserLogin = () => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session?.user?.user_type === "ADMIN") {
      router.push("/dashboard/admin");
    } else if (session?.user?.user_type === "LEAD") {
      router.push("/dashboard/client");
    } else if (session?.user?.user_type === "ADVISOR") {
      router.push("/dashboard/organization");
    }
  }, [session, router]);

  if (session) return null;
  return (
    <Container fluid className="p-0">
      <Row className="m-0">
        <Col xs="12" className="p-0">
          <div className="login-card login-dark">
            <UserForm />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default UserLogin;
