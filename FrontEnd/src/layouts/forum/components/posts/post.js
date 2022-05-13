import React from "react";

import { Button, Card, Grid } from "@mui/material";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

import colors from "assets/theme/base/colors";
// import linearGradient from "assets/theme/functions/linearGradient";
import VuiAvatar from "components/VuiAvatar";

import AllComment, { allComment } from "./allComments";
import Post from "services/PostsFunctions";

function PostComponent({ id, title, content, author, dateTime, comments, nbLikes }) {
  const { info, gradients } = colors;
  const { cardContent } = gradients;
  // console.log(comments);
  return (
    <Card sx={{ height: "Auto" }}>
      <br />
      <VuiBox display="flex" flexDirection="column" margin={5}>
        <VuiBox
          sx={({}) => ({
            width: "55%",
            padding: "18px 22px",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            height: "82px",
            mx: "auto",
            borderRadius: "20px",
            background:
              "linear-gradient(166deg, rgba(3,2,27,0.6162174342393207) 0%, rgba(6,16,132,0.7086544090292367) 66%, rgba(17,8,129,0.8094947451636905) 100%)",
            // background: linearGradient(cardContent.main, cardContent.state, cardContent.deg),
            transform: "translateY(-90%)",
            zIndex: "1000",
          })}
        >
          <VuiTypography color="text" variant="caption" display="inline-block" fontWeight="regular">
            <VuiAvatar src={author.profilePic} size="xl" />
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
          <VuiTypography
            color="text"
            variant="caption"
            display="inline-block"
            fontWeight="regular"
          ></VuiTypography>
        </VuiBox>

        <VuiBox
          sx={({ breakpoints }) => ({
            // height: "100%",
            width: "100%",
            display: "flex",

            width: "auto%",
            // padding: "18px 22px",

            justifyContent: "space-between",
            flexDirection: "row",
            alignSelf: "center",
            justifySelf: "center",
            height: "auto",
            mx: "auto",
            borderRadius: "20px",

            transform: "translateY(-90%)",
            zIndex: "1000",
          })}
        >
          <VuiBox
            flexDirection="column"
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{ minWidth: "30px" }}
          >
            <VuiTypography color="white" variant="h3" justifyContent="center" alignItems="center">
              {title}
            </VuiTypography>
          </VuiBox>
        </VuiBox>
        <VuiTypography alignItems="center" variant="lg" color="white" fontWeight="bold" mb="14px">
          {content}
        </VuiTypography>

        <Grid margin={2} spacing={3}>
          <Grid display={"flex"}>
            <h5
              allign="left"
              style={{
                marginRight: "20px",
              }}
            >
              {nbLikes} likes
            </h5>
            <h5 allign="left">{comments.length} comments</h5>
          </Grid>
          <Grid align="center" marginBottom={5}>
            <Button
              onClick={Post.addLike(id)}
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

        {/* houni nhottou les comments */}
        {/* <allComment CommentTable={comments}/> */}
        {/* <allComment/> */}
        <Grid marginTop={10}>
          <AllComment CommentTable={comments} />
        </Grid>
      </VuiBox>
    </Card>
  );
}

export default PostComponent;
