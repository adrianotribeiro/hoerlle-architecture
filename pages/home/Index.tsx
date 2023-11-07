"use client"
// import Image from "next/image"
import React from "react"
// import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules"
// import { Swiper, SwiperSlide } from "swiper/react"
import DemonstrationSection from "components/DemonstrationSection"
import FormSection from "components/FormSection"
import "swiper/css"
import "swiper/swiper-bundle.css"
import SlideComponent from "components/SlideComponent"
import Summary from "components/SummarySection"

export default function Home(): React.ReactElement {
  return (
    <>
      <div className="z-0 h-fit overflow-hidden">
        <SlideComponent />
      </div>
      {/* <SlideComponent /> */}
      <DemonstrationSection />
      <Summary />
      <FormSection />
    </>
  )
}
