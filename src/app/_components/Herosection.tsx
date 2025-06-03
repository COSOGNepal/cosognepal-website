import Image from "next/image";
import React from "react";

// images
import CosogLogo from "@/assets/logo.png";
import InstagramLogo from "@/assets/instagram_logo.svg";
import FacebookLogo from "@/assets/facebook_logo.svg";
import LinkedInLogo from "@/assets/linkedin_logo.svg";

const Herosection = () => {
  return (
    <section className="w-screen  h-[calc(100vh-300px)]">
      <main className="relative top-0  flex z-10 w-full h-full">
        <div className="item1 absolute">
          <div className="relative w-40 h-52  md:w-56 md:h-64 ">
            <svg
              width="484"
              height="484"
              viewBox="0 0 484 484"
              fill="none"
              className="-translate-x-1/3 -translate-y-1/3"
            >
              <g opacity="0.5">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M96.3412 145.2C96.3412 65.0083 161.555 0 242 0C322.445 0 387.659 65.0083 387.659 145.2V338.8C387.659 418.992 322.445 484 242 484C161.555 484 96.3412 418.992 96.3412 338.8V145.2ZM144.894 326.7C144.894 380.161 188.37 423.5 242 423.5C295.63 423.5 339.106 380.161 339.106 326.7V157.3C339.106 103.839 295.63 60.5 242 60.5C188.37 60.5 144.894 103.839 144.894 157.3V326.7Z"
                  fill="url(#paint0_linear_486_5910)"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M145.2 387.659C65.0083 387.659 0 322.445 0 242C0 161.555 65.0083 96.3412 145.2 96.3412H338.8C418.992 96.3412 484 161.555 484 242C484 322.445 418.992 387.659 338.8 387.659H145.2ZM326.7 339.106C380.161 339.106 423.5 295.63 423.5 242C423.5 188.37 380.161 144.894 326.7 144.894L157.3 144.894C103.839 144.894 60.5 188.37 60.5 242C60.5 295.63 103.839 339.106 157.3 339.106H326.7Z"
                  fill="url(#paint1_linear_486_5910)"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_486_5910"
                  x1="241.998"
                  y1="179.255"
                  x2="211.809"
                  y2="489.48"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FFCACA" />
                  <stop offset="1" stopColor="#CED8E1" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_486_5910"
                  x1="-28.673"
                  y1="387.659"
                  x2="413.585"
                  y2="139.073"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FCD1CB" />
                  <stop offset="1" stopColor="#F0F0F0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <div className="item2 absolute -bottom-20 left-1/2 -translate-x-1/2">
          <div className="relative w-52 h-64  md:w-72 md:h-96 ">
            <svg
              width="430"
              height="286"
              viewBox="0 0 430 286"
              fill="none"
              className="translate-y-1/2 "
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M154.157 0L0 143L136.231 269.371L172.083 236.114L71.7038 143L154.157 66.5142L236.611 143L215 163.047L175.463 126.371L139.611 159.629L275.843 286L430 143L275.843 0L215 56.4392L154.157 0ZM250.852 89.6963L308.315 143L250.852 196.304L275.843 219.486L358.296 143L275.843 66.5142L250.852 89.6963Z"
                fill="url(#paint0_linear_486_5921)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_486_5921"
                  x1="338.5"
                  y1="-182"
                  x2="-205.5"
                  y2="515.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#F7E1DF" />
                  <stop offset="0.64445" stopColor="#E1E1E1" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <div className="socialmedia z-[100] h-fit w-fit absolute bottom-standard right-standard md:right-standard sm:flex sm:flex-col hidden gap-small">
          <a
            href="https://www.facebook.com/Cosognepal"
            target="blank"
            className="cursor-pointer"
          >
            <Image src={FacebookLogo} width={40} height={40} alt="social" />
          </a>
          <a href="https://www.instagram.com/cosognepal" target="blank">
            <Image
              src={InstagramLogo}
              width={40}
              height={40}
              className="cursor-pointer"
              alt="social"
            />
          </a>
          <a href="https://www.linkedin.com/company/cosognepal/" target="blank">
            <Image src={LinkedInLogo} width={40} height={40} alt="social" />
          </a>
        </div>
        <main className="w-full flex flex-col-reverse justify-center h-auto max-w-[1400px] brk-1400:mx-auto md:flex-row brk-1400:px-0 px-standard">
          <div className="left brk-1400:px-0 relative z-0 w-full mt-block md:mt-0">
            <div className="flex flex-col h-full justify-center space-y-block">
              <div className="text_content">
                <div className="text-title text-dark-primary font-bold md:text-heading">
                  <h2>
                    <span className="hidden sm:inline-block">
                      Coding for Social Good Nepal
                    </span>
                  </h2>
                </div>
                <p className="max-w-[1000px] text-left text-faded text-para mt-standard leading-tight">
                  Coding for Social Good Nepal - also known as Cosog Nepal - is a non-for-profit organization
                  working to promote Computer Science Education and initiate
                  Computer Science Clubs in Secondary/High Schools in Nepal and
                  provide pro-bono services with charitable coding initiatives
                  to aid in Nepal&apos;s digitalization.
                </p>
              </div>
              <a
                href="https://forms.gle/euosQkdUW45P8mYc9"
                target="_blank"
                className="bg-primary cursor-pointer py-3 text-white text-center   rounded-[5px] font-medium w-full sm:w-48"
              >
                Join our community
              </a>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="relative md:w-64 aspect-square w-48 top-20 sm:top-auto  ">
              <Image src={CosogLogo} alt="logo" />
            </div>
          </div>
        </main>
      </main>
    </section>
  );
};

export default Herosection;
