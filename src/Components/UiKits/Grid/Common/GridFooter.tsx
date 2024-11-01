import { GridFooterProps } from "@/Types/UiKitsType";
import React from "react";
import { CardFooter, Table } from "reactstrap";

const GridFooter: React.FC<GridFooterProps> = ({ code, value }) => {
  return (
    <CardFooter>
      <div className="table-responsive">
        <Table className="w-100" borderless>
          <tbody>
            <tr>
              <th> {"Class"}</th>
              <th>{"Value of the class"}</th>
            </tr>
            <tr>
              <td>
                <code>{code}</code>
              </td>
              <td>{value}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </CardFooter>
  );
};

export default GridFooter;
