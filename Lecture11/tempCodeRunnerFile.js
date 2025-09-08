let string = {
  countVowels: function (str) {
    let vowels = "aeiouAEIOU";
    let count = 0;

    let i = 0;
    while (i < str.length) {
      if (vowels.includes(str[i])) {
        count++;
      }
      i++;
    }

    return count;
  },
};
console.log(string.countVowels("Neha Bacha"));