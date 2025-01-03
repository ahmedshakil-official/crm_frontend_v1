"use client"
import React, { FunctionComponent, useEffect, useState } from "react";

const SingleCaseAlias = () => {
  const [MyAwesomeMap, setClient] = useState<FunctionComponent>();
  useEffect(() => {
    (async () => {
      if (typeof window !== "undefined") {
        const newClient = (await import("@/Components/General/Dashboard/Organization/ActivityStatus/[CaseAlias]")).default;
        setClient(() => newClient);
      }
    })();
  }, []);
  return MyAwesomeMap ? <MyAwesomeMap /> : "";
};

export default SingleCaseAlias;