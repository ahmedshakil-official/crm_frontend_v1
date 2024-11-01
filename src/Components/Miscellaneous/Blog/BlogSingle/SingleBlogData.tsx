import RatioImage from "@/CommonComponent/RatioImage";
import { ImagePath, SingleBlogHeading } from "@/Constant";

export const SingleBlogData = () => {
  const SingleBlogParagraph1: string = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;
  const SingleBlogParagraph2: string = `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like`;
  return (
    <div className="blog-box blog-details">
      <RatioImage className="img-fluid w-100" src={`${ImagePath}/blog/blog-single.jpg`} alt="blog-main" />
      <div className="blog-details">
        <ul className="blog-social d-block">
          <li className="rounded-0">25 July 2024</li>
          <li><i className="fa-solid fa-user" />Mark Jecno</li>
          <li className="digits"><i className="fa-solid fa-thumbs-up" /> 02<span>Hits</span></li>
          <li className="digits"><i className="fa-solid fa-comments" /> Comments</li>
        </ul>
        <h4 className="pt-3">{SingleBlogHeading}</h4>
        <div className="single-blog-content-top">
          <p className="mt-1">{SingleBlogParagraph1}</p>
          <p>{SingleBlogParagraph2}</p>
        </div>
      </div>
    </div>
  );
};
