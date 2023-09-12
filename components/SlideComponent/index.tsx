/* eslint-disable tailwindcss/no-custom-classname */
import React, { ReactNode } from "react"
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"
import { useSpringCarousel } from "react-spring-carousel"
import { SlidePhotos } from "data/mockData"
import { SlideDataProps } from "data/mockData"

function SlideItem({ slideProps }: { slideProps: SlideDataProps }) {
  return (
    <section className="h-[93vh] w-full overflow-hidden md:h-[92.5vh] 2sm:h-[94vh] 3sm:h-[95vh]">
      <div
        className={`h-full bg-cover bg-center bg-no-repeat brightness-50`}
        style={{ backgroundImage: `url(/images/${slideProps.image})` }}
      ></div>
      <div className="absolute bottom-0 px-3 pb-8 md:px-6 xl:p-20">
        <p className="font-montserrat text-[1.5rem] text-white md:text-[3rem] 4xl:text-[64px] 5xl:text-[70px]">
          {slideProps.title}
        </p>
        <p className="font-montserrat text-white md:pr-6 md:text-2xl md:font-light xl:w-[50%] 3sm:w-[70%] 4xl:w-[60%] 4xl:text-[32px] 4_xl:w-[55%] 4_xl:leading-8 5xl:text-[40px] 5xl:leading-10 6xl:w-[70%]">
          {slideProps.summary}
        </p>
        <div className="py-4">
          <button className="rounded bg-[#D9D9D954]/50 px-8 py-1 font-montserrat text-white">SAIBA MAIS</button>
        </div>
      </div>
    </section>
  )
}

export default function SlideComponent(): React.ReactElement {
  const { carouselFragment, slideToPrevItem, slideToNextItem } = useSpringCarousel({
    withLoop: true,
    slideType: "fixed",
    items: SlidePhotos.map((slide) => ({
      id: slide.id,
      renderItem: <SlideItem slideProps={slide} />,
    })),
  })

  return (
    <section className="">
      <div>{carouselFragment}</div>
      <div className="hidden xl:absolute xl:top-[55%] xl:flex xl:w-full xl:justify-between xl:px-1 6xl:w-[60.3%]">
        <button onClick={slideToPrevItem}>
          <AiOutlineLeft className="text-6xl text-white/60 hover:text-white 6xl:text-7xl" />
        </button>
        <button onClick={slideToNextItem}>
          <AiOutlineRight className="text-6xl text-white/60 hover:text-white  6xl:text-7xl" />
        </button>
      </div>
    </section>
  )
}
