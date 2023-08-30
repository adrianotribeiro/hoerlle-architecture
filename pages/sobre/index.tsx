import Image from "next/image"

export default function Sobre(): React.ReactElement {
  return (
    <div className="flex h-full w-full flex-col items-center">
      <div className="flex h-full w-full flex-col items-center bg-[url('/images/bg_00.png')]">
        <div className="flex h-full w-full flex-col items-center justify-center bg-[#D9D9D9]/80 ">
          <div className="grid h-full w-full grid-cols-5">
            <div className="col-span-3 flex h-full w-full flex-col items-center justify-center">
              <div className="m-4 border-b border-[#676060] p-4">
                <h1 className="font-montserrat text-7xl font-light tracking-wider">Eduardo Hoerlle</h1>
              </div>
              <h2 className="mb-16 text-2xl font-light tracking-wider">Lorem ipsum dolor sit amet.</h2>
              <p className="w-8/12 text-xl font-light tracking-wider">
                In malesuada enim id aliquam rutrum. Etiam vitae nunc vehicula, volutpat leo et, viverra elit. Curabitur
                leo orci, feugiat ac facilisis ut, pellentesque ac massa. Phasellus quis vulputate felis. Praesent
                maximus quam sagittis, pretium augue a, pulvinar justo.
              </p>
            </div>
            <div className="col-span-2 h-full">
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
