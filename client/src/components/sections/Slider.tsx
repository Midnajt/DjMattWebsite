import { useTranslation } from "react-i18next";
import { images } from "@/config/assets";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function Slider() {
  const { t } = useTranslation();

  return (
    <Carousel opts={{ loop: true }} className="px-0 lg:px-10">
      <CarouselContent>
        {images.slider.map((slide) => (
          <CarouselItem key={slide.src}>
            <div className="glass mx-auto aspect-[3/4] w-full overflow-hidden rounded-xl lg:aspect-auto lg:h-[14rem] lg:max-w-none">
              <img
                src={slide.src}
                alt={t(slide.altKey)}
                className="size-full object-cover object-top lg:object-contain lg:object-center"
                loading="lazy"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="glass border-accent/40 text-accent hover:bg-accent/20 hover:text-accent" />
      <CarouselNext className="glass border-accent/40 text-accent hover:bg-accent/20 hover:text-accent" />
    </Carousel>
  );
}
