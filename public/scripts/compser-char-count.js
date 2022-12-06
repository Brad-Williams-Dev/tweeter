$(document).ready(function() {

  $("#tweet-text").on('input', function() {
    const maxChar = 140;
    const counter = this.nextElementSibling.children[1]; //Found at w3schools

    console.log(counter);

    counter.value = maxChar - this.value.length;

    if (counter.value < 0) {
      counter.classList.add('tweet-to-long');
    }
    if (counter.value >= 0) {
      counter.classList.remove('tweet-to-long');
    }
  });
});
