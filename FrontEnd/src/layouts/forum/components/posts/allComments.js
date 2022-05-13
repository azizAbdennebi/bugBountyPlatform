import { Grid } from "@mui/material";
import Comment from "./comment";

export default function AllComment({ CommentTable }) {
  if (CommentTable != undefined && CommentTable!=null) {
    return CommentTable.map((x) => (
      <Grid >
        <Comment  id={x.id} content={x.content} author={x.author} dateTime={x.Date} comments={x.response} />
        <br />
      </Grid>
    ));
  }
  return <p></p>;
}
