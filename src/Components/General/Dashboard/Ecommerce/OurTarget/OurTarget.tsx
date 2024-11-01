import { ImagePath } from "@/Constant";
import Image from "next/image";
import { Card, CardBody, CardHeader, Col } from "reactstrap";

const OurTarget = () => {
  return (
    <Col xxl="3" xl="5" sm="6" className="order-xl-2 order-xxl-0 box-col-6">
      <Card className="target-card overflow-hidden">
        <CardHeader className="card-no-border">
          <ul>
            <li className="bg-light-primary text-center">
              <h3>Our Target</h3>
              <p className="mb-0">Completed</p>
              <h6 className="font-primary">$638.930</h6>
            </li>
            <li className="bg-primary text-center">
              <h3>We Archieve</h3>
              <p className="mb-0">Completed 2 Hours</p>
              <h6>$638.930</h6>
            </li>
          </ul>
        </CardHeader>
        <CardBody className="p-0">
          <div className="main-img">
            <Image width={384} height={264} className="img-fluid img-banner" src={`${ImagePath}/dashboard-2/4.png`} alt="Our Target" />
            <ul className="animate-img">
              <li className="right-1"><Image width={29} height={31} className="img-fluid" src={`${ImagePath}/dashboard-2/animate/1.png`} alt="Our Target" /></li>
              <li className="right-2"><Image width={10} height={10} className="img-fluid" src={`${ImagePath}/dashboard-2/animate/2.png`} alt="Our Target" /></li>
              <li className="right-3"><Image width={22} height={32} className="img-fluid" src={`${ImagePath}/dashboard-2/animate/3.png`} alt="Our Target" /></li>
              <li className="right-4"><Image width={10} height={10} className="img-fluid" src={`${ImagePath}/dashboard-2/animate/4.png`} alt="Our Target" /></li>
              <li className="right-5"><Image width={18} height={16} className="img-fluid" src={`${ImagePath}/dashboard-2/animate/5.png`} alt="Our Target" /></li>
            </ul>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default OurTarget;
