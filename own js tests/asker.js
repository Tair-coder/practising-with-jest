// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

const func = require("./index");

(async () => {
  const bot = new func();
  try {
    const name = await bot.askQuestion("Как тебя зовут \n");
    const age = await bot.askQuestion("сколько тебе \n");

    console.log("salam " + name);
    console.log("omg your age ... " + age);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("done");
    bot.closeTerm();
  }
})();
