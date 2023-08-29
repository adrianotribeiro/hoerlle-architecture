import Image from "next/image"
import { useState } from "react"
import { ProjectsDataProps } from "data/mockData"

interface ProjectProps {
  project: ProjectsDataProps
}

export default function ProjectCard({ project }: ProjectProps) {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <div
      className="h-max w-max flex-1 cursor-pointer flex-col xl:relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        width={300}
        height={500}
        priority={true}
        src={project.image[0]}
        alt={project.title}
        className=" xl:w-full xl:brightness-50"
      />
      <div className={`bottom-0 px-6 py-4 xl:absolute`}>
        <div className={`${isHovered ? "opacity-100" : "opacity-0"} flex-1 flex-col justify-end duration-200 ease-in`}>
          <p className="text-white xl:text-[3rem] 4xl:text-[24px] 5xl:text-[24px]">{project.title}</p>
          <p className="text-[14px] font-light leading-6 text-white">{project.summary}</p>
        </div>
      </div>
    </div>
  )
}
