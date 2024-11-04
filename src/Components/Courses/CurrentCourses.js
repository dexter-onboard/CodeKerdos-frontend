import React from 'react';
import './Courses.css'; // Assuming the CSS file is named ProductCard.css
import Ripple from "../ui/ripple";


export default function CurrentCourses() {
  return (
    <>
      <div       
        className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden md:shadow-xl">
        <h1
          style={{
            fontWeight: 'bold', // Set font weight to bold
          }}
          className='z-10 text-center text-[5rem]'>Our Courses</h1>
        <div className="z-10 flex flex-wrap justify-between">
          <div className="product-card">
            <div className="product-card__image">
              <img
                src="https://media.licdn.com/dms/image/D5612AQESQJ-mxlr4HQ/article-cover_image-shrink_720_1280/0/1708448148640?e=2147483647&v=beta&t=t6Rgl9p2JjfsRZ_XkN1WvsRcAIlUtRuYoPoqZmkJYbo"
                alt="Red Nike Shoes"
              />
            </div>
            <div className="product-card__info">
              <h2 className="product-card__title">MERN</h2>
              <p className="product-card__description">
                MongoDB ExpressJS ReactJS NodeJS
              </p>
              <div className="product-card__price-row">
                <span className="product-card__price">$149.99</span>
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
              <h2 className="product-card__title">FullStack Launchpad(Node.js & Spring Boot)</h2>
              <p className="product-card__description">
                Java, DSA, Frontend, Backend, ReactJS
              </p>
              <div className="product-card__price-row">
                <span className="product-card__price">$149.99</span>
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
              <h2 className="product-card__title">FullStack Launchpad(Spring Boot)</h2>
              <p className="product-card__description">
                Java, DSA, Frontend, springboot, ReactJS
              </p>
              <div className="product-card__price-row">
                <span className="product-card__price">$149.99</span>
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
              <h2 className="product-card__title">FullStack Launchpad(Node.js)</h2>
              <p className="product-card__description">
                Java, DSA, Frontend, Nodejs, ReactJS
              </p>
              <div className="product-card__price-row">
                <span className="product-card__price">$149.99</span>
                <button className="product-card__btn">Buy now!</button>
              </div>
            </div>
          </div>
        </div>
        <Ripple />
      </div>
    </>
  );
};

