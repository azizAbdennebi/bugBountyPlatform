import React from "react";

import { Card } from "@mui/material";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import * as GradientProgress from "@delowar/react-circle-progressbar";
import { IoHappy } from "react-icons/io5";
import colors from "assets/theme/base/colors";
import linearGradient from "assets/theme/functions/linearGradient";
import VuiAvatar from "components/VuiAvatar";

function getPlatforms({ platforms }) {
  platforms.map((platta) => {});
}

const PartnerCard = ({ name, logo, budget, platforms, description }) => {
  const { info, gradients } = colors;
  const { cardContent } = gradients;

  return (
    <Card sx={{ height: "340px" }}>
      <VuiBox display="flex" flexDirection="column">
        <VuiBox display="flex" justifyContent="center">
          <VuiTypography variant="lg" color="white" fontWeight="bold" mb="1px">
            <VuiAvatar src={logo} size="xl" />
            {name}
          </VuiTypography>
        </VuiBox>
        <VuiBox display="flex" flexDirection="column">
          <br />
          <VuiTypography variant="button" color="text" fontWeight="regular" mb="10px">
            budget:{budget}
          </VuiTypography>
        </VuiBox>
        <VuiTypography variant="button" color="white" fontWeight="regular" mb="10px">
          {description}
        </VuiTypography>
        <VuiBox sx={{ alignSelf: "center", justifySelf: "center", zIndex: "-1" }}></VuiBox>
      </VuiBox>
    </Card>
  );
};

export default PartnerCard;
