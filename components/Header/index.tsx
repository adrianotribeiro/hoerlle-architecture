"use client"
import { animated, useSpring } from "@react-spring/web"
import Link from "next/link"
import React, { useState } from "react"
import ResponsiveHeader from "components/ResponsiveHeader"

export default function Header(): React.ReactElement {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const { transform } = useSpring({
    transform: isOpen ? "translateY(0rem)" : "translateY(-60rem)",
  })

  const hamburgerButtonLine = "h-1 w-8 my-1 rounded-full bg-[#121010] transition ease transform duration-300 z-10"

  return (
    <section className="">
      <div className="hidden md:flex md:justify-around md:py-3">
        <div>
          <p className="md:text-[35px] md:text-[#676060] xl:text-[40px]">Eduardo Hoerlle</p>
        </div>
        <div className="md:flex md:items-center md:gap-3 xl:gap-6">
          <Link className="md:text-base md:text-[#676060] md:hover:border-b-2 md:hover:border-[#676060]" href={"/"}>
            HOME
          </Link>
          <Link
            className="md:text-base md:text-[#676060] md:hover:border-b-2 md:hover:border-[#676060]"
            href={"/projetos"}
          >
            PROJETOS
          </Link>
          <Link
            className="md:text-base md:text-[#676060] md:hover:border-b-2 md:hover:border-[#676060]"
            href={"/sobre"}
          >
            SOBRE
          </Link>
          <button className="h-[30px] md:flex md:w-[108px] md:items-center md:justify-center md:rounded md:bg-[#B1AAAA] md:text-base md:text-[#ffff]">
            CONTATOS
          </button>
        </div>
      </div>
      <animated.div
        className="absolute left-0 top-0 z-30 h-[40vh] w-full bg-white/5 backdrop-blur-sm lg:hidden"
        style={{ transform }}
      >
        <ResponsiveHeader />
      </animated.div>
      <div className="flex justify-around py-2 sm:hidden">
        <div>
          <p className="text-[30px] text-[#676060]">Eduardo Hoerlle</p>
        </div>
        <div
          className="z-30"
          onClick={() => {
            setIsOpen(!isOpen)
          }}
        >
          <button className="group flex h-12 w-12 flex-col items-center justify-center">
            <div
              className={`${hamburgerButtonLine} ${
                isOpen
                  ? "translate-y-3 rotate-45 opacity-50 group-hover:opacity-100"
                  : "opacity-50 group-hover:opacity-100"
              }`}
            />
            <div className={`${hamburgerButtonLine} ${isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"}`} />
            <div
              className={`${hamburgerButtonLine} ${
                isOpen
                  ? "-translate-y-3 -rotate-45 opacity-50 group-hover:opacity-100"
                  : "opacity-50 group-hover:opacity-100"
              }`}
            />
          </button>
        </div>
      </div>
    </section>
  )
}
