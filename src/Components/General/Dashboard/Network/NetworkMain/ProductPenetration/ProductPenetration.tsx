import Link from "next/link";
import { Badge, Card, CardBody, Col, Progress, Table } from "reactstrap";

const tableData = [
  {
    rank: 1,
    advisor: "Shahariar Sadat",
    cases: 310,
    resi: 180,
    btl: 90,
    protection: 5,
    insurance: 5,
    penetration: 80,
    change: 12,
  },
  {
    rank: 2,
    advisor: "Zahirul Bloyain",
    cases: 300,
    resi: 170,
    btl: 85,
    protection: 5,
    insurance: 5,
    penetration: 29,
    change: 4,
  },
  {
    rank: 3,
    advisor: "Zahirul Bloyain",
    cases: 300,
    resi: 170,
    btl: 85,
    protection: 5,
    insurance: 5,
    penetration: 29,
    change: 13,
  },
  {
    rank: 4,
    advisor: "Zahirul Bloyain",
    cases: 300,
    resi: 170,
    btl: 85,
    protection: 5,
    insurance: 5,
    penetration: 50,
    change: 4,
  },
  {
    rank: 5,
    advisor: "Zahirul Bloyain",
    cases: 300,
    resi: 170,
    btl: 85,
    protection: 5,
    insurance: 5,
    penetration: 50,
    change: 20,
  },
  // Add more data as needed
];

const ProductPenetration = () => {
  return (
    <Col md={8} xs={12}>
      <Card className="shadow-sm p-1">
        <div className="d-flex justify-content-between align-items-center p-3 bg-white border-bottom rounded-top-5">
          <h4 className="mb-0 fw-bold">Product Penetration</h4>
          <div>
            <Badge color="success" pill className="me-2">
              Residential
            </Badge>
            <Badge color="info" pill className="me-2">
              Buy to Let
            </Badge>
            <Badge color="warning" pill className="me-2">
              Protection
            </Badge>
            <Badge color="primary" pill className="me-2">
              General Insurance
            </Badge>
          </div>
          <Link
            href="#"
            className="ms-3 text_decoration_hover"
          >
            View full report
          </Link>
        </div>
        <CardBody className="p-1">
          <Table responsive hover className="rounded-3 overflow-hidden">
            <thead className="bg-primary small text-center">
              <tr>
                <th className="border-0 small">RANK</th>
                <th className="border-0 small">MORTGAGE ADVISOR</th>
                <th className="border-0 small">MORTGAGE CASES</th>
                <th className="border-0 small">RESI MORTGAGE</th>
                <th className="border-0 small">BTL MORTGAGE</th>
                <th className="border-0 small">PROTECTION CASE</th>
                <th className="border-0 small">GENERAL INSURANCE</th>
                <th className="border-0 small">PENETRATION</th>
                <th className="border-0 small">
                  <div className="d-flex justify-content-center align-items-center me-1">
                    <span>CHANGE</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="m3 16 4 4 4-4" />
                      <path d="M7 20V4" />
                      <path d="m21 8-4-4-4 4" />
                      <path d="M17 4v16" />
                    </svg>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="small text-center">
              {tableData.map((data) => (
                <tr key={data.rank}>
                  <td>{data.rank}</td>
                  <td>{data.advisor}</td>
                  <td>{data.cases}</td>
                  <td>{data.resi}</td>
                  <td>{data.btl}</td>
                  <td>{data.protection}</td>
                  <td>{data.insurance}</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <Progress
                        value={data.penetration}
                        className="w-50 me-2 opacity-75"
                        color={data.penetration < 30 ? "danger" : "success"}
                        style={{ height: "6px" }}
                      />
                      <span>{data.penetration}%</span>
                    </div>
                  </td>
                  <td>
                    <span
                      className={`text-${
                        data.change >= 5 ? "success" : "danger"
                      }`}
                    >
                      {data.change >= 5 ? "↑" : "↓"} {Math.abs(data.change)}%
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ProductPenetration;
