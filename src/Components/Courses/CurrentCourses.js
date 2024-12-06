import React from "react";
import "./Courses.css"; // Assuming the CSS file is named ProductCard.css
import Ripple from "../ui/ripple";
import {
  mernLaunchLink,
  mernLink,
  mernSpringLaunchLink,
  springLaunchLink,
} from "./courseDetailsPdfLinks";

export default function CurrentCourses() {
  const openCourseDetailsPdf = (link) => {
    if (link) {
      window.open(link, "_blank", "noopener,noreferrer");
    } else {
      console.error("PDF link is not provided.");
    }
  };
  const handleDragUpwards = () => {
    let scrollHeight;

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden md:shadow-xl">
        <h1 className="responsive-product-heading">Our Courses</h1>
        <div className="z-10 flex flex-wrap justify-between md:justify-center">
          <div className="product-card">
            <div className="product-card__image">
              <img
                src="https://media.licdn.com/dms/image/D5612AQESQJ-mxlr4HQ/article-cover_image-shrink_720_1280/0/1708448148640?e=2147483647&v=beta&t=t6Rgl9p2JjfsRZ_XkN1WvsRcAIlUtRuYoPoqZmkJYbo"
                alt="Red Nike Shoes"
              />
            </div>
            <div className="product-card__info">
              <div className="flex flex-col gap-3 items-start">
                <h2 className="product-card__title">MERN</h2>
                <p className="product-card__description">
                  MongoDB ExpressJS ReactJS NodeJS
                </p>{" "}
                <button
                  onClick={() => openCourseDetailsPdf(mernLink)}
                  className="details-btn"
                >
                  Course Details
                </button>
              </div>
              <div className="product-card__price-row">
                <span className="product-card__price">₹40,000</span>
                <button className="product-card__btn">Buy now!</button>
              </div>
            </div>
          </div>

          <div className="product-card">
            <div className="product-card__image">
              <img
                src="https://cdn.kwork.com/files/portfolio/t0/15/1eb9b2423e9721c98a7a802e4bdf7a9ad0b4b324-1675625645.jpg"
                alt="Red Nike Shoes"
              />
            </div>
            <div className="product-card__info">
              <div className="flex flex-col gap-3 items-start">
                <h2 className="product-card__title">
                  FullStack Launchpad(Node.js & Spring Boot)
                </h2>

                <p className="product-card__description">
                  Java, DSA, Frontend, Backend, ReactJS
                </p>

                <button
                  onClick={() => openCourseDetailsPdf(mernSpringLaunchLink)}
                  className="details-btn"
                >
                  Course Details
                </button>
              </div>

              <div className="product-card__price-row">
                <span className="product-card__price">₹70,000</span>
                <button className="product-card__btn">Buy now!</button>
              </div>
            </div>
          </div>

          <div className="product-card">
            <div className="product-card__image">
              <img
                src="https://cdn.solace.com/wp-content/uploads/2018/12/spring-boot-java.jpg"
                alt="Red Nike Shoes"
              />
            </div>
            <div className="product-card__info">
              <div className="flex flex-col gap-3 items-start">
                <h2 className="product-card__title">
                  FullStack Launchpad(Spring Boot)
                </h2>
                <p className="product-card__description">
                  Java, DSA, Frontend, springboot, ReactJS
                </p>
                <button
                  onClick={() => openCourseDetailsPdf(springLaunchLink)}
                  className="details-btn"
                >
                  Course Details
                </button>
              </div>
              <div className="product-card__price-row">
                <span className="product-card__price">₹60,000</span>
                <button className="product-card__btn">Buy now!</button>
              </div>
            </div>
          </div>

          <div className="product-card">
            <div className="product-card__image">
              <img
                src="https://e0.pxfuel.com/wallpapers/225/409/desktop-wallpaper-px-node-js-188-49-kb-thumbnail.jpg"
                alt="Red Nike Shoes"
              />
            </div>
            <div className="product-card__info">
              <div className="flex flex-col gap-3 items-start">
                <h2 className="product-card__title">
                  FullStack Launchpad(Node.js)
                </h2>

                <p className="product-card__description">
                  Java, DSA, Frontend, Nodejs, ReactJS
                </p>
                <button
                  onClick={() => openCourseDetailsPdf(mernLaunchLink)}
                  className="details-btn"
                >
                  Course Details
                </button>
              </div>
              <div className="product-card__price-row">
                <span className="product-card__price">₹60,000</span>
                <button className="product-card__btn">Buy now!</button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 mb-20 z-40">
          <h3 className="responsive-product-heading">Still Confused ? 🤔</h3>
          <div className="flex justify-center items-center mt-3">
            <button
              className="bg-[#1a4f8f] text-white text-xl py-3 px-6 rounded-md hover:bg-[#003a74] transition duration-300"
              onClick={handleDragUpwards}
            >
              Book a free webinar 🥳
            </button>
          </div>
        </div>
        <Ripple />
      </div>
    </>
  );
}
