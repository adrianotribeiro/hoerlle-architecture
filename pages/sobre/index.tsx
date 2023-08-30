import Image from "next/image"

export default function Sobre(): React.ReactElement {
  return (
    <div className="flex h-full w-full flex-col items-center">
      <div className="flex h-full w-full flex-col items-center bg-[url('/images/bg_00.png')]">
        <div className="flex h-full w-full flex-col items-center justify-center bg-[#D9D9D9]/80 ">
          <div className="grid h-full w-full grid-cols-2 md:grid-cols-5">
            <div className="col-span-2 flex h-1/6 w-full flex-col items-center justify-center md:col-span-3 md:h-full">
              <div className="m-2 border-b border-[#676060] p-2 md:m-4 md:p-4">
                <h1 className="mt-12 font-montserrat text-4xl font-light tracking-wider md:mt-0 md:text-7xl">
                  Eduardo Hoerlle
                </h1>
              </div>
              <h2 className="mb-8 text-lg font-light tracking-wider md:mb-16 md:text-2xl">
                Lorem ipsum dolor sit amet.
              </h2>
              <p className="w-10/12 text-base font-light tracking-wider md:w-8/12 md:text-xl">
                In malesuada enim id aliquam rutrum. Etiam vitae nunc vehicula, volutpat leo et, viverra elit. Curabitur
                leo orci, feugiat ac facilisis ut, pellentesque ac massa. Phasellus quis vulputate felis. Praesent
                maximus quam sagittis, pretium augue a, pulvinar justo.
              </p>
            </div>
            <div className="order-first col-span-2 h-5/6 md:order-last md:col-span-2 md:h-full ">
              <Image
                width={500}
                height={300}
                priority={true}
                src="/images/eduardo_profile.png"
                alt="Eduardo Hoerlle"
                className="h-full w-full border-8 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
