import "../styles/tailwind.css"
import { AppProps } from "next/dist/shared/lib/router/router"

import Header from "components/Header"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <section className="font-montserrat 6xl:m-auto 6xl:max-w-[1920px]">
        <Header />
        <Component {...pageProps} />
      </section>
    </>
  )
}

export default MyApp
