function validatedAge(age, ticket) {
  if (age < 18 || ticket === false) {
    return "sorry, but you can not pass to concert";
  }
  return "you are welcome";
}
module.exports = validatedAge;
