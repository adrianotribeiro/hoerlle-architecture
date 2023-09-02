import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { ProjectsData, ProjectsDataProps } from "data/mockData"
import Image from "next/image"

export default function ProjectDetails() {
  const [project, setProject] = useState<ProjectsDataProps | null>(null)
  const { query, back } = useRouter()

  const { id } = query

  function getProjectFromQuery() {
    const projectFromQuery = ProjectsData.find((project) => Number(id) === project.id)
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
    <div className="container flex h-full w-full flex-col items-center">
      <div className="mb-16 mt-8 flex flex-row items-center justify-center gap-4 border-b border-[#676060] p-4 md:w-[40%]">
        <p className={`font-montserrat text-3xl font-light tracking-wider xs:text-xl`}>{project.title}</p>
      </div>
      <div className="flex max-h-[500px] w-full grow-0 flex-row overflow-hidden">
        <Image
          width={1000}
          height={1000}
          src={project.image[0]}
          alt="Eduardo Hoerlle"
          className="h-[500px] w-full object-cover"
        />
      </div>
      <div className="my-16 ">
        <p>
          Mauris vitae risus urna. Phasellus placerat sit amet nulla non lobortis. Pellentesque sed interdum enim.
          Mauris vitae risus urna. Phasellus placerat sit amet nulla non lobortis. Pellentesque sed interdum enim
        </p>
        <br />
        <p>
          Mauris vitae risus urna. Phasellus placerat sit amet nulla non lobortis. Pellentesque sed interdum enim.
          Mauris vitae risus urna. Phasellus placerat sit amet nulla non lobortis. Pellentesque sed interdum enim
        </p>
      </div>
      <div className="grid max-h-[550px] w-full grid-cols-2 gap-4 overflow-hidden">
        <Image
          width={1000}
          height={1000}
          src={project.image[1]}
          alt="Eduardo Hoerlle"
          className="h-[550px] w-full object-cover"
        />
        <Image
          width={1000}
          height={1000}
          src={project.image[2]}
          alt="Eduardo Hoerlle"
          className="h-[550px] w-full object-cover"
        />
      </div>
      <div className="my-16 ">
        <p>
          Mauris vitae risus urna. Phasellus placerat sit amet nulla non lobortis. Pellentesque sed interdum enim.
          Mauris vitae risus urna. Phasellus placerat sit amet nulla non lobortis. Pellentesque sed interdum enim
        </p>
        <br />
        <p>
          Mauris vitae risus urna. Phasellus placerat sit amet nulla non lobortis. Pellentesque sed interdum enim.
          Mauris vitae risus urna. Phasellus placerat sit amet nulla non lobortis. Pellentesque sed interdum enim
        </p>
      </div>
      <div className="mb-4 flex max-h-[600px] w-full grow-0 flex-row overflow-hidden">
        <Image
          width={1000}
          height={1000}
          src={project.image[3]}
          alt="Eduardo Hoerlle"
          className="h-[600px] w-full object-cover"
        />
      </div>
    </div>
  )
}
