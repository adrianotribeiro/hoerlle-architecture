import Image from "next/image"
import React from "react"

export default function FormSection(): React.ReactElement {
  return (
    <section className="mb-16 xl:flex xl:justify-around">
      <div className="xl:w-[50%] ">
        <form action="" className="xl:flex xl:flex-col xl:gap-3">
          <label htmlFor="title" className="xl:py-4 xl:text-4xl xl:font-light xl:text-[#454242]">
            Contato
          </label>
          <div className="xl:flex xl:flex-col">
            <label className="xl:text-[25px] xl:font-light xl:text-[#454242]" htmlFor="name">
              Name
            </label>
            <input
              className="border-b-2 border-[#454242] focus:outline-none xl:text-[#454242]"
              type="text"
              name="name"
            />
          </div>
          <div className="xl:flex xl:flex-col">
            <label className="xl:text-[25px] xl:font-light xl:text-[#454242]" htmlFor="email">
              Email
            </label>
            <input
              className="border-b-2 border-[#454242] focus:outline-none xl:text-[#454242]"
              type="email"
              name="email"
            />
          </div>
          <div className="xl:flex xl:flex-col">
            <label className="xl:text-[25px] xl:font-light xl:text-[#454242]" htmlFor="subject">
              Assunto
            </label>
            <input
              className="border-b-2 border-[#454242] focus:outline-none xl:text-[#454242]"
              type="text"
              name="subject"
            />
          </div>
          <div className="xl:flex xl:flex-col xl:pb-2">
            <label className="xl:text-[25px] xl:font-light xl:text-[#454242]" htmlFor="message">
              Mensagem
            </label>
            <textarea
              className="border-b-2 border-[#454242] focus:outline-none xl:text-[#454242]"
              name="message"
              id=""
              cols={30}
              rows={10}
            ></textarea>
          </div>
          <button className="xl:m-auto xl:w-[30%] xl:rounded xl:bg-[#454242] xl:py-[6px] xl:text-white xl:hover:bg-[#454242]/50 xl:hover:text-[#454242]">
            ENVIAR
          </button>
        </form>
      </div>
      <div>
        <Image
          src="/images/dudu_profile.png"
          width={300}
          height={300}
          alt="Eduardo Hoerlle Image"
          className="xl:w-[24.37rem]"
        />
      </div>
    </section>
  )
}
