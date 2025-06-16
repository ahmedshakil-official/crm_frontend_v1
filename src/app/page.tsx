"use client";

import NavBar from "@/Components/Home/Components/NavBar/NavBar";
import UnderDevelopment from "@/Components/Other/UnderDevelopment/UnderDevelopment";
import { Container } from "reactstrap";

export default function Home() {
  return (
    <>
      <main>
        <NavBar />
      </main>
      <Container fluid>
        <UnderDevelopment />
      </Container>
    </>
  );
}
