import React, { useCallback, useState } from "react";
import TextDivider from "../divider/TextDivider";
import { projectData } from "@/constant/constant";
import Image from "next/legacy/image";
import ImageViewer from "react-simple-image-viewer";

const Portfolio = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openImageViewer = (index: number) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  };

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };
  return (
    <section className="pt-10 mt-10 paddingDefault">
      <TextDivider text="Portfolio" id="portofolio" />
      <div
        className="mobile"
        id="portofolioMobile"
        style={{ position: "relative", bottom: "225px" }}
      ></div>

      <div className="imageContainerPortfolio">
        {projectData.map((e, i) => (
          <div
            className="imageWrapPortfolio"
            key={i.toString()}
            data-aos={`zoom-in-${
              (i + 1) % 3 === 0 ? "right" : (i + 1) % 3 === 1 ? "left" : "down"
            }`}
            onClick={()=>openImageViewer(i)}
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
                borderRadius: "15px",
                border: "4px solid #00D1FF",
              }}
            />
          </div>
        ))}
      </div>
      {isViewerOpen && (
        <ImageViewer
          src={projectData.map((e) => e.image)}
          currentIndex={currentImage}
          disableScroll={false}
          closeOnClickOutside={true}
          onClose={closeImageViewer}
        />
      )}
    </section>
  );
};

export default Portfolio;
