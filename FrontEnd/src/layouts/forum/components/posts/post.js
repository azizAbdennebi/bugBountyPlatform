import React from "react";

import { Card, Grid } from "@mui/material";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import * as GradientProgress from "@delowar/react-circle-progressbar";
import { IoHappy } from "react-icons/io5";
import colors from "assets/theme/base/colors";
import linearGradient from "assets/theme/functions/linearGradient";
import VuiAvatar from "components/VuiAvatar";
// import comment from ".";
const Post = ({ title, content,author,dateTime }) => {
  const { info, gradients } = colors;
  const { cardContent } = gradients;

  return (
    <Card sx={{ height: "Auto" }}>
      <VuiBox display="flex" flexDirection="column">
        <br/><br/>
        <VuiBox
          
          sx={({ breakpoints }) => ({
            width: "80%",
            padding: "18px 22px",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            height: "82px",
            mx: "auto",
            borderRadius: "20px",
            background: "linear-gradient(90deg, rgba(3,2,27,1) 0%, rgba(5,5,94,0.7562734566482843) 70%, rgba(17,8,129,1) 100%)",
            // background: linearGradient(cardContent.main, cardContent.state, cardContent.deg),
            transform: "translateY(-90%)",
            zIndex: "1000",
          })}
        >
          <VuiTypography color="text" variant="caption" display="inline-block" fontWeight="regular">
          <VuiAvatar src={author.profilePic} size="xl"/>
            
          </VuiTypography>
          <VuiBox
            flexDirection="column"
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{ minWidth: "80px" }}
          >
            <VuiTypography color="white" variant="h3">
            {author.name}
            </VuiTypography>
            <VuiTypography color="text" variant="caption" fontWeight="regular">
             {dateTime}
            </VuiTypography>
          </VuiBox>
          <VuiTypography color="text" variant="caption" display="inline-block" fontWeight="regular">
            
          </VuiTypography>
        </VuiBox>


        <VuiBox 
          sx={({ breakpoints }) => ({
            height: "100%",
            width: "100%",
            display: "flex",

            width: "auto%",
            padding: "18px 22px",
            
            justifyContent: "space-between",
            flexDirection: "row",
            alignSelf: "center",
            justifySelf: "center",
            height: "82px",
            mx: "auto",
            borderRadius: "20px",
            background: linearGradient(cardContent.main, cardContent.state, cardContent.deg),
            transform: "translateY(-90%)",
            zIndex: "1000",
          })}
        >
          <VuiBox
            flexDirection="column"
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{ minWidth: "80px" }}
          >
            <VuiTypography color="white" variant="h3" justifyContent="center" alignItems="center">
              {title}
            </VuiTypography>
          </VuiBox>
        </VuiBox>
        <VuiTypography alignItems="center" variant="lg" color="white" fontWeight="bold" mb="14px">
          {content}
        </VuiTypography>
        <br/><br/>
        <VuiBox
          sx={({ breakpoints }) => ({
            width: "80%",
            padding: "18px 22px",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            height: "82px",
            mx: "auto",
            borderRadius: "20px",
            background: linearGradient(cardContent.main, cardContent.state, cardContent.deg),
            transform: "translateY(-90%)",
            zIndex: "1000",
          })}
        >
          <VuiTypography color="text" variant="caption" display="inline-block" fontWeight="regular">
          <VuiAvatar src={author.profilePic} size="xl"/>
            
          </VuiTypography>
          <VuiBox
            flexDirection="column"
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{ minWidth: "80px" }}
          >
            <VuiTypography color="white" variant="h3">
            {author.name}
            </VuiTypography>
            <VuiTypography color="text" variant="caption" fontWeight="regular">
             {dateTime}
            </VuiTypography>
          </VuiBox>
          <VuiTypography color="text" variant="caption" display="inline-block" fontWeight="regular">
            
          </VuiTypography>
        </VuiBox>
      </VuiBox>
      
      {/* <comment/> */}
    </Card>

  );
};

export default Post;
