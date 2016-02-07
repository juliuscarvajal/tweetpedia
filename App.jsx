/* jshint esnext: true */

App = React.createClass({
  getTweets() {
    return [
      { _id: 1, text: 'juliana'},
      { _id: 2, text: 'jurlei'},
      { _id: 3, text: 'julius'},
      { _id: 4, text: 'athena'},
    ];
  },
  
  renderTweets() {
    return this.getTweets().map((tweet) => {
      return <Tweet key={tweet._id} tweet={tweet} />; 
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