import React from "react";

const styles = {
  root: { color: "red" },
};

class Comment extends React.Component {
  render() {
    return (
      <div style={styles.root}>
        <h1>{"My first component!"}</h1>
      </div>
    );
  }
}

export default Comment;
