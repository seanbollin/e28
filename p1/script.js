// Define the options of our application
const Game = {
    data() {
        return {
            playerChoice: '',
            playerScore: 0,
            computerScore: 0,
            guesses: [],
            computerOptions: ['paper', 'rock', 'scissors']
        }
    },
    methods: {
        reset: function (event) {
          this.guesses = [];
          this.playerScore = 0;
          this.computerScore = 0;
        },
        go: function (event) {
            const computerChoice = this.computerOptions[Math.floor(Math.random() * this.computerOptions.length)];
            console.log(computerChoice);
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

            if (result == 'win') {
                this.playerScore += 1;
            } else if (result == 'loss') {
                this.computerScore += 1;
            }

            this.guesses.push({"playerChoice": this.playerChoice, "computerChoice": computerChoice, "result": result});
        }
    }
}

// Create a new Vue instance using our options
const app = Vue.createApp(Game).mount('#app');