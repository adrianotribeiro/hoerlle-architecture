/* eslint-disable tailwindcss/no-custom-classname */
import React from "react"

export default function Summary(): React.ReactElement {
  return (
    <section className="xl:flex xl:flex-col 6xl:items-center 6xl:justify-center">
      <div className="flex h-[50vh] w-full flex-col justify-center bg-[url('/images/residencial_summary.png')] bg-100% bg-no-repeat md:h-[45.6vh] md:bg-[url('/images/bg_06.png')] md:bg-contain md:bg-no-repeat xl:h-[60vh] xl:bg-[url('/images/residencial_summary.png')] xl:bg-25% xl:bg-repeat-x 2sm:h-[38vh] 6xl:h-[40vh]">
        <div className="flex flex-col gap-3 4xl:gap-6">
          <div className="flex flex-col items-center gap-1">
            <p className="text-3xl font-light text-[#ffffff] md:text-[40px] xl:text-6xl  ">Residencial</p>
            <hr className="w-[50%] border-b-[0.5px] border-[#ffffff] md:w-[30%] xl:w-[28%] 4xl:w-[25%] 5xl:w-[18%] 6xl:w-[25%]" />
          </div>
          <p className="hidden font-light text-[#ffffff] md:m-auto md:flex md:text-center  md:text-4xl xl:w-[85%] xl:px-0 xl:text-5xl 2sm:px-4 5xl:w-[60%]">
            Mauris vitae risus urna. Phasellus placerat sit amet nulla non lobortis. Pellentesque sed interdum enim.
          </p>
          <p className="px-2 text-center text-3xl font-light text-[#ffffff] md:hidden xl:m-auto xl:w-[85%] xl:text-center xl:text-5xl 5xl:w-[60%]">
            Mauris vitae risus urna. Phasellus placerat sit amet
          </p>
        </div>
      </div>
      <div className="flex h-[50vh] flex-col justify-center bg-[url('/images/comercial_summary.png')] bg-100% bg-no-repeat md:bg-[url('/images/bg_00.png')] xl:h-[60vh] xl:bg-[url('/images/comercial_summary.png')] xl:bg-25% xl:bg-repeat-x 2sm:h-[38vh] 6xl:h-[40vh]">
        <div className="flex flex-col gap-3 4xl:gap-6">
          <div className="flex flex-col items-center gap-1">
            <p className="text-3xl font-light text-[#ffffff] md:text-[40px] xl:text-6xl  ">Comercial</p>
            <hr className="w-[50%] border-b-[0.5px] border-[#ffffff] md:w-[30%] xl:w-[28%] 4xl:w-[25%] 5xl:w-[18%] 6xl:w-[25%]" />
          </div>
          <p className="hidden font-light text-[#ffffff] md:m-auto md:flex md:text-center  md:text-4xl xl:w-[85%] xl:px-0 xl:text-5xl 2sm:px-4 5xl:w-[60%]">
            Mauris vitae risus urna. Phasellus placerat sit amet nulla non lobortis. Pellentesque sed interdum enim.
          </p>
          <p className="px-2 text-center text-3xl font-light text-[#ffffff] md:hidden xl:m-auto xl:w-[85%] xl:text-center xl:text-5xl 5xl:w-[60%]">
            Mauris vitae risus urna. Phasellus placerat sit amet
          </p>
        </div>
      </div>
    </section>
  )
}
