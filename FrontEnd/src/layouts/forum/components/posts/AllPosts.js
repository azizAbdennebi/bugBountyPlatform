import { Grid } from "@mui/material";
import postsData from "services/posts";
import Post from "./post";

export default function AllPosts({data}) {
  //postsData

  // return (
  //   <div>
    
  //     <Grid item xs={12}  xl={3}>
  //       <Post title="test" />
  //     </Grid>
  //     <Grid item xs={12} lg={6} xl={3}>
  //       <Post title="test" />
  //     </Grid>
  //   </div>
  // );
  
  return postsData.map((x) => (
    <Grid  display="grid" >
      <Post title={x.title} content={x.content} author={x.author} dateTime={x.Date} />
    </Grid>
  ));

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
