import "../styles/tailwind.css"
import { AppProps } from "next/dist/shared/lib/router/router"

import Header from "components/Header"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <section className="font-montserrat">
        <Component {...pageProps} />
      </section>
    </>
  )
}

export default MyApp
