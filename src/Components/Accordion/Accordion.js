import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import "./Accordion.css";
import { IconFileTypePdf } from "@tabler/icons-react";
import { ExpandCircleDown, CheckCircleTwoTone } from "@mui/icons-material";
import { v4 as uuidv4 } from "uuid";

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

export default function CustomizedAccordions({ studentCourses }) {
  const [expanded, setExpanded] = React.useState("");
  const [isCompleted, setIsCompleted] = React.useState(true);
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const handleOpenCourseStructurePdf = (link) => {
    if (link) {
      window.open(link, "_blank", "noopener,noreferrer");
    } else {
      console.error("PDF link is not provided.");
    }
  };

  return (
    <div>
      {studentCourses &&
        studentCourses.length > 0 &&
        studentCourses?.map((course) => (
          <Accordion
            key={course._id}
            expanded={expanded === course._id}
            onChange={handleChange(course._id)}
            className="accordionBody mb-3"
          >
            <AccordionSummary
              aria-controls={`panel-${course._id}-content`}
              id={`panel-${course._id}-header`}
              className="flex gap-2 items-center"
            >
              <Typography sx={{ fontSize: "24px" }}>{course.title}</Typography>{" "}
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
              <div className="my-2 ">
                <h6 className="font-bold italic">
                  Have a look on our course structure
                </h6>
              </div>
              <div>
                <ul className="flex flex-col gap-3 ps-3">
                  {course?.documents?.map((item) => (
                    <li
                      key={uuidv4()}
                      className="bg-teal-50 p-3 text-md flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2">
                        <CheckCircleTwoTone
                          className={isCompleted ? "green-icon" : "grey-icon"}
                        />
                        <Typography>{item.title}</Typography>
                      </div>
                      <div className="flex items-center gap-2">
                        {/* <CustomizedProgressBars sx={{ width: "100px" }} /> */}
                        {/* <StarBorder /> */}
                        <button
                          onClick={() =>
                            handleOpenCourseStructurePdf(item.link)
                          }
                        >
                          <IconFileTypePdf />
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </AccordionDetails>
          </Accordion>
        ))}
    </div>
  );
}
