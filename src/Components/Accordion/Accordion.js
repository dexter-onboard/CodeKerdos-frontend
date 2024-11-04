import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import "./Accordion.css";
import { IconFileTypePdf } from "@tabler/icons-react";
import {
  RadioButtonUnchecked,
  CheckCircleRounded,
  StarBorder,
  Star,
  ArrowCircleDown,
  ArrowDropDownCircle,
  ExpandCircleDown,
  CheckCircleTwoTone,
} from "@mui/icons-material";
import CustomizedProgressBars, { LinearProgressBar } from "../ProgressBar";
import { ArrowDownIcon } from "lucide-react";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ExpandCircleDown sx={{ fontSize: "2rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "#3E80F6",
  borderRadius: "10px",
  padding: "10px",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(180deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
  ...theme.applyStyles("dark", {
    backgroundColor: "rgba(255, 255, 255, .05)",
  }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function CustomizedAccordions({ data }) {
  const [expanded, setExpanded] = React.useState("");
  const [isCompleted, setIsCompleted] = React.useState(true);
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      {data.map((course) => (
        <Accordion
          key={course.id} // Ensure each accordion has a unique key
          expanded={expanded === course.id} // Check if the current accordion is expanded
          onChange={handleChange(course.id)} // Trigger state change when clicked
          className="accordionBody mb-3"
        >
          <AccordionSummary
            aria-controls={`panel-${course.id}-content`} // Dynamic aria-controls
            id={`panel-${course.id}-header`} // Dynamic id
            className="flex gap-2 items-center"
          >
            <Typography sx={{ fontSize: "24px" }}>{course.name}</Typography>{" "}
            {/* Display course name dynamically */}
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
            <div>
              <ul className="flex flex-col gap-3 ps-3">
                <li className="bg-teal-50 p-3 text-md flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircleTwoTone
                      className={isCompleted ? "green-icon" : "grey-icon"}
                    />

                    <Typography>Data Structures and Algorithms </Typography>
                  </div>
                  <div className="flex items-center gap-2">
                    <CustomizedProgressBars sx={{ width: "100px" }} />
                    <StarBorder />
                    <IconFileTypePdf />
                  </div>
                </li>
                <li className="bg-teal-50 p-3 text-md flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircleTwoTone
                      className={isCompleted ? "green-icon" : "grey-icon"}
                    />
                    <Typography>Frontend Web Developement </Typography>
                  </div>
                  <div className="flex items-center gap-2">
                    <CustomizedProgressBars sx={{ width: "100px" }} />
                    <StarBorder />
                    <IconFileTypePdf />
                  </div>
                </li>
                <li className="bg-teal-50 p-3 text-md flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircleTwoTone
                      className={isCompleted ? "green-icon" : "grey-icon"}
                    />
                    <Typography>Backend Development in Node Js</Typography>
                  </div>
                  <div className="flex items-center gap-2">
                    <CustomizedProgressBars sx={{ width: "100px" }} />
                    <StarBorder />
                    <IconFileTypePdf />
                  </div>
                </li>
                <li className="bg-teal-50 p-3 text-md flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircleTwoTone
                      className={isCompleted ? "green-icon" : "grey-icon"}
                    />
                    <Typography>Deep Dive in ReactJs </Typography>
                  </div>
                  <div className="flex items-center gap-2">
                    <CustomizedProgressBars sx={{ width: "100px" }} />
                    <StarBorder />
                    <IconFileTypePdf />
                  </div>
                </li>
              </ul>
            </div>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
