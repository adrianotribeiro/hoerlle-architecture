"use client"
import Image from "next/image"
import React from "react"
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import DemonstrationSection from "components/DemonstrationSection"
import FormSection from "components/FormSection"
import "swiper/css"
import "swiper/swiper-bundle.css"

import Summary from "components/SummarySection"
import { SlidePhotos } from "data/mockData"
export default function Home(): React.ReactElement {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {SlidePhotos.map((slide) => (
          <SwiperSlide className=" xl:relative" key={slide.id}>
            <Image
              width={1439}
              height={875}
              priority={true}
              src={`/images/${slide.image}`}
              alt={`${slide.title}`}
              className="h-fit w-fit xl:relative xl:z-0 xl:h-[88.3vh] xl:w-full xl:brightness-50 2xl:h-[90.3vh] 3xl:h-[89vh] 4xl:h-[90.7vh] 5xl:h-[92.2vh]"
            />
            <div className="xl:absolute xl:top-0 xl:flex xl:h-[88.3vh] xl:items-end xl:px-32">
              <div className="font-montserrat xl:relative xl:z-10 xl:w-[50%] xl:pb-12 3xl:w-[45%] 4xl:w-[60%] 4_xl:w-[50%] 5xl:w-[50%]">
                <p className="font-montserrat text-white xl:text-[3rem] 4xl:text-[64px] 5xl:text-[70px]">
                  {slide.title}
                </p>
                <p className="font-montserrat text-white xl:text-[1.5rem] xl:font-light xl:leading-7 4xl:text-[32px] 4_xl:leading-8 5xl:text-[40px] 5xl:leading-10">
                  {slide.summary}
                </p>
                <div className="py-4">
                  <button className="rounded bg-[#D9D9D954]/50 font-montserrat text-white xl:px-8 xl:py-1 xl:text-[1rem] xl:hover:bg-[#534f4f53]/50 5xl:text-[20px]">
                    SAIBA MAIS
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <DemonstrationSection />
      <Summary />
      <FormSection />
    </>
  )
}
