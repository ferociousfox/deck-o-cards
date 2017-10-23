$(document).ready(function(){

  var suits = ["spades", "hearts", "clubs", "diamonds"];
  var ranks = ["ace of", "two of", "three of", "four of", "five of", "six of", "seven of", "eight of", "nine of", "ten of", "jack of", "queen of", "king of"];
  var cards = [];
  suits.forEach(function(suit){
    ranks.forEach(function(rank){
      cards.push(rank + " " + suit);
    });
  });

  cards.forEach(function(card) {
    $("#cards").append("<li>" + card + "</li>");
  });
});
