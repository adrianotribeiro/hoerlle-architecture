import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { ProjectsData, ProjectsDataProps } from "data/mockData"
import Image from "next/image"

export default function ProjectDetails() {
  const [project, setProject] = useState<ProjectsDataProps | null>(null)
  const { query, back } = useRouter()

  const { id } = query

  function getProjectFromQuery() {
    const projectFromQuery = ProjectsData.find((project) => id === project.id)
    console.log({ projectFromQuery })
    if (projectFromQuery) {
      setProject(projectFromQuery)
    }
  }

  useEffect(() => {
    if (!project && id) {
      getProjectFromQuery()
    }
  }, [id, project])

  if (!project || !id) return null
  return (
    <div className="container flex h-full w-full flex-col items-center px-3 xl:px-12">
      <div className="mb-16 mt-8 flex flex-row items-center justify-center gap-4 border-b border-[#676060] p-4 md:w-[40%]">
        <p className={`font-montserrat text-3xl font-light tracking-wider `}>{project.title}</p>
      </div>
      <div className="flex max-h-[500px] w-full grow-0 flex-row overflow-hidden px-4">
        <Image
          width={1000}
          height={1000}
          src={project.image[0]}
          alt="Eduardo Hoerlle"
          className="h-[200px] w-full object-cover md:h-[500px]"
        />
      </div>
      <div className="my-8 items-center justify-center p-4 md:my-16 md:px-4 md:py-0">
        <p className="text-justify font-montserrat text-base font-light tracking-wider md:text-xl">
          Mauris vitae risus urna. Phasellus placerat sit amet nulla non lobortis. Pellentesque sed interdum enim.
          Mauris vitae risus urna. Phasellus placerat sit amet nulla non lobortis. Pellentesque sed interdum enim
        </p>
        <br />
        <p className="text-justify font-montserrat text-base font-light tracking-wider md:text-xl">
          Mauris vitae risus urna. Phasellus placerat sit amet nulla non lobortis. Pellentesque sed interdum enim.
          Mauris vitae risus urna. Phasellus placerat sit amet nulla non lobortis. Pellentesque sed interdum enim
        </p>
      </div>
      <div className="grid max-h-[550px] w-full grid-cols-2 gap-1 overflow-hidden px-4 md:gap-4">
        <Image
          width={1000}
          height={1000}
          src={project.image[1]}
          alt="Eduardo Hoerlle"
          className="h-[250px] w-full object-cover md:h-[550px]"
        />
        <Image
          width={1000}
          height={1000}
          src={project.image[2]}
          alt="Eduardo Hoerlle"
          className="h-[250px] w-full object-cover md:h-[550px]"
        />
      </div>
      <div className="my-8 items-center justify-center p-4 md:my-16 md:p-0">
        <p className="text-justify font-montserrat text-base font-light tracking-wider md:px-4 md:py-0 md:text-xl">
          Mauris vitae risus urna. Phasellus placerat sit amet nulla non lobortis. Pellentesque sed interdum enim.
          Mauris vitae risus urna. Phasellus placerat sit amet nulla non lobortis. Pellentesque sed interdum enim
        </p>
        <br />
        <p className="text-justify font-montserrat text-base font-light tracking-wider md:px-4 md:py-0 md:text-xl">
          Mauris vitae risus urna. Phasellus placerat sit amet nulla non lobortis. Pellentesque sed interdum enim.
          Mauris vitae risus urna. Phasellus placerat sit amet nulla non lobortis. Pellentesque sed interdum enim
        </p>
      </div>
      <div className="mb-4 flex max-h-[600px] w-full grow-0 flex-row overflow-hidden px-4">
        <Image
          width={1000}
          height={1000}
          src={project.image[3]}
          alt="Eduardo Hoerlle"
          className="h-[300px] w-full object-cover md:h-[600px]"
        />
      </div>
    </div>
  )
}
