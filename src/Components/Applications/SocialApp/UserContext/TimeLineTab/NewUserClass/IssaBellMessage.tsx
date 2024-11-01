import { ImagePath } from "@/Constant";
import Image from "next/image";

const IssaBellMessage = () => {
  return (
    <div className="your-msg">
      <div className="d-flex gap-3">
        <Image width={50} height={50} className="img-50 img-fluid m-r-20 rounded-circle" alt="Issa Bell" src={`${ImagePath}/user/1.jpg`}/>
        <div className="flex-grow-1">
          <span className="f-w-700">Issa Bell&nbsp;<span>1 Year Ago <i className="fa fa-reply font-primary" /></span></span>
          <p>we are working for the dance and sing songs. this car is very awesome for the youngster. please vote this car and like our post</p>
        </div>
      </div>
    </div>
  );
};

export default IssaBellMessage;
