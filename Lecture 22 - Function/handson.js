let arr = [1, 2, 3, 4, 5];
let out = arr.map((x) => x * 2).filter((x) => x > 5);
console.log(arr); //Does not modify origional array
console.log(out);

//1.squares of even numbers
let arr1 = [1, 2, 3, 4, 5, 6];
let ans = arr1
  .filter((x) => !(x % 2))
  .map((x) => {
    return x ** 2;
  });
console.log(ans);

//2. Filter names starting with 'A' and uppercase
let names = ["Alice", "Bob", "Andrew", "John"];
let result = names
  .filter((name) => name.startsWith("A"))
  .map((name) => {
    return name.toUpperCase();
  });
console.log(result);

function add(a, b) {
  return a + b;
}
console.log(add(2)); // 2 + undefined = NaN

//Functions are objects, so you can assign properties to them.
function greet() {}
greet.language = "JS";
console.log(greet.language); // JS

//nested fun
function outer(x) {
  return function inner(y) {
    return function innermost(z) {
      return x + y + z;
    };
  };
}
console.log(outer(1)(2)(3));

//Return function from function
function multiply(a) {
  return function (b) {
    return a * b;
  };
}
console.log(multiply(5)(4));

//Function inside ternary operator
const func = (x) => (!(x % 2) ? "Yes" : "No");
console.log(func(4));

/* Practice Question */
/* Cricket Team */
const team = {
  name: "Indian Cricket Team",
  /* this will store an object with two properties -> {id: 1, scores: [10, 34, 80]} */
  players: [{ id: 1, scores: [10, 34, 80] }],

  display: function () {
    // loop over players and display their id and scores
    this.players.forEach((player) => console.log(player));
  },

  addPlayers: function (id) {
    /* assume always a new player is coming with unique id, this function should create 
    a new player with this id and empty scores array, then push this player to players array
    */
    const newplayer = { id: id, scores: [] };
    return this.players.push(newplayer);
  },
  addScore: function (id, score) {
    /* find the player with this id, and push this score to its score array */
    for (let player of this.players) {
      if (player.id == id) {
        player.scores.push(score);
        return;
      }
    }
  },
  averageScore: function (id) {
    /* find the player with this id and calculate its avg score and return it*/
    let ans = 0;
    let count = 0;
    for (let i = 0; i < this.players.length; i++) {
      if (this.players[i].id == id) {
        for (let j = 0; j < this.players[i].scores.length; j++) {
          ans += this.players[i].scores[j];
          count++;
        }
      }
    }
    return count > 0 ? Math.floor(ans / count) : 0;
  },
  teamAverage: function () {
    //optional
    /* calculate the average of scores of all players combined */
    let ans = 0;
    let count = 0;
    for (let i = 0; i < this.players.length; i++) {
      for (let j = 0; j < this.players[i].scores.length; j++) {
        ans += this.players[i].scores[j];
        count++;
      }
    }
    return count > 0 ? Math.floor(ans / count) : 0;
  },
};

team.addPlayers(2);
team.addPlayers(3);

team.addScore(1, 29);
team.addScore(3, 80);
team.addScore(2, 40);
team.addScore(2, 100);
team.addScore(2, 120);
team.addScore(3, 20);

team.display();
console.log("average score of player 1 - " + team.averageScore(1)); // => 153/4 = 38.25
console.log("average score of player 2 - " + team.averageScore(2)); // => 260/3 = 86.67

console.log("average score of team - " + team.teamAverage()); // => 513/9 = 57


const nums = [1, 2, 3, 4, 5];

// map → transform each element
console.log(nums.map((n) => n * 2)); // [2, 4, 6, 8, 10]

// filter → keep some elements
console.log(nums.filter((n) => n % 2 === 0)); // [2, 4]

// reduce → accumulate into single value
console.log(nums.reduce((sum, n) => sum + n, 0)); // 15