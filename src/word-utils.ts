import wordBank from "./wordbank.json"

enum LettersState {
  Miss = "Miss",
  Pesent = "Pesent",
  Match = "Match",
}

const getRandomWord = () => {
  const randomIndex = Math.floor(Math.random() * wordBank.length)
  return wordBank[randomIndex]
}

const computeGuess = (guess: string, answerString: string): LettersState[] => {
  const result: LettersState[] = []

  const guessArray = guess.split("")
  const answerArray = answerString.split("")
  guessArray.forEach((letter, index) => {
    if (letter === answerArray[index]) {
      result.push(LettersState.Match)
    } else if (answerArray.includes(letter)) {
      result.push(LettersState.Pesent)
    } else result.push(LettersState.Miss)
  })

  return result
}

export { getRandomWord, computeGuess, LettersState }
