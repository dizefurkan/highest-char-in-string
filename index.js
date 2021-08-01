/**
 * Returns the sum of a and b
 * @param {string} string
 * @returns {string}
 */
function largestLetter(string) {
  if (!string) throw Error("String required");
  if (typeof string !== "string") throw TypeError("Param should be a string");

  const isOnlyLetter = string.match(/[a-zA-Z]+/gm);
  if (!isOnlyLetter) throw Error("Only letters be accept [a-zA-Z]");

  const _largestLetter = string
    .split("")
    .filter((letter, index) => {
      const isLowercase = letter === letter.toLocaleLowerCase();
      const searchString = isLowercase
        ? letter.toLocaleUpperCase()
        : letter.toLocaleLowerCase();
      const searchStringLastIndex = string.lastIndexOf(searchString);

      return searchStringLastIndex !== index && searchStringLastIndex !== -1;
    })
    .map((letter) => ({ letter, charCode: letter.charCodeAt() }))
    .filter((item) => item.letter === item.letter.toLocaleUpperCase())
    .reduce((largestLetter, letter, index) => {
      if (index === 0) largestLetter = letter;

      if (letter.charCode > largestLetter.charCode) largestLetter = letter;
      return largestLetter;
    }, undefined);

  return _largestLetter?.letter || "NO";
}

// console.log(largestLetter(null)); // throw Error("String Required")
// console.log(largestLetter("")); // throw Error("String Required")
// console.log(largestLetter([])); // throw Error("Param should be a string")
// console.log(largestLetter({})); // throw Error("Param should be a string")
// console.log(largestLetter("123123")); // throw Error("Only letters be accept [a-zA-Z]")
// console.log(largestLetter("aaBabcDaA")); // B
// console.log(largestLetter("WeTestCodErs")); // T
// console.log(largestLetter("Qooper")); // NO
// console.log(largestLetter("123@_Asd")); // NO
// console.log(largestLetter("abcdefgh")); // NO
