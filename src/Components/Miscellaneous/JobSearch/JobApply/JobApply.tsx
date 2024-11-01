import { Href, ImagePath, JobCancelButton, JobEndlessTelecomTechnologies, JobPersonalDetails, JobSubmitButton, JobUIDesigner, JobUploadYourFiles, JobYourEducation, JobYourExperience } from "@/Constant";
import Image from "next/image";
import Link from "next/link";
import { Rating } from "react-simple-star-rating";
import { Button, Card, CardBody, CardFooter } from "reactstrap";
import EducationClass from "./Education";
import ExperienceClass from "./Experience";
import PersonalDetail from "./PersonalDetail";
import UploadFileClass from "./UploadFile";

const JobApply = () => {
  return (
    <Card>
      <div className="job-search">
        <CardBody className="pb-0">
          <div className="d-flex">
            <Image width={40} height={40} className="img-40 b-r-0 img-fluid  m-r-20" src={`${ImagePath}/job-search/1.jpg`} alt=""/>
            <div className="flex-grow-1">
              <h5>
                <Link className="f-w-700" href={Href}>{JobUIDesigner}</Link>
                <span className="pull-right">
                  <Button color="primary"><span><i className="fa fa-check text-white" /></span> Save this job</Button>
                </span>
              </h5>
              <p>{JobEndlessTelecomTechnologies} <Rating className="ms-1" fillColor={"#FFAE1A"} initialValue={Math.random()*5} size={17} /></p>
            </div>
          </div>
          <div className="job-description">
            <h6 className="mb-0">{JobPersonalDetails}</h6>
            <PersonalDetail />
            <h6 className='mb-0'>{JobYourEducation}</h6>
            <EducationClass />
            <h6 className= 'mb-0' >{JobYourExperience}</h6>
            <ExperienceClass /> 
            <h6 className='mb-0'>{JobUploadYourFiles}</h6>
            <UploadFileClass />
          </div>
        </CardBody>
        <CardFooter>
          <Button color="primary mx-1">{JobSubmitButton}</Button>
          <Button color="light" className="text-dark">{JobCancelButton}</Button>
        </CardFooter>
      </div>
    </Card>
  );
};

export default JobApply;
