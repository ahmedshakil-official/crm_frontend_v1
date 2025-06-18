import { Card, CardBody } from "reactstrap";

interface DocumentQueueItem {
  company: string;
  documentType: string;
  adviser: string;
  isUrgent: boolean;
}

const DocumentApprovalQueue: React.FC = () => {
  // Sample data - replace with actual data from your API
  const queueItems: DocumentQueueItem[] = [
    {
      company: "ABC Corp",
      documentType: "Investment Proposal",
      adviser: "Sarah J.",
      isUrgent: true,
    },
    {
      company: "XYZ Ltd",
      documentType: "Risk Assessment",
      adviser: "Michael C.",
      isUrgent: false,
    },
    {
      company: "QRS Inc",
      documentType: "Compliance Report",
      adviser: "Emma W.",
      isUrgent: true,
    },
  ];

  return (
    <Card className="border-0 shadow-sm">
      <CardBody className="p-4">
        <h4 className="mb-4">Document Approval Queue</h4>
        <div className="">
          {queueItems.map((item, index) => (
            <div key={index} className="p-3 rounded-3 bg-light mt-2">
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <h6 className="text-dark mb-2">{item.company}</h6>
                  <p className="text-success mb-0 small">{item.documentType}</p>
                  <p className="text-muted small mb-0">
                    Adviser: {item.adviser}
                  </p>
                </div>
                {item.isUrgent && (
                  <span className="badge bg-danger rounded-pill px-2">
                    Urgent
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  );
};

export default DocumentApprovalQueue;
