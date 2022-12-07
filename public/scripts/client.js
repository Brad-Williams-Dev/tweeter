/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */



// Test / driver code (temporary). Eventually will get this from the server.

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd"
    },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
];


$(document).ready(function() {

  const createTweetElement = tweet => {
    let $tweet = `
    <article class="tweet">
      <header>
        <div class="tweet-avatar"><img src="${tweet.user.avatars}"></img>${tweet.user.name}</div>
        <div class="tweet-handle">${tweet.user.handle}</div>
      </header>
      <p>${tweet.content.text}</p>
      <footer>
        <div class="tweet-date">${tweet.created_at}</div>
        <div class="tweet-icons">
          <i class="fa-solid fa-flag"></i>
          <i class="fa-solid fa-retweet"></i>
          <i class="fa-solid fa-heart"></i>
        </div>
      </footer >
    </article>;
    `;
    return $tweet;
  };

  const renderTweets = tweets => {

    for (const tweet of tweets) {
      let newTweet = createTweetElement(tweet);
      $('.tweets-container').append(newTweet);
    }

  };

  renderTweets(data);
});
