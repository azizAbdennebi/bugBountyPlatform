import { Grid } from "@mui/material";
import programsData from "services/programs";
import programsCard from ".";

export default function AllprogramsCards() {
    return(programsData.map((x) => (
        <Grid item xs={12} lg={6} xl={3}>
          <programsCard name={x.name}/>
        </Grid>
      )))
}
