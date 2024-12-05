"use client"
import React, { FunctionComponent, useEffect, useState } from "react";

const OrganizationAllCase = () => {
  const [MyAwesomeMap, setClient] = useState<FunctionComponent>();
  useEffect(() => {
    (async () => {
      if (typeof window !== "undefined") {
        const newClient = (await import("../../../../../Components/General/Dashboard/Organization/ActivityStatus/AllCase/page")).default;
        setClient(() => newClient);
      }
    })();
  }, []);
  return MyAwesomeMap ? <MyAwesomeMap /> : "";
};

export default OrganizationAllCase;