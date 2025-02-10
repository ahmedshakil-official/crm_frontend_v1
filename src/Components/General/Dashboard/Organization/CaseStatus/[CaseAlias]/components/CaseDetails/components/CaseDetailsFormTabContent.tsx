// import { TabContent, TabPane, Row, Col } from "reactstrap";
// import FormField, { FormFieldProps } from "./LoanDetails/LoanDetailsFormFields";
// import { useGetLoanDetailsQuery } from "@/Redux/Reducers/CaseDetails/LoanDetails/LoanDetailsApi";

// export const CaseDetailsFormTabContent: React.FC<{
//   tabId: string;
//   fields: any;
// }> = ({ tabId, fields }) => {
//   // Fetch data from the server
//   const {
//     data: serverData,
//     isLoading,
//     isError,
//   } = useGetLoanDetailsQuery(undefined);

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (isError) {
//     return <div>Error fetching data!</div>;
//   }

//   // Get the current tab's fields and merge with server data
//   const currentFields = fields[tabId] || [];
//   const mergedFields = currentFields.map((field: FormFieldProps) => ({
//     ...field,
//     value: serverData?.[field.name] ?? field.value, // Prioritize server data
//   }));

//   return (
//     <TabContent activeTab={tabId} className="my-5">
//       <TabPane tabId={tabId}>
//         <Row className="gx-5 gy-3">
//           {mergedFields.map((field) => (
//             <Col key={field.name} md={6}>
//               <FormField {...field} value={field.value} />
//             </Col>
//           ))}
//         </Row>
//       </TabPane>
//     </TabContent>
//   );
// };
