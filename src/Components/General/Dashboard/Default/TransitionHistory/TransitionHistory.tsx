import DashboardCommonHeader from "@/Components/General/Common/DashboardCommonHeader/DashboardCommonHeader";
import { Href, ImagePath, Transition } from "@/Constant";
import { TransitionHistoryData } from "@/Data/General/Dashboard/Default/DefaultData";
import Image from "next/image";
import Link from "next/link";
import { Button, Card, CardBody, Col, Table } from "reactstrap";

const TransitionHistory = () => {
  return (
    <Col xxl="6" xl="8" lg="12" md="6" className="proorder-xxl-8 box-col-7">
      <Card>
        <DashboardCommonHeader title={Transition} />
        <CardBody className="transaction-history pt-0">
          <div className="table-responsive theme-scrollbar">
            <Table className="display table-bordernone" id="transaction" style={{ width: "100%" }}>
              <thead>
                <tr><th>Item Name</th><th>Invoice No.</th><th>Credit/Debit</th><th>Date/Time</th><th className="text-center">Status</th></tr>
              </thead>
              <tbody>
                {TransitionHistoryData.map((data, index) => (
                  <tr key={index}>
                    <td>
                      <div className="d-flex align-items-center gap-3">
                        <div className="flex-shrink-0"><Image width={20} height={20} src={`${ImagePath}${data.icon}`} alt="TransitionHistory" /></div>
                        <div className="flex-grow-1">
                          <Link href={Href}><h6>{data.productName}</h6></Link><p>{data.itemType}</p>
                        </div>
                      </div>
                    </td>
                    <td>{data.itemNumber}</td>
                    <td className={`text-${data.priceClass}`}>{data.price}</td>
                    <td>
                      <div className="d-flex"><div className="flex-grow-1"><h6>{data.date}</h6><p>{data.time}</p></div></div>
                    </td>
                    <td className="text-end"><Button className={`bg-light-${data.statusClass} border-light-${data.statusClass} text-${data.statusClass}`} color="">{data.status}</Button></td>
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

export default TransitionHistory;
