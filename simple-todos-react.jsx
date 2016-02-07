
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
    
    stream.on('tweet', function(tweet) {
      console.log('tweet', tweet);
    });
    
  });
}

if (Meteor.isClient) {
  Meteor.subscribe('tweets');
  
  Meteor.startup(function() {
    React.render(<App />, document.getElementById("render-target"));
  });
}