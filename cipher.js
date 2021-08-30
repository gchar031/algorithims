const solution = (word, cipher) => {
  // Type your solution here
  //split the letters in the cipher
  let cipherArray = cipher.split("");
  let alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let cipher_alpha = [];
  let wordArray = word.split("");
  //create a variable to store decoded word
  let solvedArray = [];
  let solved = "";
  //loop through and decipher the alphabet
  for (let i in wordArray) {
    if (typeof wordArray[i] == "number") {
      solved = "";
    }
    //if there are duplicates in cipher or space in word then return empty string
    if (cipherArray[i] === cipherArray[i - 1]) {
      solved = "";
    }
    if (wordArray[i] == "") {
      solved = "";
    } else {
      for (let j = 0; j < alphabet.length; j++) {
        if (wordArray[i] == alphabet[j]) {
          solvedArray.push(cipherArray[i]);
          solved = solvedArray.join("");
        }
      }
    }
  }

  return solved;
};
