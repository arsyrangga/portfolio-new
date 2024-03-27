import React from "react";
import TextDivider from "../divider/TextDivider";
import { projectData } from "@/constant/constant";
import Image from "next/image";

const Portfolio = () => {
  return (
    <section className="pt-10 mt-10 paddingDefault">
      <TextDivider text="Portfolio" id="portofolio" />
      <div className="mobile" id="portofolioMobile" style={{position : "relative", bottom: "225px"}}></div>

      <div className="imageContainerPortfolio">
        {projectData.map((e, i) => (
          <div
            className="imageWrapPortfolio"
            key={i.toString()}
            data-aos={`zoom-in-${
              (i + 1) % 3 === 0 ? "right" : (i + 1) % 3 === 1 ? "left" : "down"
            }`}
            data-aos-delay={`${50 * (i + i)}`}
          >
            <Image
              src={e.image}
              alt={e.title}
              layout="fill"
              objectFit="cover"
              style={{
                objectPosition:
                  (i + 1) % 3 === 0
                    ? "right"
                    : (i + 1) % 3 === 1
                    ? "left"
                    : "center",
                    borderRadius : "15px",
                    border : "4px solid #00D1FF"
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
