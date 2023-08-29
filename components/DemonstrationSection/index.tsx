import Image from "next/image"
import React from "react"

export default function Demonstration(): React.ReactElement {
  return (
    <section className="xl:flex xl:justify-between">
      <div className="xl:flex xl:w-full xl:flex-col xl:items-center xl:justify-center xl:gap-3 xl:py-8 5xl:gap-6">
        <div className="xl:flex xl:w-full xl:flex-col xl:items-center">
          <p className="xl:text-3xl xl:text-[#676060] 4xl:text-[35px] 5xl:text-[42px]">Residencial</p>
          <hr className="xl:w-[30%] xl:border-b-[1px] xl:border-[#676060] 4xl:w-[35%] 5xl:w-[30%]" />
        </div>
        <p className="xl:w-[100%] xl:px-6 xl:text-justify xl:text-2xl xl:font-normal xl:text-[#676060] 4xl:px-12 5xl:px-24 5xl:text-3xl">
          Mauris vitae risus urna. Phasellus placerat sit amet nulla non lobortis. Pellentesque sed interdum enim.
          Aliquam porttitor sem sed turpis blandit sagittis. Vestibulum ornare, elit non efficitur placerat.
        </p>
        <div className="xl:flex xl:w-full xl:justify-between xl:gap-2 xl:px-6 4xl:px-12 4_xl:px-12 5xl:px-24">
          <div>
            <Image
              width={283}
              height={529}
              src="/images/residencial_demonstration_02.png"
              alt=""
              className="xl:h-[473px] xl:w-[303px] xl:bg-contain 3xl:w-[340px] 4xl:h-[472px] 4xl:w-[339px] 4_xl:w-[386px] 5xl:h-[480px] 5xl:w-[475px]"
            />
          </div>
          <div className="xl:flex xl:flex-col xl:gap-1">
            <Image
              width={297}
              height={167}
              src="/images/residencial_demonstration_01.png"
              alt=""
              className="xl:h-fit xl:w-[278px] 3xl:w-[275.1px] 5xl:w-[280px]"
            />
            <Image
              width={297}
              height={167}
              src="/images/residencial_demonstration_01.png"
              alt=""
              className="xl:h-fit xl:w-[278px] 3xl:w-[275.1px] 5xl:w-[280px]"
            />
            <Image
              width={297}
              height={167}
              src="/images/residencial_demonstration_01.png"
              alt=""
              className="xl:h-fit xl:w-[278px] 3xl:w-[275.1px] 5xl:w-[280px]"
            />
          </div>
        </div>
      </div>
      <div className="xl:flex xl:w-full xl:flex-col xl:items-center xl:gap-3 xl:bg-[#1D1B1BBF]/75 xl:py-8 5xl:gap-6">
        <div className="xl:flex xl:w-full xl:flex-col xl:items-center">
          <p className="xl:text-3xl xl:text-[#ffffff] 4xl:text-[35px] 5xl:text-[42px]">Comercial</p>
          <hr className="xl:w-[30%] xl:border-b-[1px] xl:border-[#ffffff] 4xl:w-[35%] 5xl:w-[30%]" />
        </div>
        <p className="xl:w-[100%] xl:px-8 xl:text-justify xl:text-2xl xl:font-normal xl:text-[#ffffff] 4xl:px-12 5xl:px-24 5xl:text-3xl">
          Mauris vitae risus urna. Phasellus placerat sit amet nulla non lobortis. Pellentesque sed interdum enim.
          Aliquam porttitor sem sed turpis blandit sagittis. Vestibulum ornare, elit non efficitur placerat.
        </p>
        <div className="xl:flex xl:w-full xl:gap-2 xl:px-6 4xl:px-6 4_xl:px-0">
          <div className="xl:flex xl:flex-wrap xl:justify-center xl:gap-3">
            <Image
              width={297}
              height={167}
              src="/images/planta_baixa_comercial.png"
              alt=""
              className="xl:h-fit xl:w-[278px] 3xl:h-[200px] 3xl:w-[300px] 4xl:w-[300px] 4_xl:h-[200px] 4_xl:w-[325px] 5xl:h-[200px] 5xl:w-[375px] "
            />
            <Image
              width={297}
              height={167}
              src="/images/planta_baixa_comercial.png"
              alt=""
              className="xl:h-fit xl:w-[278px] 3xl:h-[200px] 3xl:w-[300px] 4xl:w-[300px] 4_xl:h-[200px] 4_xl:w-[325px] 5xl:h-[200px] 5xl:w-[375px] "
            />
            <Image
              width={297}
              height={167}
              src="/images/planta_baixa_comercial_01.png"
              alt=""
              className="xl:h-fit xl:w-[568px] 3xl:h-[260px] 3xl:w-[610px] 4xl:h-[230px] 4xl:w-[612px] 4_xl:h-[260px] 4_xl:w-[660px] 5xl:h-[270px] 5xl:w-[760px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
