import { Grid } from "@mui/material";

import Post from "services/PostsFunctions";
import PostComponent from "./post";

export default function AllPosts({ data }) {
  if (Post.getData() != undefined && Post.getData() != null) {
    return Post.getData().map((x) => (
      <Grid margin={3}>
        <PostComponent
          id={x.id}
          title={x.title}
          content={x.content}
          author={x.author}
          dateTime={x.Date}
          comments={x.response}
          nbLikes={x.NumberOfLikes}
        />
      </Grid>
    ));
  } else return <h1>No posts Yet</h1>;
  /*
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
      ));*/
}
