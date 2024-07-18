//You are given an integer array cards where cards[i] represents the value of the ith card. A pair of cards are matching if the cards have the same value.
//Return the minimum number of consecutive cards you have to pick up to have a pair of matching cards among the picked cards. If it is impossible to have matching cards, return -1.

/**
 * @param {number[]} cards
 * @return {number}
 */
var minimumCardPickup = function(cards) {
  let map = new Map();
  let res = Number.MAX_VALUE;
  
  for(let i=0; i<cards.length; i++){
    if(map.has(cards[i])){
        res = Math.min(res, i - map.get(cards[i]) + 1);
        map.set(cards[i],i);
    }
    else{
        map.set(cards[i],i);
    }
  }
  if(res == Number.MAX_VALUE){
    return -1;
  }
  return res;
};