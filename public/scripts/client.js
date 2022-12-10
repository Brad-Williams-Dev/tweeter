/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {

  const escape = function(str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  // Creates new HTML for new tweets
  const createTweetElement = tweet => {
    let $tweet = `
    <article class="tweet">
      <header id="header">
        <div class="tweet-avatar"><img src="${tweet.user.avatars}"></img>${tweet.user.name}</div>
        <div class="tweet-handle">${tweet.user.handle}</div>
      </header>
      <div id="tweet-inner">
      <p>${escape(tweet.content.text)}</p>
      </div>
      <footer>
        <div class="tweet-date">${timeago.format(tweet.created_at)}</div>
        <div class="tweet-icons">
          <table>
            <td class="icon"><i class="fa-solid fa-flag"></i></td>
            <td class="icon"> <i class="fa-solid fa-retweet"></i></td>
            <td class="icon"><i class="fa-solid fa-heart"></i></td>
          </table>
        </div>
      </footer >
    </article>;
    `;
    return $tweet;
  };

  // Loops through list of tweets and runs them through createTweetElement function, then prepends them to index.html page
  const renderTweets = tweets => {

    // .empty() method emptys the tweet-container, before rendering tweets, otherwise results in duplicated
    $('.tweets-container').empty();

    for (const tweet of tweets) {
      let $newTweet = createTweetElement(tweet);
      $('.tweets-container').prepend($newTweet);
    }

  };

  // AJAX GET request from tweet server and runs each tweet through renderTweets function.
  const loadTweets = function() {

    $.ajax('/tweets', { method: 'GET' })
      .then(function(allTweets) {
        renderTweets(allTweets);
      });

  };


  // Takes data from the forms submission, serializes it, then POSTS it to the tweet server
  $('form').submit(function(event) {
    event.preventDefault();
    let input = this.children[1].value;

    // Error slides for if message fiels is empty or over 140 char
    if (!input) {
      $('#error').slideDown().text('⚠️ Message field was empty, please write a message to post! ⚠️').css({ display: 'flex' });
    } else if (input.length > 140) {
      $('#error').slideDown().text('⚠️ Message to long! Please be sure your message is less than 140 characters! ⚠️').css({ display: 'flex' });;
    } else {
      $('#error').hide();
      const newData = $(this).serialize();

      // AJAX post request that fetches tweets from database, then reloads loadTweets function, then calls javascripts reset method to reset the form.
      $.ajax({

        type: 'POST',
        url: '/tweets',
        data: newData
      })
        .then(() => loadTweets())
        .catch((error) => { console.log("Error: ", error); });
      this.reset();

    }
  });

  // Calls the loadTweets function 
  loadTweets();
});
