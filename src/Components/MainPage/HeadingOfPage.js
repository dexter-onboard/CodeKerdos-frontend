import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import "./Main.css";
export default function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "{",
      className:
        "text-[2rem] md:text-[3rem] lg:-text[6rem] text-blue-500 dark:text-blue-500 ",
    },
    {
      text: "Code",
      className:
        "cedarville-cursive text-[2rem] md:text-[3rem] lg:-text[6rem] text-white ",
    },
    {
      text: "}",
      className:
        "text-[2rem] md:text-[3rem] lg:-text[6rem] text-blue-500 dark:text-blue-500 ",
    },
    {
      text: "with",
      className:
        "text-[2rem] md:text-[3rem] lg:-text[6rem] text-white dark:text-blue-500",
    },
    {
      text: "Kerdos",
      className:
        "text-[2rem] md:text-[3rem] lg:-text[6rem] text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[5rem]  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  "></p>
      {/* <AnimatedBall/> */}
      <TypewriterEffectSmooth words={words} />
      <p
        className="text-[1rem] md:text-[2rem]"
        style={{
          fontFamily: '"Edu AU VIC WA NT Guides",system-ui',
        }}
      >{`More than commands, more than rules — we teach you to code, not just use the tools!`}</p>
    </div>
  );
}
