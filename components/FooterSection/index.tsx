import React from "react"

export default function Footer(): React.ReactElement {
  return (
    <section className="xl:flex xl:justify-around xl:self-end xl:border xl:py-2 6xl:m-auto 6xl:w-[70%]">
      <div>
        <p className="font-montserrat md:text-[35px] md:text-[#676060] xl:text-[40px]">Eduardo Hoerlle</p>
      </div>
      <div className="xl:flex xl:items-center xl:gap-2 xl:text-[#676060]">
        <p>©</p>
        <p> 2023 Eduardo Hoerlle - Desenvolvido por Nissian Software</p>
      </div>
    </section>
  )
}
