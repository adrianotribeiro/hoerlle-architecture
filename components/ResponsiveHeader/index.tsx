import Link from "next/link"
import React from "react"

export default function ResponsiveHeader(): React.ReactElement {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <Link className="text-[#676060] hover:border-b-2 hover:border-[#676060]" href={"/"}>
        HOME
      </Link>
      <Link className="text-[#676060] hover:border-b-2 hover:border-[#676060]" href={"/projetos"}>
        PROJETOS
      </Link>
      <Link className="text-[#676060] hover:border-b-2 hover:border-[#676060]" href={"/sobre"}>
        SOBRE
      </Link>
      <button className="flex h-[30px] w-[108px] items-center justify-center rounded bg-[#B1AAAA] text-base text-[#ffff]">
        CONTATOS
      </button>
    </div>
  )
}
