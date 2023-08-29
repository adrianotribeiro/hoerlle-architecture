import Image from "next/image"
import React from "react"

export default function Demonstration(): React.ReactElement {
  return (
    <section className="xl:flex xl:justify-between">
      <div className="xl:flex xl:w-full xl:flex-col xl:items-center xl:justify-center xl:gap-3 xl:py-8">
        <div className="xl:flex xl:w-full xl:flex-col xl:items-center xl:border">
          <p className="xl:text-3xl xl:text-[#676060] 4xl:text-[42px]">Residencial</p>
          <hr className="xl:w-[30%] xl:border-b-[1px] xl:border-[#676060] 4xl:w-[37%]" />
        </div>
        <p className="xl:w-[100%] xl:border xl:px-6 xl:text-justify xl:text-2xl xl:font-normal xl:text-[#676060]">
          Mauris vitae risus urna. Phasellus placerat sit amet nulla non lobortis. Pellentesque sed interdum enim.
          Aliquam porttitor sem sed turpis blandit sagittis. Vestibulum ornare, elit non efficitur placerat.
        </p>
        <div className="xl:flex xl:w-full xl:justify-between xl:gap-2 xl:border xl:px-6">
          <div>
            <Image
              width={283}
              height={529}
              src="/images/residencial_demonstration_02.png"
              alt=""
              className="xl:h-[472px] xl:w-[300px] xl:bg-contain 3xl:w-[340px]"
            />
          </div>
          <div className="xl:flex xl:flex-col xl:gap-1">
            <Image
              width={297}
              height={167}
              src="/images/residencial_demonstration_01.png"
              alt=""
              className="xl:h-fit xl:w-[278px] xl:bg-contain 3xl:w-[275.1px]"
            />
            <Image
              width={297}
              height={167}
              src="/images/residencial_demonstration_01.png"
              alt=""
              className="xl:h-fit xl:w-[278px] xl:bg-contain 3xl:w-[275.1px]"
            />
            <Image
              width={297}
              height={167}
              src="/images/residencial_demonstration_01.png"
              alt=""
              className="xl:h-fit xl:w-[278px] xl:bg-contain 3xl:w-[275.1px]"
            />
          </div>
        </div>
      </div>
      <div className=" xl:w-full xl:border xl:bg-[#1D1B1BBF]/75">
        <h1>Comercial</h1>
      </div>
    </section>
  )
}
