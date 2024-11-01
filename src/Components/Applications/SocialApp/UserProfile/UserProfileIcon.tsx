import { Href } from "@/Constant";

const UserProfileIcon = () => {
  return (
    <ul className="share-icons">
      <li><a className="social-icon bg-primary" href={Href}><i className="fa-regular fa-face-smile" /></a></li>
      <li><a className="social-icon bg-secondary" href={Href}><i className="fa-brands fa-weixin" /></a></li>
      <li><a className="social-icon bg-warning" href={Href}><i className="fa-solid fa-share-nodes" /></a></li>
    </ul>
  );
};

export default UserProfileIcon;
