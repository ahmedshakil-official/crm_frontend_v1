import { GridTableBodyData } from "@/Data/Uikits/Grid";

export const GridTableBody = () => {
  return (
    <tbody>
      {GridTableBodyData.map((item) => (
        <tr key={item.id}>
          <th className="text-nowrap" scope="row">
            {item.head}
          </th>
          {item.data.map((list) => (
            <td colSpan={list.span} key={list.id}>
              {list.text}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};
