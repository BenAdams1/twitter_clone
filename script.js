$(document).ready(function() {
    var settings = {
        "url": "localhost:8080/api/tweet/get/6042e20b92d35c47742c0f7c",
        "method": "GET",
        "timeout": 0,
        "headers": {
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJlbmFkYW1zIiwiaWF0IjoxNjE1MzQwNTQzLCJleHAiOjE2MTU0MjY5NDN9.XMqVHXwBhG33bYZZ-W-pc_5lm1pVABUalBeQkhRgR2M"
        },
      };
      
      $.ajax(settings).done(function (response) {
        console.log(response);
      });
var tweets = {
        "tweetContent": "Hi there!",
        "tweetImage": "https://pbs.twimg.com/media/EvFfZ3IWYAAr1xF?format=jpg&name=900x900",
        "likes": 1000,
        "retweets": 5000,
        "comments": 2000,
        "shareLink": "tweetURL",
        "profileImage": "https://pbs.twimg.com/profile_images/1282057272357683201/hm0ianWU_bigger.jpg",
        "tweetHandle": "KimKardashian",
        "date": "date",
        "userName": "Kim Kardashian West",
        "verified": true,
        "replyTo": [],
        "id": 1234,
        "commentsList": [
            {
                "tweetContent": "Nice sunset!",
                "tweetImage": "URL",
                "likes": 100,
                "retweets": 500,
                "comments": 20,
                "shareLink": "tweetURL",
                "profileImage": "imageURL",
                "tweetHandle": "KimKardashian",
                "date": "date",
                "userName": "ben_adams11",
                "verified": false,
                "replyTo": ["Kim Kardashian West"],
                "id": 2312 // tweet id 
                        
            }
        ]

      }
 

  
$("#profileImage").attr("src", tweets.profileImage);
$(".likes").text(tweets.likes);
$(".tweetContent").text(tweets.tweetContent);
$(".retweets").text(tweets.retweets);
$(".tweetImage").attr("src", tweets.tweetImage);
$(".comments").text(tweets.comments);
$(".shareLink").attr("src", tweets.tweetURL); // BUTTON
$(".tweetHandle").text(tweets.tweetHandle);
$(".date").text(tweets.date);
$(".userName").text(tweets.userName);
$(".verified").text(tweets.verified);
$(".replyTo").text([]);
$(".commentsList").text(tweets.commentsList);
$(".followers").text(tweets.followers);
$(".followers").css("color", "coral");

$(".tweetIcons").click(function(){
    alert("i was clicked");
});


 



});