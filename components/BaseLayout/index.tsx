import { PropsWithChildren } from "react"
import Header from "components/Header"

export default function BaseLayout({ children }: PropsWithChildren) {
  return (
    <>
      <div className="6lx:content-center 6xl:container ">
        <Header />
        {children}
      </div>
    </>
  )
}
