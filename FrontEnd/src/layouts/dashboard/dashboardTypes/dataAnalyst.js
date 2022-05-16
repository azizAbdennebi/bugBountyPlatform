// @mui material components
import Grid from "@mui/material/Grid";
import { Card } from "@mui/material";
// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

// Vision UI Dashboard React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";

// Vision UI Dashboard React base styles
import colors from "assets/theme/base/colors";

// Dashboard layout components
import WelcomeMark from "layouts/dashboard/components/WelcomeMark";
import SatisfactionRate from "layouts/dashboard/components/SatisfactionRate";
import ReferralTracking from "layouts/dashboard/components/ReferralTracking";

// React icons
import { IoGlobe } from "react-icons/io5";
import { IoWallet } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";

// Data
import GradientBorder from "examples/GradientBorder";
import VuiInput from "components/VuiInput";
// import  DefaultProjectCard  from "examples/Cards/ProjectCards/DefaultProjectCard";
// import ReportComponent from "./components/reportComponent/reportComponent";
import ReportComponent from "../components/reportComponent/reportComponent";

function DataAnalystDashboard() {
  const { gradients } = colors;
  const { cardContent } = gradients;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <VuiBox py={3}>
        <VuiBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "this year's money", fontWeight: "regular" }}
                count="$53,000"
                percentage={{ color: "success", text: "+55%" }}
                icon={{ color: "info", component: <IoWallet size="22px" color="white" /> }}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "total aquired" }}
                count="$103,430"
                percentage={{ color: "success", text: "+5%" }}
                icon={{ color: "info", component: <FaShoppingCart size="20px" color="white" /> }}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "published programs" }}
                count="2,300"
                percentage={{ color: "success", text: "+3%" }}
                icon={{ color: "info", component: <IoGlobe size="22px" color="white" /> }}
              />
            </Grid>
          </Grid>
        </VuiBox>
        <VuiBox mb={3}>
          <Grid container spacing="18px">
            <Grid item xs={12} lg={12} xl={5}>
              <WelcomeMark />
            </Grid>
            <Grid item xs={12} lg={6} xl={3}>
              <SatisfactionRate />
            </Grid>
            <Grid item xs={12} lg={6} xl={4}>
              <ReferralTracking />
            </Grid>
          </Grid>
        </VuiBox>
        
        <br />
        <Grid container spacing={3} direction="row" justifyContent="center" alignItems="stretch">
          <Card>
            <VuiBox display="flex" flexDirection="column" height="100%" margin={3}>
              <VuiBox display="flex" flexDirection="column" mb="24px">
                <VuiTypography color="white" variant="lg" fontWeight="bold" mb="6px">
                  Reports for consulting
                </VuiTypography>
              </VuiBox>
              <Grid container spacing={3}>
                <ReportComponent />
              </Grid>
            </VuiBox>
          </Card>
        </Grid>
      </VuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default DataAnalystDashboard;
