import React from "react";
import { cn } from "../../utils/cn";
import Marquee from "../ui/marquee";

const reviews = [
  {
    name: "CodeKerdos",
    username: "@CodeKerdos",
    body: "Transparency.",
    img: "https://cdn3.iconfinder.com/data/icons/seo-internet-marketing-flat-icons/250/web-code.png",
  },
  {
    name: "CodeKerdos",
    username: "@CodeKerdos",
    body: "No Language Barrier.",
    img: "https://cdn-icons-png.flaticon.com/512/2456/2456814.png",
  },
  {
    name: "CodeKerdos",
    username: "@CodeKerdos",
    body: "Real world projects.",
    img: "https://cdn-icons-png.flaticon.com/512/1090/1090985.png",
  },
  {
    name: "CodeKerdos",
    username: "@CodeKerdos",
    body: "course completion certificate.",
    img: "https://cdn-icons-png.flaticon.com/512/2038/2038087.png",
  },
  {
    name: "CodeKerdos",
    username: "@CodeKerdos",
    body: "Internships with recognized certificate to enhance your resume.",
    img: "https://cdn-icons-png.flaticon.com/512/1802/1802977.png",
  },
  {
    name: "CodeKerdos",
    username: "@CodeKerdos",
    body: "Unlock job opportunities with our tailored job recommendation certificates.",
    img: "https://cdn3.iconfinder.com/data/icons/seo-internet-marketing-flat-icons/250/web-code.png",
  },
  {
    name: "CodeKerdos",
    username: "@CodeKerdos",
    body: "Guidance from MNC experts to elevate your career.",
    img: "https://cdn-icons-png.flaticon.com/512/2456/2456814.png",
  },
  {
    name: "CodeKerdos",
    username: "@CodeKerdos",
    body: "Resume Building Support.",
    img: "https://cdn-icons-png.flaticon.com/512/1090/1090985.png",
  },
  {
    name: "CodeKerdos",
    username: "@CodeKerdos",
    body: "Prepare for Interviews.",
    img: "https://cdn-icons-png.flaticon.com/512/2038/2038087.png",
  },
  {
    name: "CodeKerdos",
    username: "@CodeKerdos",
    body: "Help in Open Source Contribution like (GSOC) only for students.",
    img: "https://cdn-icons-png.flaticon.com/512/1802/1802977.png",
  },
  {
    name: "CodeKerdos",
    username: "@CodeKerdos",
    body: "will bring the company on your table as per your skills.",
    img: "https://cdn-icons-png.flaticon.com/512/2038/2038087.png",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export default function MarqueeDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden  bg-[#f5f5f5] ">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
