"use client";
import { FunctionComponent, useEffect, useState } from "react";

const OrganizationClients = () => {
  const [MyAwesomeMap, setClient] = useState<FunctionComponent>();
  useEffect(() => {
    (async () => {
      if (typeof window !== "undefined") {
        const newClient = (
          await import(
            "@/Components/General/Dashboard/Organization/Directors/Clients"
          )
        ).default;
        setClient(() => newClient);
      }
    })();
  }, []);
  return MyAwesomeMap ? <MyAwesomeMap /> : "";
};

export default OrganizationClients;
