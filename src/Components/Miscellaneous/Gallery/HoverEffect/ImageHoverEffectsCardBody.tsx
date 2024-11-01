import { Href, ImagePath } from "@/Constant";
import { HoverImageDataList } from "@/Data/Miscellaneous/Gallery/Gallery";
import Link from "next/link";
import { MutableRefObject } from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import { CardBody, Col, Row } from "reactstrap";

export const ImageHoverEffectsCardBody = (props: { data: number }) => {
  return (
    <CardBody className="pb-1">
      <Row className="my-gallery gallery mb-auto">
        <Gallery>
          {HoverImageDataList &&
            HoverImageDataList.map((item, index) => (
              <Col md="3" xs="6" key={index}  >
                <figure className={`mx-0 img-hover hover-${props.data}`}>
                  <Item original={`${ImagePath}/${item}`} width="1024" height="768">
                    {({ ref, open }) => (
                      <Link href={Href} onClick={open}>
                        <div className="overflow-hidden">
                          <img ref={ref as unknown as MutableRefObject<HTMLImageElement>} src={`${ImagePath}/${item}`} alt="" className="w-100 h-100" />
                        </div>
                      </Link>
                    )}
                  </Item>
                </figure>
              </Col>
            ))}
        </Gallery>
      </Row>
    </CardBody>
  );
};
