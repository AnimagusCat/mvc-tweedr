var React = require("react");

class Home extends React.Component {
  render() {

    return (
      <html>
        <head />
        <body>
          <h1>Welcome, {this.props.name}!</h1>
          <h3>Logged in as @{this.props.username}</h3>
          <br />
        </body>
      </html>
    );
  }
}

module.exports = Home;