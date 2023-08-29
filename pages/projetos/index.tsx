import { useState } from "react"
import ProjectCard from "components/ProjectCard"
import { ProjectsData } from "data/mockData"
export default function Projects(): React.ReactElement {
  const [projectsType, setProjectsType] = useState<"RESIDENCIAL" | "COMERCIAL">("RESIDENCIAL")

  const textColor = (type: "RESIDENCIAL" | "COMERCIAL") => (projectsType === type ? "#676060" : "#D7C5C5")

  return (
    <div className="flex flex-col items-center py-4">
      <div className="mb-24 mt-8 flex w-[40%] flex-row items-center justify-center gap-4 border-b border-[#676060] p-4">
        <button onClick={() => setProjectsType("RESIDENCIAL")}>
          <p
            className={`font-montserrat font-light tracking-wider xl:text-3xl xl:text-[${textColor(
              "RESIDENCIAL"
            )}] duration-100 ease-in 4xl:text-[32px] 5xl:text-[32px]`}
          >
            RESIDENCIAL
          </p>
        </button>

        <p className="font-montserrat font-light tracking-wider xl:text-3xl xl:text-[#676060] 4xl:text-[42] 5xl:text-[42px]">
          /
        </p>
        <button onClick={() => setProjectsType("COMERCIAL")}>
          <p
            className={`font-montserrat font-light tracking-wider xl:text-3xl xl:text-[${textColor(
              "COMERCIAL"
            )}] duration-100 ease-in 4xl:text-[32px] 5xl:text-[32px]`}
          >
            COMERCIAL
          </p>
        </button>
      </div>
      <div className="grid grid-cols-3 gap-6">
        {ProjectsData.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
    </div>
  )
}
