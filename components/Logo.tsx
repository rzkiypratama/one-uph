import React from 'react'
import Image from "next/image";
import uphlogo from "@/public/assets/uph-logo.png";

type Props = {}

const Logo = (props: Props) => {
  return (
    <>
          <Image src={uphlogo} alt="image" width={185} height={40} className="absolute top-0 left-0 p-5" />
    </>
  )
}

export default Logo;