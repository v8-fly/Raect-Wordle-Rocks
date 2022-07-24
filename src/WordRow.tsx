import { computeGuess, LettersState } from "./word-utils"

const LETTER_LENGTH = 5
interface WordRowProps {
  letters: string
}

const WordRow = ({ letters: lettersProp = "" }: WordRowProps) => {
  const lettersRemaining = LETTER_LENGTH - lettersProp.length
  const letters = lettersProp.split("").concat(Array(lettersRemaining).fill(""))

  const guessStates = computeGuess(lettersProp)
  console.log("lettersProp", lettersProp)
  console.log("guessStates", guessStates)

  return (
    <div className="grid grid-cols-5 gap-4">
      {letters.map((char, index) => (
        <CharacterBox key={index} value={char} state={guessStates[index]} />
      ))}
    </div>
  )
}

interface CharacterBoxProps {
  value: string
  state?: LettersState
}

const CharacterBox = ({ value, state }: CharacterBoxProps) => {
  console.log(state)
  const stateStyles = state == null ? "" : characterStateStyles[state]
  return (
    <span
      className={`inline-block  border-2 
      border-gray-600 p-5  
    uppercase font-extrabold text-lg text-center ${stateStyles}`}
    >
      {value}
    </span>
  )
}

const characterStateStyles = {
  [LettersState.Miss]: "bg-gray-500 border-gray-500",
  [LettersState.Present]: "bg-yellow-500 border-yellow-500",
  [LettersState.Match]: "bg-green-500 border-green-500",
}

export { WordRow }
