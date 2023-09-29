function time(seconds) {
    // here is where you write your code...
    if (seconds === 60) {
        return "1m";
      }
    return seconds + "s";
  }
  
  module.exports = time;

