import { Comment, Done, ImagePath, Issues, Resolved } from "@/Constant";
import { CommonProjectInterFace } from "@/Types/ProjectType";
import Image from "next/image";
import { Badge, Col, Progress, Row } from "reactstrap";

export const CommonProjectListCard :React.FC<CommonProjectInterFace> = ({ item }) => {
  return (
    <Col xxl="4" md="6">
      <div className={`project-box font-dark ${item.progress === 100 ? "bg-light-success" : "bg-light-danger"}`}>
        <Badge color={item.badge === 'Done' ? 'success' : 'danger'}>{item.badge}</Badge>
        <h5 className={`f-w-500 mb-2 text-${item.progress === 100 ? 'success' : 'danger'}`}>{item.title}</h5>
        <div className="d-flex mb-2 align-items-center">
          <Image width={20} height={20} className="img-20 me-1 rounded-circle" src={`${ImagePath}/user/${item.image}`} alt="Project" />
          <p className="font-light">{item.sites}</p>
        </div>
        <p>{item.description}</p>
        <Row className="details">
          <Col xs="6"><span>{Issues} </span></Col>
          <Col xs="6" className={`text-${item.badge === 'Done' ? 'success' : 'danger'}`}>{item.issue}</Col>
          <Col xs="6"><span>{Resolved}</span></Col>
          <Col xs="6" className={`text-${item.badge === 'Done' ? 'success' : 'danger'}`}>{item.resolved}</Col>
          <Col xs="6"><span>{Comment}</span></Col>
          <Col xs="6" className={`text-${item.badge === 'Done' ? 'success' : 'danger'}`}>{item.comment}</Col>
        </Row>
        <div className="customers">
          <ul>
            <li className="d-inline-block"><Image width={30} height={30} className="img-30 rounded-circle" src={`${ImagePath}/user/${item.customers_img1}`} alt="Project" /></li>
            <li className="d-inline-block"><Image width={30} height={30} className="img-30 rounded-circle" src={`${ImagePath}/user/${item.customers_img2}`} alt="Project" /></li>
            <li className="d-inline-block"><Image width={30} height={30} className="img-30 rounded-circle" src={`${ImagePath}/user/${item.customers_img3}`} alt="Project" /></li>
            <li className="d-inline-block ms-2"><p className="f-12">{`+${item.like} More`}</p></li>
          </ul>
        </div>
        <div className="project-status mt-4">
          <div className="d-flex align-items-center gap-1 mb-2">
            <p className="mb-0">{item.progress}%</p>
            <span>{Done}</span>
          </div>
          {item.progress === 100 ? <Progress className='sm-progress-bar' color='success' value={item.progress} animated striped/> : <Progress className='sm-progress-bar' animated striped color='danger' value={item.progress} />}
        </div>
      </div>
    </Col>
  );
};
