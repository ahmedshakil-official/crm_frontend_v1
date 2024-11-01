import DashboardCommonHeader from "@/Components/General/Common/DashboardCommonHeader/DashboardCommonHeader";
import { Href, ManageInvoiceHeading } from "@/Constant";
import { ManageInvoiceData } from "@/Data/General/Dashboard/Default/DefaultData";
import Link from "next/link";
import { Button, Card, CardBody, Col, Input, Label, Table } from "reactstrap";

const ManageInvoice = () => {
  return (
    <Col xxl="6" xl="7" md="6" className="proorder-xxl-5 box-col-6">
      <Card className="height-equal">
        <DashboardCommonHeader title={ManageInvoiceHeading} />
        <CardBody className="pt-0 manage-invoice filled-checkbox">
          <div className="table-responsive theme-scrollbar">
            <Table className="display table-bordernone mt-0" id="manage-invoice" style={{ width: "100%" }}>
              <thead>
                <tr>
                  <th><div className="form-check checkbox checkbox-solid-primary"><Input id="solid" type="checkbox" /><Label check htmlFor="solid"></Label></div></th>
                  <th>Client</th><th>Date</th><th>Payment</th><th>Id No</th><th>Amount</th><th className="text-center">Status</th></tr>
              </thead>
              <tbody>
                {ManageInvoiceData.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <div className="form-check checkbox checkbox-solid-primary">
                        <Input defaultChecked={item.defaultChecked} id={item.id} type="checkbox" />
                        <Label check htmlFor={item.id} />
                      </div>
                    </td>
                    <td><Link href={Href}><h6 className="f-w-600">{item.client}</h6></Link></td>
                    <td><p className="f-w-600">{item.date}</p></td>
                    <td><h6 className="f-w-600">{item.payment}</h6></td>
                    <td><p className="f-w-600">{item.idNo}</p></td>
                    <td><h6 className="f-w-600">{item.amount}</h6></td>
                    <td className="text-end"><Button className={`bg-light-${item.color} border-light-${item.color} text-${item.color}`} color="">{item.status}</Button></td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ManageInvoice;
