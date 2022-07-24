import wordBank from "./wordbank.json"

enum LettersState {
  Miss = "Miss",
  Present = "Present",
  Match = "Match",
}

const getRandomWord = () => {
  const randomIndex = Math.floor(Math.random() * wordBank.length)
  return wordBank[randomIndex]
}

const computeGuess = (guess: string, answerString: string): LettersState[] => {
  const result: LettersState[] = []

  if (guess.length !== answerString.length) {
    return result
  }

  const answer = answerString.split("")

  const guessAsArray = guess.split("")

  const answerLetterCount: Record<string, number> = {}

  // alternative approaches to this logic
  // https://github.com/rauchg/wordledge/blob/main/pages/_middleware.ts#L46-L69

  guessAsArray.forEach((letter, index) => {
    const currentAnswerLetter = answer[index]

    answerLetterCount[currentAnswerLetter] = answerLetterCount[
      currentAnswerLetter
    ]
      ? answerLetterCount[currentAnswerLetter] + 1
      : 1

    if (currentAnswerLetter === letter) {
      result.push(LettersState.Match)
    } else if (answer.includes(letter)) {
      result.push(LettersState.Present)
    } else {
      result.push(LettersState.Miss)
    }
  })

  result.forEach((curResult, resultIndex) => {
    if (curResult !== LettersState.Present) {
      return
    }

    const guessLetter = guessAsArray[resultIndex]

    answer.forEach((currentAnswerLetter, answerIndex) => {
      if (currentAnswerLetter !== guessLetter) {
        return
      }

      if (result[answerIndex] === LettersState.Match) {
        result[resultIndex] = LettersState.Miss
      }

      if (answerLetterCount[guessLetter] <= 0) {
        result[resultIndex] = LettersState.Miss
      }
    })

    answerLetterCount[guessLetter]--
  })

  return result
}

export { getRandomWord, computeGuess, LettersState }
