import React from "react";
import { Cover } from "../ui/cover";
// import checking from "../images/6497822.jpg";
export default function SoonCourses() {
  return (
    <>
      <div className="h-[100%] bg-[#10172A]">
        <p className="pt-[2rem] text-center text-white text-[6rem]">
          <span className="responsive-text">Courses</span>
          <span className="responsive-soon-text">Coming Soon!</span>
          {/* <Cover>coming soon!</Cover> */}
        </p>

        <div className="z-10 flex flex-wrap justify-between md:justify-center">
          <div className="product-card">
            <div className="product-card__image">
              <img
                src="https://images.ctfassets.net/23aumh6u8s0i/c04wENP3FnbevwdWzrePs/1e2739fa6d0aa5192cf89599e009da4e/nextjs"
                alt="next.js"
              />
            </div>
            <div className="product-card__info">
              <h2 className="product-card__title">Next.JS</h2>
              <p className="product-card__description">
                {/* TODO When Launch */}
              </p>
              <div className="product-card__price-row">
                {/* <span className="product-card__price">$149.99</span> */}
                <button className="product-card__btn">Comming Soon</button>
              </div>
            </div>
          </div>
          <div className="product-card">
            <div className="product-card__image">
              <img
                src="https://cdn.builtin.com/cdn-cgi/image/f=auto,fit=cover,w=1200,h=635,q=80/https://builtin.com/sites/www.builtin.com/files/2021-12/machine-learning-examples-applications.png"
                alt="ML"
              />
            </div>
            <div className="product-card__info">
              <h2 className="product-card__title">Machine Learning</h2>
              <p className="product-card__description">
                {/* TODO When Launch */}
              </p>
              <div className="product-card__price-row">
                {/* <span className="product-card__price">$149.99</span> */}
                <button className="product-card__btn">Comming Soon</button>
              </div>
            </div>
          </div>
          <div className="product-card">
            <div className="product-card__image">
              <img
                src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Types_of_Artificial_Intelligence.jpg"
                alt="ai"
              />
            </div>
            <div className="product-card__info">
              <h2 className="product-card__title">Artificial-Intelligence</h2>
              <p className="product-card__description">
                {/* TODO When Launch */}
              </p>
              <div className="product-card__price-row">
                {/* <span className="product-card__price">$149.99</span> */}
                <button className="product-card__btn">Comming Soon</button>
              </div>
            </div>
          </div>
          <div className="product-card">
            <div className="product-card__image">
              <img
                src="https://www.vlrtraining.in/wp-content/uploads/2020/10/logo-devops.png"
                alt="ai"
              />
            </div>
            <div className="product-card__info">
              <h2 className="product-card__title">Devops</h2>
              <p className="product-card__description">
                {/* TODO When Launch */}
              </p>
              <div className="product-card__price-row">
                {/* <span className="product-card__price">$149.99</span> */}
                <button className="product-card__btn">Comming Soon</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
