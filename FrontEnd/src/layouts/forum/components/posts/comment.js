
import { Card } from "@mui/material";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import * as GradientProgress from "@delowar/react-circle-progressbar";
import { IoHappy } from "react-icons/io5";
import colors from "assets/theme/base/colors";
import linearGradient from "assets/theme/functions/linearGradient";


export default function Comment({CommentTable}) {
return(
   
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
            <VuiTypography color="white" variant="h4" justifyContent="center" alignItems="center">
              {title}
            </VuiTypography>
          </VuiBox>
        </VuiBox>
    )
}

