/* jshint esnext: true */

App = React.createClass({
  mixins: [ReactMeteorData],
  
  getMeteorData() {
    return {
      tweets: Tweets.find({}).fetch()
    };
  },
  
  renderTweets() {
    return this.data.tweets.map((tweet) => {
      return <Tweet tweet={tweet} />; 
    }); 
  },
  
  render() {
    return (
      <div className="container">
        <header>
          <h1>Tweets</h1>
        </header>
        
        <ul>
          {this.renderTweets()}
        </ul>
      </div>
    );
  }
});