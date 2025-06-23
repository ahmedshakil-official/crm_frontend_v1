import SVG from "@/CommonComponent/SVG";
import { Href, ImagePath } from "@/Constant";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Profile = () => {
  const [show, setShow] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();

  const handleLogout = async () => {
    // signOut();
    await signOut({ redirect: false });
    router.push("/auth/login");
  };
  return (
    <li className="profile-nav custom-dropdown">
      <div className="user-wrap">
        <div className="user-img">
          <Image
            width={64}
            height={59}
            // src={session?.user?.profile_image || `${ImagePath}/profile.png`}
            src={
              session?.user?.profile_image
                ? `${process.env.NEXT_PUBLIC_API_BASE_URL}/${session.user.profile_image}`
                : `${ImagePath}/profile.png`
            }
            alt="user"
          />
        </div>
        <div className="user-content" onClick={() => setShow(!show)}>
          <h6>{session?.user?.email}</h6>
          <p className="mb-0 text-primary">
            {session?.user?.name || "User Name"}
            <i className="fa-solid fa-chevron-down" />
          </p>
        </div>
        <div className={`custom-menu overflow-hidden ${show ? "show" : ""}`}>
          <ul className="profile-body">
            <li className="d-flex gap-2">
              <i className="fa-solid fa-user-gear"></i>
              Profile
            </li>
            <li className="d-flex gap-2">
              <i className="fa-solid fa-circle-user"></i>
              Add User
            </li>
            <li className="d-flex" onClick={handleLogout}>
              <SVG className="svg-color" iconId="Login" />
              <Link className="ms-2" href={Href}>
                {"Logout"}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </li>
  );
};

export default Profile;
