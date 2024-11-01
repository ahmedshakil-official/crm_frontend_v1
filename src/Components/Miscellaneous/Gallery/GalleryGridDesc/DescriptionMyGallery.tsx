import { Href, ImagePath, MyPortfolioTitle } from "@/Constant";
import { GalleryGridImages } from "@/Data/Miscellaneous/Gallery/Gallery";
import Link from "next/link";
import { MutableRefObject } from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import { Col } from "reactstrap";

export const DescriptionMyGallery = () => {
  const description: string = "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.";

  return (
    <Gallery withCaption>
      {GalleryGridImages.map((item, index) => (
        <Col xl="3" sm="6" key={index}>
          <figure className="m-0" itemProp="caption description">
            <Item original={`${ImagePath}/${item}`} width="1500" height="780" caption={description}>
              {({ ref, open }) => (
                <Link href={Href} onClick={open}>
                  <img className="img-thumbnail border-bottom-0 p-2 rounded-0 rounded-top-1" ref={ref as unknown as MutableRefObject<HTMLImageElement>} src={`${ImagePath}/${item}`} alt="thumbnail" />
                  <div className="caption border-top-0 p-2">
                    <h4>{MyPortfolioTitle}</h4>
                    <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                  </div>
                </Link>
              )}
            </Item>
          </figure>
        </Col>
      ))}
    </Gallery>
  );
};
