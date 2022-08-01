import { Button, Grid } from "@mui/material";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

import AllComment from "./allComments";
import VuiAvatar from "components/VuiAvatar";

// import linearGradient from "assets/theme/functions/linearGradient";

export default function Comment({ id, content, author, dateTime, comments }) {
  console.log(id, content, author, dateTime, comments);
  return (
    <Grid marginTop={2}>
      <VuiBox
        sx={({}) => ({
          width: "65%",
          padding: "18px 22px",

          //justifyContent: "space-between",
          flexDirection: "row",
          height: "auto",
          mx: "auto",
          borderRadius: "20px",
          background:
            "linear-gradient(166deg, rgba(3,2,27,0.6162174342393207) 0%, rgba(6,16,132,0.7086544090292367) 66%, rgba(17,8,129,0.8094947451636905) 100%)",
          // background: linearGradient(cardContent.main, cardContent.state, cardContent.deg),
          transform: "translateY(-90%)",
          zIndex: "1000",
        })}
      >
        <Grid display="flex">
          <VuiTypography variant="lg" color="white" fontWeight="bold" mb="1px" height="auto">
            <Grid display="flex" height="auto" backgroundColor="rgba(3,2,27,0.6162174342393207)">
              <VuiAvatar src={author.profilePic} size="sm" margin={2} />
              <Grid marginLeft={2} marginRight={2}>
                {author.name}
              </Grid>
            </Grid>
            <h6>{dateTime}</h6>
          </VuiTypography>

          <Grid marginLeft={3}>
            <h2>{content}</h2>
          </Grid>
        </Grid>
        <Grid>
          {/* buttons here */}
          
          <Grid align="center" >
            <Button
              // onClick={Post.addLike(id)}
              style={{
                margin: 20,
                padding: "10px",
                width: "200px",
                backgroundImage:
                  "linear-gradient(to right, #0575E6 0%, #021B79  51%, #0575E6  100%)",
                padding: "15px 45px",
                align: "center",
                transition: "0.5s",
                size: "auto",
                color: "white",
                border: "10px",
                position: "right center" /* change the direction of the change here */,
              }}
            >
              like
            </Button>

            <Button
              style={{
                padding: "10px",
                width: "200px",
                margin: 20,
                backgroundImage:
                  "linear-gradient(to right, #0575E6 0%, #021B79  51%, #0575E6  100%)",

                padding: "15px 45px",
                align: "center",

                transition: "0.5s",
                size: "auto",
                color: "white",

                border: "10px",

                //position: "right center" /* change the direction of the change here */,
              }}
            >
              Comment
            </Button>
          </Grid>
        </Grid>

        {/* <AllComment CommentTable={comments} /> */}
      </VuiBox>
    </Grid>
  );
}
