import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
} from "reactstrap";

const SingleCaseInfoDemo = () => {
  return (
    <Col xxl="5" md="6" className="box-col-12">
      <Card>
        <CardHeader>
          <h4 className="text-primary opacity-75">Case Info</h4>
        </CardHeader>
        <CardBody>
          <div className="d-flex justify-content-center gap-2 text-success">
            <h5>Case Name:</h5>
            <p>INQ-67caac70</p>
          </div>
          <div className="d-flex justify-content-between px-2">
            <div>
              <h5 className="fw-semibold text-primary opacity-75">
                Lead User Info:
              </h5>
              <h6 className="fw-bold">Noor Ahmed</h6>
              <h6 className="fw-semibold">
                Email: <span className="fw-normal">N@n.com</span>
              </h6>
              <h6 className="fw-semibold">
                Phone: <span className="fw-normal">+880124535444</span>
              </h6>
            </div>
            <div className="text-end">
              <h5 className="fw-semibold text-primary opacity-75">
                Case Category:
              </h5>
              <h6 className="fw-semibold">Mortgage</h6>
            </div>
          </div>
          <div className="d-flex justify-content-between px-2 mt-3">
            <div>
              <h5 className="fw-semibold text-primary opacity-75">
                Application Type:
              </h5>
              <h6 className="fw-semibold">Mortgage</h6>
            </div>
            <div className="text-end">
              <h5 className="fw-semibold text-primary opacity-75">
                Case Status:
              </h5>
              <h6 className="fw-semibold">Mortgage</h6>
            </div>
          </div>
          <div className="d-flex justify-content-between px-2 mt-3">
            <div>
              <h5 className="fw-semibold text-primary opacity-75">
                Case Stage:
              </h5>
              <h6 className="fw-semibold">Mortgage</h6>
            </div>
            {/* <div className="text-end">
              <h5 className="fw-semibold">Case Status:</h5>
              <h6 className="fw-semibold">Mortgage</h6>
            </div> */}
          </div>
          <div className="d-flex justify-content-between px-2 mt-3">
            <div>
              <h5 className="fw-semibold text-primary opacity-75">
                Created By:
              </h5>
              <h6 className="fw-bold">Noor Ahmed</h6>
              <h6 className="fw-semibold">
                Email: <span className="fw-normal">N@n.com</span>
              </h6>
            </div>
            <div className="text-end">
              <h5 className="fw-semibold text-primary opacity-75">
                Updated By:
              </h5>
              <h6 className="fw-bold">Noor Ahmed</h6>
              <h6 className="fw-semibold">
                Email: <span className="fw-normal">N@n.com</span>
              </h6>
            </div>
          </div>
          <div className="px-2 mt-3">
            <h5 className="fw-semibold text-primary opacity-75">Notes:</h5>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Laudantium cumque dolor eius odit ratione distinctio nisi fuga
              reprehenderit eum eos!
            </p>
          </div>
        </CardBody>
        <CardFooter className="d-flex justify-content-center gap-2">
          <Button color="primary">Update</Button>
        </CardFooter>
      </Card>
    </Col>
  );
};

export default SingleCaseInfoDemo;
