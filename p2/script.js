const Game = {
    data() {
        return {
            playerChoice: '',
            playerScore: 0,
            computerScore: 0,
            guesses: [],
            playerWon: false,
            playerLost: false,
            tie: false,
            computerOptions: ['paper', 'rock', 'scissors']
        }
    },
    methods: {
        reset: function (event) {
          this.guesses = [];
          this.playerScore = 0;
          this.computerScore = 0;
          this.playerWon = false;
          this.playerLost = false;
          this.tie = false;
        },
        go: function (event) {
            const computerChoice = this.computerOptions[Math.floor(Math.random() * this.computerOptions.length)];

            let result = 'tie';
            if (this.playerChoice === 'paper') {
                if (computerChoice === 'rock') {
                    result = 'win';
                } else if (computerChoice === 'scissors') {
                    result = 'loss';
                }
            } else if (this.playerChoice === 'rock') {
                if (computerChoice === 'scissors') {
                    result = 'win';
                } else if (computerChoice === 'paper') {
                    result = 'loss';
                }
            } else if (this.playerChoice === 'scissors') {
                if (computerChoice === 'paper') {
                    result = 'win';
                } else if (computerChoice === 'rock') {
                    result = 'loss';
                }
            }

            this.playerWon = false;
            this.playerLost = false;
            this.tie = false;

            if (result == 'win') {
                this.playerScore += 1;
                this.playerWon = true;
            } else if (result == 'loss') {
                this.computerScore += 1;
                this.playerLost = true;
            } else {
                this.tie = true;
            }

            this.guesses.push({
                "playerChoice": this.playerChoice,
                "computerChoice": computerChoice,
                "result": result
            });
        }
    }
};

const ScoreDetail = {
    name: 'ScoreDetail',
    data() {
      return {

      }
    },
    template: '#score-detail',
    props: ['playerName', 'score']
};

const app = Vue.createApp(Game);

app.component('score-detail', ScoreDetail);

app.mount('#app');
