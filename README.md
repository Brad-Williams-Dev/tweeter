# Tweeter Project

Tweeter is a simple, single-page Twitter clone.

Tweeter was build using HTML, CSS, JS, jQuery and AJAX.

## Getting Started

1. Please fork this repo.
2. Clone the repo to your computer.
3. Install dependencies in your cloned directory using ```npm install'''
4. Start the local server with '''npm run local```
5. You can then view the page at http://localhost:8080/ within your browser.

## Dependencies

- Express
- Node 5.10.x or above
- md5
- body-parser
- chance

## Features

- Page features a responsive design 
- Tweet box uses a character counter for displaying how many characters you have remaining. Counter turns red when counter goes negative.

## Challenges

 ### While working on this project I encountered a few challenges that turns out to be a valuable learning experience.

- Tweets were orignally being pushed to the bottom of the feed list. / After some reasearch I learned that in order for the latest tweets to be displayed first, I needed to prepend and not append.

- While trying to make the design responsive, my tweet boxes were getting very messed up. I have fixed them, however I believe that it wasnt fixed with best practices and will be looking further into how to implement responive design better in the future.



## Screen Shots

!["Shows app in mobile friendly mode"](https://github.com/Brad-Williams-Dev/tweeter/blob/master/docs/Screenshot%202022-12-08%20at%202.10.20%20PM.png?raw=true)
!["Shows app in Desktop mode"](https://github.com/Brad-Williams-Dev/tweeter/blob/master/docs/Screenshot%202022-12-08%20at%202.10.43%20PM.png?raw=true)
!["Example of error message, message field was empty"](https://github.com/Brad-Williams-Dev/tweeter/blob/master/docs/Screenshot%202022-12-08%20at%202.11.11%20PM.png?raw=true)
!["Example of error message, tweet to long, also demonstrates counter"](https://github.com/Brad-Williams-Dev/tweeter/blob/master/docs/Screenshot%202022-12-08%20at%202.11.38%20PM.png?raw=true)
