import { Comments, Hits } from "@/Constant";

const MarkJencoBlogDetails = () => {
  const MarkJecnoBlog: string = "People just dont do it anymore. We have to change that. Sometimes the simplest things are the most profound.";

  return (
    <div className="blog-details">
      <p>25 July 2024</p>
      <h4>{MarkJecnoBlog}</h4>
      <ul className="blog-social flex-row d-block">
        <li>
          <i className="fa-solid fa-user" />
          Mark Jecno
        </li>
        <li className="digits">
          <i className="fa-solid fa-thumbs-up" />
          02 {Hits}
        </li>
        <li className="digits">
          <i className="fa-solid fa-comments" />
          598 {Comments}
        </li>
      </ul>
    </div>
  );
};

export default MarkJencoBlogDetails;
