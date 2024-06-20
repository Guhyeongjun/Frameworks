import { Slide } from "@mui/material";
import * as  React  from "react"

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default Transition