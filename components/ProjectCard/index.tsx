import { animated, useSpring } from "@react-spring/web"

import Image from "next/image"
import { useRouter } from "next/router"

import { useState } from "react"
import { ProjectsDataProps } from "data/mockData"

interface ProjectProps {
  project: ProjectsDataProps
}

export default function ProjectCard({ project }: ProjectProps) {
  const { push, pathname } = useRouter()

  const [isHovered, setIsHovered] = useState(false)

  const props = useSpring({
    from: {
      transform: "translateY(-5rem)",
      opacity: 0,
    },
    to: {
      transform: "translateY(0rem)",
      opacity: 1,
    },
    delay: 300 * Number(project.id),
    config: { mass: 2, tension: 220, friction: 60 },
  })
  return (
    <animated.div style={props}>
      <div
        className="relative flex cursor-pointer flex-col items-center justify-center"
        onClick={() => push(`${pathname}/${project.id}`)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          width={300}
          height={500}
          priority={true}
          src={project.image[0]}
          alt={project.title}
          className=" w-full brightness-50 xl:w-[317px] 3xl:w-[355px] 4xl:w-[440px] 4_xl:w-[400px] 5xl:w-[580px] 6xl:w-[570px]"
        />
        <div className={`absolute bottom-0 px-6 py-4`}>
          <div
            className={`${
              isHovered ? "md:opacity-100" : "md:opacity-0"
            } flex-1 flex-col justify-end duration-200 ease-in xs:opacity-100`}
          >
            <p className="font-montserrat text-[24px] text-white ">{project.title}</p>
            <p className="font-montserrat text-[16px] font-light leading-6 text-white">{project.summary}</p>
          </div>
        </div>
      </div>
    </animated.div>
  )
}
