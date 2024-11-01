import { Href, ImagePath } from "@/Constant";
import { GalleryGridImages } from "@/Data/Miscellaneous/Gallery/Gallery";
import Link from "next/link";
import { MutableRefObject } from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import { Col } from "reactstrap";

export const MyGallery = () => {
  return (
    <Gallery>
      {GalleryGridImages.map((item, index) => (
        <Col xl="3" md="4" xs="6" key={index}>
          <figure className="m-0">
            <Item original={`${ImagePath}/${item}`} width="1500" height="850">
              {({ ref, open }) => (
                <Link href={Href} onClick={open}>
                  <img className="img-thumbnail mb-4 p-2" ref={ref as unknown as MutableRefObject<HTMLImageElement>} src={`${ImagePath}/${item}`} alt="image" />
                </Link>
              )}
            </Item>
          </figure>
        </Col>
      ))}
    </Gallery>
  );
};
