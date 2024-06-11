// Basketball Points
// You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.

// Examples
// points(1, 1) ➞ 5
// points(7, 5) ➞ 29
// points(38, 8) ➞ 100

// Step one: create a function
// count 2 pts and count 3 pts
// input:  (2pts, 3pt)
// output: total points - sum of multiples

function basketballPoint(twoPoints, threePoints){

let twos = twoPoints * 2
let threes = threePoints * 3

return twos + threes

}

console.log(basketballPoint(380, 8))