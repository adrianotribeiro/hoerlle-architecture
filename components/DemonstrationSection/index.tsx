import Image from "next/image"
import React from "react"

export default function Demonstration(): React.ReactElement {
  return (
    <section className="flex flex-col xl:flex-row xl:justify-between">
      <div className="py-4 xl:flex xl:w-full xl:flex-col xl:items-center xl:justify-center xl:gap-3 xl:py-8 5xl:gap-6">
        <div className="flex w-full flex-col items-center pb-3 xl:pb-0">
          <p className="font-montserrat text-2xl text-[#676060] md:text-4xl lg:text-5xl xl:text-3xl 4xl:text-[35px] 5xl:text-[42px]">
            Residencial
          </p>
          <hr className="w-[50%] border-b-[1px] border-[#676060] font-montserrat md:w-[35%] xl:w-[30%] 4xl:w-[35%] 5xl:w-[30%] 6xl:w-[40%]" />
        </div>
        <p className="px-6 text-justify font-montserrat text-[20px] text-[#676060] md:px-7 lg:px-24 lg:py-4 lg:text-3xl xl:w-[100%] xl:p-6 xl:py-0 xl:text-justify xl:text-2xl xl:font-normal 4xl:px-12 5xl:px-12 5xl:text-3xl">
          Mauris vitae risus urna. Phasellus placerat sit amet nulla non lobortis. Pellentesque sed interdum enim.
          Aliquam porttitor sem sed turpis blandit sagittis. Vestibulum ornare, elit non efficitur placerat.
        </p>
        <div className="flex w-full flex-col items-center gap-1 pt-3 md:flex-row md:justify-center md:px-7 xl:flex-row xl:justify-between xl:px-6 xl:pt-0 4xl:px-12 4_xl:px-12 5xl:px-12">
          <div>
            <Image
              width={310}
              height={529}
              src="/images/card_01.png"
              alt=""
              className="md:w-[395px] lg:w-[450px] xl:h-[473px] xl:w-[307px] xl:bg-contain 3xl:h-[474px] 3xl:w-[426px] 4xl:h-[475px] 4xl:w-[434px] 4_xl:h-[538px] 4_xl:w-[495px] 5xl:h-[715px] 5xl:w-[700px] 6xl:h-[609px]"
            />
          </div>
          <div className="flex flex-col gap-1">
            <Image
              width={310}
              height={167}
              src="/images/card_02.png"
              alt=""
              className="md:w-[328px] lg:w-[375px] xl:h-fit xl:w-[278px] 3xl:w-[340px] 4xl:w-[358px] 4_xl:w-[450px] 5xl:w-[677px] 6xl:w-[800px]"
            />
            <Image
              width={310}
              height={167}
              src="/images/card_02.png"
              alt=""
              className="md:w-[328px] lg:w-[375px] xl:h-fit xl:w-[278px] 3xl:w-[340px] 4xl:w-[358px] 4_xl:w-[450px] 5xl:w-[677px] 6xl:w-[800px]"
            />
            <Image
              width={310}
              height={167}
              src="/images/card_02.png"
              alt=""
              className="md:w-[328px] lg:w-[375px] xl:h-fit xl:w-[278px] 3xl:w-[340px] 4xl:w-[358px] 4_xl:w-[450px] 5xl:w-[677px] 6xl:w-[800px]"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#1D1B1BBF]/75 py-4 xl:flex xl:w-full xl:flex-col xl:items-center xl:gap-3 xl:py-8 5xl:gap-6">
        <div className="flex w-full flex-col items-center pb-3 xl:pb-0">
          <p className="font-montserrat text-2xl text-[#ffffff] md:text-4xl lg:text-5xl xl:text-3xl 4xl:text-[35px] 5xl:text-[42px]">
            Comercial
          </p>
          <hr className="w-[50%] border-b-[1px] border-[#ffffff] font-montserrat md:w-[35%] xl:w-[30%] 4xl:w-[35%] 5xl:w-[30%] 6xl:w-[40%]" />
        </div>
        <p className="px-6 text-justify font-montserrat text-[20px] text-[#ffffff] md:px-7 lg:px-24 lg:py-4 lg:text-3xl xl:w-[100%] xl:p-6 xl:py-0 xl:text-justify xl:text-2xl xl:font-normal 4xl:px-12 5xl:px-12 5xl:text-3xl">
          Mauris vitae risus urna. Phasellus placerat sit amet nulla non lobortis. Pellentesque sed interdum enim.
          Aliquam porttitor sem sed turpis blandit sagittis. Vestibulum ornare, elit non efficitur placerat.
        </p>
        <div className="pt-3 xl:flex xl:w-full xl:gap-2 xl:px-6 xl:pt-0 4xl:px-6 5xl:px-12">
          <div className="flex flex-col items-center gap-2 md:flex-row md:flex-wrap md:justify-center xl:gap-3">
            <Image
              width={310}
              height={167}
              src="/images/card_03.png"
              alt=""
              className="md:w-[350px] lg:w-[410px] xl:h-fit xl:w-[278px] 3xl:h-[200px] 3xl:w-[299px] 4xl:h-[170px] 4xl:w-[300px] 4_xl:h-[200px] 4_xl:w-[325px] 5xl:h-[240px] 5xl:w-[420px] 6xl:w-[328px]"
            />
            <Image
              width={310}
              height={167}
              src="/images/card_04.png"
              alt=""
              className="md:w-[350px] lg:w-[410px] xl:h-fit xl:w-[278px] 3xl:h-[200px] 3xl:w-[299px] 4xl:h-[170px] 4xl:w-[300px] 4_xl:h-[200px] 4_xl:w-[325px] 5xl:h-[240px] 5xl:w-[420px] 6xl:w-[328px]"
            />
            <Image
              width={310}
              height={167}
              src="/images/card_05.png"
              alt=""
              className="md:w-[709px] lg:w-[828px] xl:h-[300px] xl:w-[568px] 3xl:h-[258px] 3xl:w-[610px] 4xl:h-[297px] 4xl:w-[612px] 4_xl:h-[325px] 4_xl:w-[662px] 5xl:h-[463px] 5xl:w-[852px] 6xl:h-[355px] 6xl:w-[667px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
