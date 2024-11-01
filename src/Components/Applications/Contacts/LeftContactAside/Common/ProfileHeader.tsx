import { ImagePath } from "@/Constant";
import Image from "next/image";

export const ProfileHeader = () => {
  return (
    <div className="d-flex">
      <div className="d-flex-size-email">
        <Image width={52} height={52} className="rounded-circle me-3" src={`${ImagePath}/user/user.png`} alt="" />
      </div>
      <div className="flex-grow-1">
        <h4 className="f-w-700">{"MARK JENCO"}</h4>
        <p>{"Markjecno@gmail.com"}</p>
      </div>
    </div>
  );
};
