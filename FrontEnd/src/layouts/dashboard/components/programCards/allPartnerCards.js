import { Grid } from "@mui/material";
import programsData from "services/programs";
import ProgramCard from ".";

export default function AllProgramCards() {
  return programsData.map((x) => (
    <Grid item xs={12} lg={6} xl={3}>
      <ProgramCard
        name={x.name}
        logo={x.logo}
        budget={x.budget}
        platforms={x.platform}
        description={x.description}
      />
    </Grid>
  ));
  
}
