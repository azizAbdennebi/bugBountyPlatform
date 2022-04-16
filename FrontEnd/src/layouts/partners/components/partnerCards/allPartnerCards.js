import { Grid } from "@mui/material";
import partnersData from "services/partners";
import PartnerCard from ".";

export default function AllPartnerCards() {
    return(partnersData.map((x) => (
        <Grid item xs={12} lg={6} xl={3}>
          <PartnerCard name={x.name} logo={x.logo} budget={x.budget} platforms={x.platform} description={x.description} />
        </Grid>
      )))
}
