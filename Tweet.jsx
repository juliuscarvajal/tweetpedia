/* jshint esnext: true */

Tweet = React.createClass({
  propTypes: {
    tweet: React.PropTypes.object.isRequired
  },
  
  render() {
    let tweet = Tweets.find().fetch();
    //return <li>{this.props.tweet.text}</li>;
    return <li>{tweet}</li>;
  }
});