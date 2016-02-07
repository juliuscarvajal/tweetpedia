Tweets = new Mongo.Collection('tweets');

if (Meteor.isServer) {
  Meteor.startup(function() {
    let t = Meteor.npmRequire('twit');

    //Get this data from your twitter apps dashboard
    let config = {
        "consumer_key": "bWy7jWTzK1U2JnZ5MMrDDTXRF",
        "consumer_secret": "DHrruFEd3er2EPI1sBAXxSn4oBGae6Dl2rfATLBb7fWWa3F63x",
        "access_token": "28528160-CGHvr40lQF0i4s7fGZTsER3esS6rZg1qHYdXlrvXx",
        "access_token_secret": "3XZFX5B1gNaYGCu2B1ybm0V7ewYQXHRoUeRQBnsq8QWOl",
        //"callBackUrl": "XXX"
    }

    let twitter = new t(config);
    
    let stream = twitter.stream('statuses/filter', { track: 'iwatch'});
    
    stream.on('tweet', Meteor.bindEnvironment(function(tweet) {
      Tweets.insert({user: tweet.user.screen_name, text: tweet.text});
    }));
    
    Meteor.publish('tweets', function() {
      return Tweets.find();
    });

    
  });
}

if (Meteor.isClient) {
  Meteor.subscribe('tweets');
  
  Meteor.startup(function() {
    React.render(<App />, document.getElementById("render-target"));
  });
}