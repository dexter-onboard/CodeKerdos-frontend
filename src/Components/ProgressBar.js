import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

export const LinearProgressBar = styled(LinearProgress)(({ theme }) => ({
  height: 5,
  width: 100,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    ...theme.applyStyles("dark", {
      backgroundColor: theme.palette.grey[800],
    }),
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "#1a90ff",
    ...theme.applyStyles("dark", {
      backgroundColor: "#308fe8",
    }),
  },
}));

export default function CustomizedProgressBars() {
  return (
    <div>
      <LinearProgressBar variant="determinate" value={50} />
    </div>
  );
}
