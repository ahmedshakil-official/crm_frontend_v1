import { useGetNetworkReportsMutation } from "@/Redux/Reducers/Network/Reports/NetworkReportsApi";
import { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Row,
  Spinner,
} from "reactstrap";
import Breadcrumbs from "../../../CommonComponents/Breadcrumbs/Breadcrumbs";
import styles from "./NetworkReports.module.css";

const NetworkReportsContainer: React.FC = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [getNetworkReports, { isLoading, error }] =
    useGetNetworkReportsMutation();

  const handleDownloadReport = async () => {
    try {
      const blob = await getNetworkReports({}).unwrap();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "network-report";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Download failed:", err);
    }
  };

  return (
    <div className={styles.networkReportsContainer}>
      <Breadcrumbs
        title="Network Reports"
        subTitle="Generate and analyze comprehensive network reports"
        parent="Cases"
        child="Reports"
      />
      <Container fluid>
        <Row className="mb-4">
          <Col>
            <Card className={`${styles.reportsCard} shadow-sm border-0`}>
              <CardBody>
                <Row className="align-items-center">
                  <Col md={6}>
                    <h4 className="mb-0 text-primary fw-bold">
                      <i className="fa fa-chart-line me-2"></i>
                      Network Reports Dashboard
                    </h4>
                    <p className="text-muted mb-0 mt-1">
                      Generate comprehensive reports across your network
                    </p>
                  </Col>
                  <Col md={6} className="text-end">
                    <Button
                      color="success"
                      className={styles.exportButton}
                      onClick={handleDownloadReport}
                      disabled={isDownloading}
                    >
                      {isDownloading ? (
                        <>
                          <Spinner size="sm" className="me-2" />
                          Downloading...
                        </>
                      ) : (
                        <>
                          <i className="fa fa-download me-2"></i>
                          Download Report
                        </>
                      )}
                    </Button>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NetworkReportsContainer;
