import Image from "next/image"
import React from "react"

export default function FormSection(): React.ReactElement {
  return (
    <section className="mb-16 flex flex-col xl:h-[83vh] xl:flex-row xl:justify-around xl:py-2 4xl:h-[85vh] 5xl:h-[88vh] 5xl:items-center 6xl:h-[88vh] 6xl:items-center">
      <div className="m-auto w-[85%] xl:m-0 xl:w-[50%]">
        <form action="" className="flex flex-col gap-3">
          <label htmlFor="title" className="py-4 font-montserrat text-4xl font-light text-[#454242]">
            Contato
          </label>
          <div className="flex flex-col font-montserrat">
            <label className="text-[25px] font-light text-[#454242]" htmlFor="name">
              Name
            </label>
            <input className="border-b-2 border-[#454242] text-[#454242] focus:outline-none" type="text" name="name" />
          </div>
          <div className="flex flex-col">
            <label className="text-[25px] font-light text-[#454242]" htmlFor="email">
              Email
            </label>
            <input
              className="border-b-2 border-[#454242] text-[#454242] focus:outline-none"
              type="email"
              name="email"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-[25px] font-light text-[#454242]" htmlFor="subject">
              Assunto
            </label>
            <input
              className="border-b-2 border-[#454242] text-[#454242] focus:outline-none"
              type="text"
              name="subject"
            />
          </div>
          <div className="flex flex-col pb-2">
            <label className="text-[25px] font-light text-[#454242]" htmlFor="message">
              Mensagem
            </label>
            <textarea
              className="border-b-2 border-[#454242] text-[#454242] focus:outline-none"
              name="message"
              id=""
              cols={30}
              rows={10}
            ></textarea>
          </div>
          <button className="m-auto w-[30%] rounded bg-[#454242] py-[6px] text-white hover:bg-[#454242]/50 hover:text-[#454242]">
            ENVIAR
          </button>
        </form>
      </div>
      <div className="md:flex md:justify-center xl:h-fit xl:items-center  xl:py-4">
        <Image
          src="/images/dudu_profile.png"
          width={400}
          height={300}
          alt="Eduardo Hoerlle Image"
          className="px-7 py-4 md:w-full md:px-14 md:py-8 xl:w-[24.37rem] xl:p-0 3sm:px-[75px]"
        />
      </div>
    </section>
  )
}
