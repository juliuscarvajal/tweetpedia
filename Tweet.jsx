/* jshint esnext: true */

Tweet = React.createClass({
  propTypes: {
    tweet: React.PropTypes.object.isRequired
  },
  
  render() {
    return <li>{this.props.tweet.text}</li>;
  }
});