import { CardStack } from "../ui/card-stack";
import { cn } from "../../utils/cn";
export default function CardStackDemo() {
  return (
    (<div className="flex items-center justify-center w-full">
      <CardStack items={CARDS} />
    </div>)
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className
}) => {
  return (
    (<span
      className={cn(
        "font-bold bg-emerald-100  text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}>
      {children}
    </span>)
  );
};

const CARDS = [
  {
    id: 0,
    name: "Team codeKerdos",
    designation: "",
    content: (
      <p className="text-black" style={{backgroundColor:'#F7F7DA', borderRadius:'20px', padding:'20px'}}>
        At c<i className="text-yellow-500 fa-brands fa-node-js"></i>deKerdos, 
        <Highlight>we make it clear,</Highlight> From basics to advanced, we’re always near.
      </p>
    ),
  },
  {
    id: 2,
    name: "Team codeKerdos",
    designation: "",
    content: (
      <p className="text-white" style={{backgroundColor:'#1BABBC', borderRadius:'20px', padding:'20px'}}> 
        <i class="fa-solid fa-signature"></i> Join our path <i className="fa-solid fa-dove"></i>, where your <i className="fa-brands fa-cloudversify"></i> dreams ignite,<Highlight>With CodeKerdos,</Highlight> your future’s in sight.
      </p>
    ),
  },
  {
    id: 1,
    name: "Team codeKerdos",
    designation: "",
    content: (
      <p className="text-white" style={{backgroundColor:'#253A20', borderRadius:'20px', padding:'20px'}}>
       <i className="fa-solid fa-pencil"></i> Learn to <i className="fa-thin fa-keyboard"></i> code and{" "}
        <Highlight> watch it flow,</Highlight> <i className="fa-solid fa-indian-rupee-sign"></i> Earn while you learn,  <Highlight>let your <i className="fa-solid fa-laptop-code"></i> skills grow.</Highlight> 
        with us, your journey’s smooth and bright. Turning <Highlight>knowledge into earnings</Highlight>, <i className="fa-solid fa-sun"></i> day and <i className="fa-regular fa-moon"></i> night.
      </p>
    ),
  },
  
];
