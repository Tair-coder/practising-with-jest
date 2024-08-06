const readline = require("readline");

// rl.question("Сколько тебе лет братишка\n", (asnwer) => {
//   if (asnwer < 18) {
//     console.log("Давай отсюда молодой");
//   } else if (asnwer >= 18 && asnwer <= 33) {
//     console.log("О Салам");
//   } else {
//     console.log("Ассаламалейкумммммм");
//   }
//   rl.close();
// });
class functionBot {
  constructor() {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }
  closeTerm() {
    this.rl.close();
  }
  askQuestion(question) {
    return new Promise((resolve) => {
      this.rl.question(question, (asnwer) => {
        resolve(asnwer);
      });
    });
  }
}
// function askQuestion(question) {
//   return new Promise((resolve) => {
//     rl.question(question, (asnwer) => {
//       resolve(asnwer);
//     });
//   });
// }
module.exports = functionBot;
