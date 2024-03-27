import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="hero paddingDefault mt-10 pt-10" id="about">
      <div className="hero-left">
      <div className="mobile" id="aboutMobile" style={{position : "relative", bottom: "125px"}}></div>

        <h4 className="text-4xl" data-aos="flip-left" data-aos-delay="200">
          Hello, It’s Me
        </h4>
        <h3 className="text-5xl py-6" data-aos="zoom-in" data-aos-delay="300">
          Rangga Arsy Prawira
        </h3>
        <h4 className="text-4xl pb-6" data-aos="zoom-out" data-aos-delay="400">
          And i’m a Frontend Developer
        </h4>
        <p data-aos="flip-left" data-aos-delay="900">
          I am Senior Frontend developer with more than 4 years experience,{" "}
          <br />
          Expert in Frontend and responsive UI and Seo friendly code
        </p>
        <div className="flex gap-5 mt-5">
          <Image
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-duration="1000"
            src={"/assets/icon/icon_in.svg"}
            width={45}
            height={45}
            alt="icon"
          />
          <Image
            data-aos-delay="700"
            data-aos-duration="1000"
            data-aos="fade-down"
            src={"/assets/icon/icon_email.svg"}
            width={45}
            height={45}
            alt="icon"
          />
          <Image
            data-aos-delay="800"
            data-aos-duration="1000"
            data-aos="fade-up"
            src={"/assets/icon/icon_phone.svg"}
            width={46}
            height={46}
            alt="icon"
          />
        </div>


        <button
          className="btnContactMe mt-6"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-delay="1800"
        >
          Contact Me
        </button>
      </div>
      <div
        className="hero-right"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <Image
          src={"/assets/images/rangga_arsy_prawira.png"}
          alt="profile_image"
          width={500}
          height={500}
        />
      </div>
    </section>
  );
};

export default Hero;
