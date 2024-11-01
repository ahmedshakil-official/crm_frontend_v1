import { GridTableHeadData } from "@/Data/Uikits/Grid";
import React from "react";

export const GridTableHead = () => {
  return (
    <thead>
      <tr>
        <th></th>
        {GridTableHeadData &&
          GridTableHeadData.map((item, index) => (
            <th key={index} className="text-center">
              <p>{item.text1} </p>
              <small className={item.class ? item.class : ""}>{item.text2}</small>
            </th>
          ))}
      </tr>
    </thead>
  );
};
