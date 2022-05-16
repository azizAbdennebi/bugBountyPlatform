import postsData from "../services/posts";

export default class Post {
  
    static data= postsData;

  static getData(): any {
    return (this.data);
  }
  /**
   * static addLike
   */
  static addLike(id:number) {
      
    this.data.map((x) => {
        if (x.id==id) {
            x.NumberOfLikes+=1;
            return;
        }
    });
      
  }
}
