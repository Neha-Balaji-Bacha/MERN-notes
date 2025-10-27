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
