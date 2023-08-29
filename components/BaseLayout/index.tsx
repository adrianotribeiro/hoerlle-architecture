import Header from "components/Header"
import { PropsWithChildren } from "react"

export default function BaseLayout({ children }: PropsWithChildren) {
  return (
    <>
      <div className="container content-center ">
        <Header />
        {children}
      </div>
    </>
  )
}
