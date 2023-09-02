import { animated, useSpring } from "@react-spring/web"

import React from "react"

export default function Footer(): React.ReactElement {
  const footerAnim = useSpring({
    from: {
      transform: "translateY(5rem)",
      opacity: 0,
    },
    to: {
      transform: "translateY(0rem)",
      opacity: 1,
    },
  })

  return (
    <animated.section
      style={footerAnim}
      className="flex h-[200px] w-full flex-col items-center justify-around py-2 md:h-[100px] md:flex-row"
    >
      <div className="flex h-full items-center justify-center md:items-end">
        <p className="font-montserrat text-[40px] text-[#676060]">Eduardo Hoerlle</p>
      </div>
      <div className="flex h-[100%] flex-col items-center justify-center gap-2 text-center text-[#676060] md:flex-row md:items-end md:text-start">
        <p className="font-montserrat leading-10">© 2023 Eduardo Hoerlle - Desenvolvido por Nissian Software</p>
      </div>
    </animated.section>
  )
}
