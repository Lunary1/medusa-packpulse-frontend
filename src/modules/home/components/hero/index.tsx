import { Button, Heading } from "@medusajs/ui"
import Image from "next/image" // Import Next.js Image component

const Hero = () => {
  return (
    <div className="relative h-[75vh] w-full bg-gray-50 overflow-hidden">
      {/* Background Image Section */}
      <Image
        src="https://packpulse-bucket.ams3.digitaloceanspaces.com/background" // Update with your image path
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        quality={80}
        className="z-0"
      />

      {/* Overlay and Content Section */}
      <div className="absolute inset-0 z-10 flex items-center pl-16">
        <div className="text-left max-w-lg space-y-4">
          <Heading
            level="h1"
            className="text-5xl font-bold text-white leading-tight"
          >
            PackPulse
          </Heading>
          <Heading
            level="h2"
            className="text-lg font-light text-white tracking-wider"
          >
            Rip&Ship | Online store
          </Heading>
        </div>
      </div>
    </div>
  )
}

export default Hero
