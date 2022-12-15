const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const app = Vue.createApp({
  data() {
    return {
      dragonHealth: 100,
      playerHealth: 100,
      gameRound: 0,
      winner: null,
      logMessages: [],
    };
  },
  computed: {
    dragonBarStyle() {
      return { width: this.dragonHealth + "%" };
    },
    playerBarStyle() {
      return { width: this.playerHealth + "%" };
    },
    magicAttackLimit() {
      console.log(this.gameRound % 3 !== 0);
      return this.gameRound % 3 !== 0;
    },
    // gameWinner() {
    //   switch (this.winner) {
    //     case "draw":
    //       return this.winner === "d";
    //     case "Player":
    //       return;
    //     case "draw":
    //       return;
    //     default:
    //       return
    //   }
    // },
  },
  watch: {
    dragonHealth(value) {
      if (value < 0 && this.playerHealth < 0) {
        this.winner = "draw";
      } else if (value < 0) {
        this.winner = "Player";
      }
    },
    playerHealth(value) {
      if (value < 0 && this.dragonHealth < 0) {
        this.winner = "draw";
      } else if (value < 0) {
        this.winner = "dragon";
      }
    },
  },
  methods: {
    reStart() {
      this.dragonHealth = 100;
      this.playerHealth = 100;
      this.gameRound = 0;
      this.winner = null;
      this.logMessages = [];
    },

    attackDragon() {
      this.gameRound++;
      const attackValue = getRandomNumber(5, 12);
      this.dragonHealth -= attackValue;
      this.addLogMessage("Player","attack",attackValue)
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = getRandomNumber(7, 14);
      this.playerHealth -= attackValue;
      this.addLogMessage("Dragon","attack",attackValue)
    },
    magicAttackDragon() {
      this.gameRound++;
      const attackValue = getRandomNumber(10, 17);
      this.dragonHealth -= attackValue;
      this.addLogMessage("Player","attack",attackValue)
      this.attackPlayer();
    },
    healPlayer() {
      this.gameRound++;
      const healValue = getRandomNumber(9, 16);
      if (this.playerHealth > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += healValue;
      }
      this.addLogMessage("Player","Heal",healValue)
      this.attackPlayer();
    },
    surrender() {
      this.winner = "dragon";
    },
    addLogMessage(who, what, value) {
      this.logMessages.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value,
      });
    },
  },
});

app.mount("#game");
