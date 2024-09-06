"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";
import image from "@/public/assets/graduate.png";
import idcard from "@/public/assets/idcard.png";
import sigin from "@/public/assets/signin.png";
import { Card, Button } from "antd";
import Logo from "@/components/Logo"
import Link from "next/link";
import SignInCard from "./SignInCard";
import { useRouter, useSearchParams } from "next/navigation";

type Props = {};

const WelcomePage = (props: Props) => {
  const router = useRouter();
  const [showSignIn, setShowSignIn] = useState(false);
  const searchParams = useSearchParams();

  const handleSignInClick = () => {
    setShowSignIn(true);
    // Push the state to the URL parameter
    router.push("?page=signin", undefined);
  };

  useEffect(() => {
    const page = searchParams.get("page");
    if (page === "signin") {
      setShowSignIn(true);
    }
  }, [searchParams]);
  
  return (
      <div className="flex flex-col justify-center h-screen m-auto items-center gap-10 font-montserrat md:gap-28 md:flex-row">
        <Logo/>
        <div className="left-side text-center items-center flex flex-col gap-5 text-white">
          <Image src={image} alt="image" width={208} height={225} quality={100}/>
          <h3 className="font-bold text-5xl w w-80">
            Welcome to <span className="uppercase">one uph</span>
          </h3>
          <p className="italic font-semibold">
            ready to apply for your future in UPH?
          </p>
        </div>

        {/* desktop button */}
        <div className="right-side flex-col gap-5 tracking-wide hidden md:flex">
        {!showSignIn ? (
          <>
            <Card style={{ width: 300, height: 170 }} hoverable onClick={handleSignInClick}>
              <p className="font-semibold text-xl text-secondary-color font-montserrat">Sign In</p>
              <p className="italic mt-1 mr-28 leading-tight text-accent-color font-montserrat">
                if you already have an account
              </p>
              <Image src={sigin} width={40} alt="image" className="mt-5 float-end cursor-pointer" />
            </Card>

            <Link href={"/home/nationality"}>
              <Card style={{ width: 300, height: 170 }} hoverable>
                <p className="font-semibold text-xl text-secondary-color font-montserrat">Register</p>
                <p className="italic mt-1 mr-28 leading-tight text-accent-color font-montserrat">
                  to start your application
                </p>
                <Image src={idcard} width={40} alt="image" className="mt-5 float-end cursor-pointer" />
              </Card>
            </Link>
          </>
        ) : (
          <SignInCard />
        )}
      </div>

        {/* mobile button */}
        <div className="right-side flex-col gap-5 tracking-wide flex md:hidden w-full">
          <Button className="h-14 bg-white text-main-color">
            <p className="font-semibold text-xl">Sign In</p>
            <p className="italic mt-1 mr-28 leading-tight hidden md:block">if you already have an account</p>
            <Image src={sigin} width={40} alt="image" className="mt-5 float-end cursor-pointer hidden md:block"/>
          </Button>

          <Button className="h-14 bg-main-color text-white">
            <p className="font-semibold text-xl">Register</p>
            <p className="italic mt-1 mr-28 leading-tight hidden md:block">to start your application</p>
            <Image src={idcard} width={40} alt="image" className="mt-5 float-end cursor-pointer hidden md:block"/>
          </Button>
        </div>
      </div>
  );
};

export default WelcomePage;
