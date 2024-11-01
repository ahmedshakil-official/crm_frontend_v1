import RatioImage from "@/CommonComponent/RatioImage";
import { ImagePath } from "@/Constant";
import { ItemIntervalDataList } from "@/Data/BonusUi/ReactstrapCarousel";
import { CarouselItemData, ReactstrapCarouselItem } from "@/Types/BonusUiType";
import { FormEvent, useState } from "react";
import { Carousel, CarouselControl, CarouselItem } from "reactstrap";

const IndividualIntervalBody = () => {

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [interval, setInterval] = useState(10000);

  const onChangeTime = (index: number, item: CarouselItemData) => {
    setInterval(item['data-interval']);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === ItemIntervalDataList.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? ItemIntervalDataList.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const slides = ItemIntervalDataList.map((item: ReactstrapCarouselItem) => {
    return (
      <CarouselItem data-interval={item.interval} onExiting={() => setAnimating(true)} onExited={() => setAnimating(false)} key={item.id}>
        <RatioImage src={`${ImagePath}/slider/${item.image}`} alt='drawing-room' className='d-block w-100' />
      </CarouselItem>
    );
  });
  return (
    <Carousel interval={interval} activeIndex={activeIndex} next={next} previous={previous}
      onChange={(event: FormEvent<HTMLElement>) =>
        onChangeTime(activeIndex, slides[activeIndex].props as CarouselItemData)
      }>
      {slides}
      <CarouselControl direction='prev' directionText='Previous' onClickHandler={previous} />
      <CarouselControl direction='next' directionText='Next' onClickHandler={next} />
    </Carousel>
  );
};

export default IndividualIntervalBody;