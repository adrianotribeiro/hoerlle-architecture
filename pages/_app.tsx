import "../styles/tailwind.css"
import { AppProps } from "next/dist/shared/lib/router/router"
import { Montserrat } from "next/font/google"
import Head from "next/head"
import BaseLayout from "components/BaseLayout"

const montserrat = Montserrat({subsets: ['latin']});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta property="og:url" content="https://next-enterprise.vercel.app/" />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/Blazity/next-enterprise/main/project-logo.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <title>Hoerlle Architecture</title>
      </Head>
      <main className={montserrat.className}>
        <BaseLayout>
          <Component {...pageProps} />
        </BaseLayout>
      </main>
    </>
  )
}

export default MyApp
