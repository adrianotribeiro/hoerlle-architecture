import React from "react"

export default function Summary(): React.ReactElement {
  const residencialBackground = {
    backgroundImage: `url('/images/residencial_summary.png')`,
    backgroundRepeat: "repeat-x",
    backgroundSize: "25% auto",
  }
  const comercialBackground = {
    backgroundImage: `url('/images/comercial_summary.png')`,
    backgroundRepeat: "repeat-x",
    backgroundSize: "25% auto",
  }

  return (
    <section className="xl:flex xl:flex-col 6xl:items-center 6xl:justify-center">
      <div className="xl:flex xl:h-[60vh] xl:flex-col xl:justify-center 6xl:h-[40vh]" style={residencialBackground}>
        <div className="xl:flex xl:flex-col xl:gap-3 4xl:gap-6">
          <div className="xl:flex xl:flex-col xl:items-center xl:gap-1">
            <p className="xl:text-6xl xl:font-light xl:text-[#ffffff]  ">Residencial</p>
            <hr className="xl:w-[28%] xl:border-b-[0.5px] xl:border-[#ffffff] 4xl:w-[25%] 5xl:w-[18%] 6xl:w-[25%]" />
          </div>
          <p className="xl:m-auto xl:w-[85%] xl:text-center xl:text-5xl xl:font-light xl:text-[#ffffff] 5xl:w-[60%]">
            Mauris vitae risus urna. Phasellus placerat sit amet nulla non lobortis. Pellentesque sed interdum enim.
          </p>
        </div>
      </div>
      <div className="xl:flex xl:h-[60vh] xl:flex-col xl:justify-center 6xl:h-[40vh]" style={comercialBackground}>
        <div className="xl:flex xl:flex-col xl:gap-3 4xl:gap-6">
          <div className="xl:flex xl:flex-col xl:items-center xl:gap-1">
            <p className="xl:text-6xl xl:font-light xl:text-[#ffffff]  ">Comercial</p>
            <hr className="xl:w-[28%] xl:border-b-[0.5px] xl:border-[#ffffff] 4xl:w-[25%] 5xl:w-[18%] 6xl:w-[25%]" />
          </div>
          <p className="xl:m-auto xl:w-[85%] xl:text-center xl:text-5xl xl:font-light xl:text-[#ffffff] 5xl:w-[60%]">
            Mauris vitae risus urna. Phasellus placerat sit amet nulla non lobortis. Pellentesque sed interdum enim.
          </p>
        </div>
      </div>
    </section>
  )
}
