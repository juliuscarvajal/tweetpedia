//*
let t = Meteor.npmRequire('twitter-node-client').Twitter;

//Get this data from your twitter apps dashboard
let config = {
    "consumerKey": "bWy7jWTzK1U2JnZ5MMrDDTXRF",
    "consumerSecret": "DHrruFEd3er2EPI1sBAXxSn4oBGae6Dl2rfATLBb7fWWa3F63x",
    "accessToken": "28528160-CGHvr40lQF0i4s7fGZTsER3esS6rZg1qHYdXlrvXx",
    "accessTokenSecret": "3XZFX5B1gNaYGCu2B1ybm0V7ewYQXHRoUeRQBnsq8QWOl",
    //"callBackUrl": "XXX"
}

let twitter = new Twitter(config);
//*/

if (Meteor.isClient) {
  Meteor.startup(function() {
    React.render(<App />, document.getElementById("render-target"));
  });
}