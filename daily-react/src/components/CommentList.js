 
const CommentList = ({ comments }) => {
  const styles = {
    small: {
      color: "#48a0ff",
      fontSize: "0.8em",
    },
    li: {
      color: "blue",
    },
    ul: {
      listStyleType: "none",
      padding: 0,
      margin: 0,
    },
  };

  const renderedComments =  Object.values(comments).map((comment) => {
    let content;
    if (comment.status === "APPROVED") {
      content = comment.content;
    } 
    if (comment.status === "PENDING") {
      content = "This comment awaiting moderation";
    }
    if (comment.status === "REJECTED") {
      content = "This comment has been rejected";
    }
  

    return (
      <li style={styles.li} key={comment.id}>
        {comment.body}
        <br />
        <small style={styles.small}>{comment.name}</small> | &nbsp;
        <small style={styles.small}>{comment.email}</small>
        <hr />
      </li>
    );
  });

  return <div 
  className="d-flex flex-row flex-wrap justify-content-between"
  >
    <ul style={styles.ul}>
      {renderedComments}
      </ul></div>;
};

export default CommentList;
