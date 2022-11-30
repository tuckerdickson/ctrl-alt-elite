import * as React from "react"

//importing stylesheets
import '../fonts/stylesheet.css';
import '../css/index.css';
import commentBox from 'commentbox.io';

class PageWithComments extends React.Component {

  componentDidMount() {

      this.removeCommentBox = commentBox('5680389167251456-proj');
  }

  componentWillUnmount() {

      this.removeCommentBox();
  }

  render() {

      return (
          <div className="commentbox" />
      );
  }
}

const RyanPage = () => {
  return (
    <main>
    <h1> This is Ryan's Page!</h1>
    <PageWithComments />
    </main>
  )
}
export default RyanPage

export const Head = () => <title>Ryan's Page</title>
