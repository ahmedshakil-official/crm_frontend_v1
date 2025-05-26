import { Card, Col, Progress } from "reactstrap";

interface BrokerData {
  name: string;
  company: string;
  amount: number;
  deals: number;
}

const TopPerformingBrokers: React.FC = () => {
  const brokers: BrokerData[] = [
    {
      name: "Joana Luna",
      company: "Luna Financial Solutions",
      amount: 7.3,
      deals: 28,
    },
    {
      name: "Martin leakes",
      company: "Premier Mortgage Advisors",
      amount: 6.3,
      deals: 25,
    },
    {
      name: "Jordanna Kirschner",
      company: "Prosperity Financial Group",
      amount: 5.8,
      deals: 23,
    },
    {
      name: "Sri Jethasson",
      company: "Jethasson & Associates",
      amount: 5.0,
      deals: 20,
    },
    {
      name: "Zhaur Mota",
      company: "Pure Finance Solutions",
      amount: 4.5,
      deals: 19,
    },
  ];

  const maxDeals = Math.max(...brokers.map((broker) => broker.deals));

  return (
    <Col md={6}>
      <Card className="p-4">
        <h4 className="mb-4 fw-bold">Top Performing Brokers</h4>
        <div className="d-flex flex-column gap-4">
          {brokers.map((broker, index) => (
            <div
              key={index}
              className="d-flex justify-content-between align-items-start w-100"
            >
              <div className="d-flex flex-column flex-grow-1">
                <span className="fs-6 fw-medium mb-1">{broker.name}</span>
                <span className="small text-muted">{broker.company}</span>
                <div className="w-100 mt-2">
                  <Progress
                    value={(broker.deals / maxDeals) * 100}
                    className="opacity-75"
                    color="success"
                    style={{ height: "4px" }}
                  />
                </div>
              </div>
              <div className="text-end ms-3">
                <div className="fs-6 fw-medium mb-1">${broker.amount}M</div>
                <div className="small text-muted">{broker.deals} deals</div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <a href="#" className="text_decoration_hover">
            View all brokers
          </a>
        </div>
      </Card>
    </Col>
  );
};

export default TopPerformingBrokers;
