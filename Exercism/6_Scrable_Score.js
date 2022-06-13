/*
Instructions
Given a word, compute the Scrabble score for that word.

Letter Values
You'll need these:

Letter                           Value
A, E, I, O, U, L, N, R, S, T       1
D, G                               2
B, C, M, P                         3
F, H, V, W, Y                      4
K                                  5
J, X                               8
Q, Z                               10
Examples
"cabbage" should be scored as worth 14 points:

3 points for C
1 point for A, twice
3 points for B, twice
2 points for G
1 point for E
And to total:

3 + 2*1 + 2*3 + 2 + 1
= 3 + 2 + 6 + 3
= 5 + 9
= 14
Extensions
You can play a double or a triple letter.
You can play a double or a triple word.
*/
const word = "cabbage";
const wordScore = [];
const score = function (txt) {
  const txtArr = txt.toLowerCase().split("");
  txtArr;
  const v1 = ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"];
  const v2 = ["D", "G"];
  const v3 = ["B", "C", "M", "P"];
  const v4 = ["F", "H", "V", "W", "Y"];
  const v5 = ["K"];
  const v8 = ["J", "X"];
  const v10 = ["Q", "Z"];

  const totalWordScore = txtArr.map((wrd) => {
    if (v1.includes(word)) {
      wordScore.push(1);
    }
    return wordScore;
  });
};
wordScore;
