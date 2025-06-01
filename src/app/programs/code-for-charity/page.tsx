import InfoBanner from "@/components/InfoBanner";
import { Descriptor } from "@/app/about/_components";
import Image from "next/image";

// images
import Banner from "@/assets/images/Programs/Code_for_charity_banner.png";

export default async function CodeForCharityPage() {
  return (
    <>
      <div className="main_container h-max flex flex-col space-y-section w-full px-standard sm:px-block max-w-[1400px] m-auto">
        <div className="aboutSection w-full">
          <Image
            src={Banner}
            width={1400}
            height={550}
            alt="banner_about_section"
            className="banner max-h-[400px] h-auto object-cover m-auto"
          />
        </div>

        <div className="space-y-10" id="program">
          <Descriptor
            title="What is code for charity?"
            descriptions={[
              "Code for Charity is a flagship program of Coding for Social Good Nepal that provides pro-bono coding services to national and international non-profits. Our team of skilled developers and designers work closely with NGOs to develop websites, applications, and other digital solutions that help them achieve their goals.",
              "Our goal is to help non-profits leverage technology to increase their impact and reach more people. We believe that technology has the power to transform the way organizations work and help them achieve their mission more effectively.",
            ]}
          />

          <Descriptor
            title="How to apply?"
            descriptions={[
              "If you are a non-profit organization looking for technical support, we would love to hear from you! Please fill out the form below to tell us more about your organization and the project you need help with. Our team will review your application and get back to you as soon as possible.",
              "If you are a developer or designer interested in volunteering with Code for Charity, please reach out to us at contact@cosognepal.org or fill the form available at about us page. We are always looking for talented individuals who are passionate about using their skills for social good.",
            ]}
          />

          <Descriptor
            title="Why volunteer?"
            descriptions={[
              "Volunteering with Code for Charity is a great way to use your skills for social good and make a positive impact in the world. By volunteering with us, you will have the opportunity to work on real-world projects that help non-profits achieve their goals and make a difference in the lives of others.",
              "You'll also get a chance to learn from professionals, get your code reviewed, network with other developers, and add this experience to your resume. We'll provide you with the support, resources, and a letter of recommendation to help you succeed in your career.",
            ]}
          />
        </div>

        <div className="flex-col space-y-12">
          <h2 className="title font-bold text-para md:text-title text-black-dark">
            Testimonials
          </h2>
          <div className="testimonial flex px-2 gap-4 flex-wrap justify-between">
            <div className="max-w-xl py-4">
              <h1 className="title font-bold text-para md:text-sub-title text-black-dark">
                Peter Nfon
              </h1>
              <p className="text-sm">Founder, Sustainable Actions Afrika</p>

              <div className="space-y-small mt-4">
                <p className="font-normal text-sub-para md:text-para text-black-mid">
                  Sustainable Actions Afrika is a non-profit organization based
                  in Cameroon that works to promote sustainable development and
                  environmental conservation in Africa.
                </p>

                <p className="font-normal text-sub-para md:text-para text-black-mid">
                  We developed their website under the Code for Charity program.
                  This is the video of Mr. Peter Nfon, the founder and CEO of
                  the organization, sharing his experience with the team.
                </p>

                <p className="font-normal text-sub-para md:text-para text-black-mid">
                  Visit the website:{" "}
                  <a
                    href="https://sustainableactionsafrika.org/"
                    className="text-blue-blue underline"
                    target="_blank"
                    title="Website of Sustainable Actions Afrika"
                  >
                    https://sustainableactionsafrika.org/
                  </a>
                </p>
              </div>
            </div>
            <div id="video" className="videoWrapper">
              <iframe
                width="600"
                height="315"
                src="https://www.youtube.com/embed/Dry5hBqGH9o?si=hDgPJkqNK-8tbK_h"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full md:w-[625px] md:h-[352px]"
              ></iframe>
            </div>
          </div>

          <div className="testimonial flex px-2 gap-4 flex-wrap justify-between flex-row-reverse">
            <div className="max-w-xl py-4">
              <h1 className="title font-bold text-para md:text-sub-title text-black-dark">
                Ghanashyam Bishwakarma
              </h1>
              <p className="text-sm">
                President, National Adolescent Boys&apos; Network Nepal
              </p>

              <div className="space-y-small mt-4">
                <p className="font-normal text-sub-para md:text-para text-black-mid">
                  NABN Nepal is a network founded with the primary objective of
                  ensuring the comprehensive rights of children and adolescents,
                  advocating for gender equality, ending gender-based violence,
                  and empowering the active participation of adolescents in
                  these efforts.
                </p>

                <p className="font-normal text-sub-para md:text-para text-black-mid">
                  Our team, in collaboration with Technify Club of Duke
                  University helped them build their online presence. This is
                  the video of Mr. Ghanashyam Bishwakarma, the president of the
                  organization, sharing his experience with the team.
                </p>

                <p className="font-normal text-sub-para md:text-para text-black-mid">
                  Visit the website:{" "}
                  <a
                    href="https://nabnnepal.org/"
                    className="text-blue-blue underline"
                    target="_blank"
                    title="Website of NABN Nepal"
                  >
                    https://nabnnepal.org/
                  </a>
                </p>
              </div>
            </div>
            <div id="video" className="videoWrapper">
              <iframe
                width="600"
                height="315"
                src="https://www.youtube.com/embed/qJdMG6zLY3U?si=kbDQ5XR3i_82Mv1U"
                title="Testimonial from the President of the National Adolescent Boys' Network Nepal"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full md:w-[625px] md:h-[352px]"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <InfoBanner
        leftContent={
          <article className="max-w-[800px]">
            <h1 className="font-bold text-mid-title">
              Do you need help with a technical project?
            </h1>
            <p>We are here to help! Fill out the form.</p>
          </article>
        }
        cta={{
          text: "Access the form",
          link: " https://docs.google.com/forms/d/e/1FAIpQLScojNFk_uLuQd48KgT8zkCrbRqPjApYeWPGPVeESG19rlxZ3A/viewform?usp=pp_url&entry.76041240=President&entry.145747725=Nepal",
        }}
      />
    </>
  );
}
