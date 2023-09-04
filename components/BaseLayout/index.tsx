import { PropsWithChildren } from "react"
import Footer from "components/FooterSection"
import Header from "components/Header"

export default function BaseLayout({ children }: PropsWithChildren) {
  return (
    <>
      <div className="flex h-screen w-full flex-col justify-between 6xl:container">
        <Header />
        <div className="w-full 6xl:container">{children}</div>
        <Footer />
      </div>
    </>
  )
}
