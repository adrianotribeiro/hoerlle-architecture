import { useState } from "react"
import ProjectCard from "components/ProjectCard"
import { ProjectsData } from "data/mockData"
export default function Projects(): React.ReactElement {
  const [projectsType, setProjectsType] = useState<"RESIDENCIAL" | "COMERCIAL">("RESIDENCIAL")

  const textColor = (type: "RESIDENCIAL" | "COMERCIAL") => (projectsType === type ? "#676060" : "#D7C5C5")

  return (
    <div className="flex flex-col items-center py-4 4xl:h-[82vh] 4_xl:h-[81.2vh] 5xl:h-[85vh] 6xl:h-[88.7vh]">
      <div className="mb-24 mt-8 flex flex-row items-center justify-center gap-4 border-b border-[#676060] p-4 xl:mb-12 xl:mt-0 xl:w-[40%] 4xl:mb-12 4xl:mt-4">
        <button onClick={() => setProjectsType("RESIDENCIAL")}>
          <p
            className={`font-montserrat text-3xl font-light tracking-wider xs:text-xl  xl:text-[${textColor(
              "RESIDENCIAL"
            )}] duration-100 ease-in`}
          >
            RESIDENCIAL
          </p>
        </button>

        <p className="font-montserrat text-3xl font-light tracking-wider xl:text-[#676060] xs:text-xl ">/</p>
        <button onClick={() => setProjectsType("COMERCIAL")}>
          <p
            className={`font-montserrat text-3xl  font-light  tracking-wider xs:text-xl xl:text-[${textColor(
              "COMERCIAL"
            )}] duration-100 ease-in`}
          >
            COMERCIAL
          </p>
        </button>
      </div>
      <div className="grid items-center gap-6 overflow-hidden sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xs:grid-cols-1 6xl:grid-cols-2">
        {ProjectsData.filter((data) => data.tag === projectsType).map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
    </div>
  )
}
