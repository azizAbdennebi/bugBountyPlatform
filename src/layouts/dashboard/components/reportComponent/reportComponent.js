import { Grid } from "@mui/material";
import GetLocalAccountData from "../../../../Controllers/localAccount";
import allReports from "../../../../dummyData/allReports";
import DefaultProjectCard from "../../../../examples/Cards/ProjectCards/DefaultProjectCard";
import account from "../../../../Models/account";

export default function ReportComponent() {
    GetLocalAccountData()
    // console.log(account.mainAccount.getImage());
  return allReports.map((x) => (
    <Grid item xs={12} md={6} xl={4}>
      <DefaultProjectCard
        image="https://thedigitalprojectmanager.com/wp-content/uploads/2021/01/Write-A-Project-Plan-That-Youre-Proud-Of-featured-image-2.png"
        label={"severity: "+x.impact}
        title={x.title}
        description={x.description}
        action={{
          type: "internal",
          route: "/pages/profile/profile-overview",
          color: "white",
          label: "Details",
        }}
        authors={[
          {
              
            image: account.mainAccount.getImage(),
            name: account.mainAccount.getName(),
          },
        ]}
      />
    </Grid>
  ));
}
