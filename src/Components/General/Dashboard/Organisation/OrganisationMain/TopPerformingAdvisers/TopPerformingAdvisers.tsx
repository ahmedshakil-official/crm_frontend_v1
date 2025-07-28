import { Card, CardBody } from "reactstrap";

interface Adviser {
  id: number;
  name: string;
  cases: number;
  revenue: number;
  rank: number;
}

const TopPerformingAdvisers: React.FC = () => {
  // Sample data - replace with actual data from your API
  const advisers: Adviser[] = [
    { id: 1, name: "Sarah Johnson", cases: 28, revenue: 125000, rank: 1 },
    { id: 2, name: "Michael Chen", cases: 24, revenue: 98000, rank: 2 },
    { id: 3, name: "Emma Williams", cases: 22, revenue: 87000, rank: 3 },
    { id: 4, name: "David Lee", cases: 18, revenue: 72000, rank: 4 },
    { id: 5, name: "Jessica Brown", cases: 15, revenue: 65000, rank: 5 },
    { id: 6, name: "Michael Brown", cases: 15, revenue: 65000, rank: 6 },
    { id: 7, name: "Daniel Brown", cases: 15, revenue: 65000, rank: 7 },
  ];

  const formatCurrency = (amount: number): string => {
    return `£${amount.toLocaleString()}`;
  };

  return (
    <Card className="border-0 rounded-lg bg-white p-3 shadow-sm">
      <CardBody className="p-0">
        <h4>Top Performing Advisers</h4>
        <div
          className="space-y-6"
          style={{ height: "355px", overflow: "auto" }}
        >
          {advisers.map((adviser) => (
            <div
              key={adviser.id}
              className="d-flex justify-content-between mt-4 px-3 py-1"
            >
              <div className="d-flex justify-content-start gap-2">
                <div className="d-flex align-items-center justify-content-center">
                  <span
                    className="d-flex align-items-center justify-content-center rounded-circle text-white bg-primary fw-medium small"
                    style={{ width: "25px", height: "25px" }}
                  >
                    {adviser.rank}
                  </span>
                </div>
                <div>
                  <h6 className="fw-semibold">{adviser.name}</h6>
                  <p className="small">{adviser.cases} cases</p>
                </div>
              </div>
              <div className="d-flex justify-content-center flex-column">
                <h6 className="fw-semibold">
                  {formatCurrency(adviser.revenue)}
                </h6>
                <p className="small">
                  <i className="fa-solid fa-award text-warning"></i>
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  );
};

export default TopPerformingAdvisers;
