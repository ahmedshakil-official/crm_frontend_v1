"use client"
import React, { FunctionComponent, useEffect, useState } from "react";

const OrganizationCase = () => {
  const [MyAwesomeMap, setClient] = useState<FunctionComponent>();
  useEffect(() => {
    (async () => {
      if (typeof window !== "undefined") {
        const newClient = (await import("../../../../../Components/General/Dashboard/Organization/ActivityStatus/Case/page")).default;
        setClient(() => newClient);
      }
    })();
  }, []);
  return MyAwesomeMap ? <MyAwesomeMap /> : "";
};

export default OrganizationCase;