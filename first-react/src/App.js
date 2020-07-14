import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Comment from "./Comment";

var timer;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [
        { id: 1, name: "김", content: "시작해보자" },
        { id: 2, name: "Tony Stark", content: "I am Iron Man" },
        { id: 3, name: "Thanos", content: "I'm inevitable" },
      ],
    };
  }

  componentDidMount() {
    let comments = this.state.comments;
    timer = setInterval(() => {
      if (comments.length > 0) {
        comments.pop();
        this.setState({
          comments: comments,
        });
      } else if (timer) {
        clearInterval(timer);
      }
    }, 1000);
  }

  render() {
    const { comments } = this.state;
    return (
      <div className="App" style={{ padding: 16, backgroundColor: "#282c34" }}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <div>
          {comments.map((comment, index) => {
            return (
              <Comment
                key={comment.id}
                id={comment.id}
                name={comment.name}
                content={comment.content}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
