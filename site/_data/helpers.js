module.exports = {
  getReadingTime(text) {
    const wordsPerMinute = 200;
    const numberOfWords = text.split(/\s/g).length;
    return Math.ceil(numberOfWords / wordsPerMinute);
  },
  debug(obj) {
    console.log(obj);
    return JSON.stringify(obj, null, 2);
  },
};
