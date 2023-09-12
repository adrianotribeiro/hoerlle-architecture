import { animated, useSpring } from "@react-spring/web"
import Image from "next/image"

export default function Sobre(): React.ReactElement {
  const imageAnim = useSpring({
    from: {
      transform: "translateX(10rem)",
      opacity: 0,
    },
    to: {
      transform: "translateX(0rem)",
      opacity: 1,
    },
    config: {
      duration: 400,
    },
  })

  const textConfig = (delay: number) => ({
    from: {
      transform: "translateX(-10rem)",
      opacity: 0,
    },
    to: {
      transform: "translateX(0rem)",
      opacity: 1,
    },
    delay,
    config: {
      duration: 300,
    },
  })

  const textAnimH1 = useSpring({ ...textConfig(200) })
  const textAnimH2 = useSpring({ ...textConfig(400) })
  const textAnimP = useSpring({ ...textConfig(600) })

  return (
    <div className="flex h-full w-full flex-col items-center overflow-hidden 6xl:h-[88vh]">
      <div className="flex h-full w-full flex-col items-center bg-[url('/images/bg_00.png')] ">
        <div className="flex h-full w-full flex-col items-center justify-center bg-[#D9D9D9]/80 ">
          <div className="grid h-full w-full grid-cols-2 md:grid-cols-5">
            <div className="col-span-2 flex h-1/6 w-full flex-col items-center justify-center md:col-span-3 md:h-full xl:w-[73vw] xl:border 3xl:w-[75vw] 4xl:w-[75] 6xl:w-[38vw]">
              <div className="m-2 border-b border-[#676060] p-2 md:m-4 md:p-4">
                <animated.h1
                  style={textAnimH1}
                  className="mt-12 font-montserrat text-4xl font-light tracking-wider md:mt-0 md:text-7xl"
                >
                  Eduardo Hoerlle
                </animated.h1>
              </div>
              <animated.h2
                style={textAnimH2}
                className="mb-8 text-lg font-light tracking-wider md:mb-16 md:text-2xl xl:mb-8"
              >
                Lorem ipsum dolor sit amet.
              </animated.h2>
              <animated.p
                style={textAnimP}
                className="w-10/12 text-base font-light tracking-wider md:w-8/12 md:text-xl xl:w-[85%] xl:text-center xl:text-3xl 5xl:w-[70%] 6xl:w-[80%]"
              >
                In malesuada enim id aliquam rutrum. Etiam vitae nunc vehicula, volutpat leo et, viverra elit. Curabitur
                leo orci, feugiat ac facilisis ut, pellentesque ac massa. Phasellus quis vulputate felis. Praesent
                maximus quam sagittis, pretium augue a, pulvinar justo.
              </animated.p>
            </div>
            <animated.div
              style={imageAnim}
              className="order-first col-span-2 h-5/6 md:order-last md:col-span-2 md:h-full xl:flex xl:justify-end"
            >
              <Image
                width={500}
                height={300}
                priority={true}
                src="/images/eduardo_profile.png"
                alt="Eduardo Hoerlle"
                className="h-full w-full border-8 object-cover xl:w-[352px] 3xl:w-[382px] 4xl:w-[463px] 4_xl:w-[441px] 5xl:w-[574px] 6xl:w-[1000px]"
              />
            </animated.div>
          </div>
        </div>
      </div>
    </div>
  )
}
