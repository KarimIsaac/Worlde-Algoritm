export default function wordCheck (guess, correct) {
    const output = [];



    for (let i = 0; i < guess.length; i++) {
        if (guess[i] === correct[i]) {
          output.push({ letter: guess[i], result: "correct" });
        } else if (
          correctLetter[guess[i]] !== "correct" &&
          correct.includes(guess[i])
        ) {
          output.push({ letter: guess[i], result: "misplaced" });
        } 
        else {
          output.push({ letter: guess[i], result: "incorrect" });
        }
      }




}