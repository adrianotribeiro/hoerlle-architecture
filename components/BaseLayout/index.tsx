import { PropsWithChildren } from "react"
import Header from "components/Header"
import Footer from "components/FooterSection"

export default function BaseLayout({ children }: PropsWithChildren) {
  return (
    <>
      <div className="container flex h-screen w-full flex-col justify-between">
        <Header />
        <div className="container  w-full">{children}</div>
        <Footer />
      </div>
    </>
  )
}
