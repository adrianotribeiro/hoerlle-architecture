import Head from "next/head"
import Demonstration from "components/DemonstrationSection"
import Home from "./home/Index"

export default function Web() {
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
      <Home />
      <Demonstration />
    </>
  )
}
