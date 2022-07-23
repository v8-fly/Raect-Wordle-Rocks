const LETTER_LENGTH = 5
interface WordRowProps {
  letters: string
}

const WordRow = ({ letters: lettersProp = "" }: WordRowProps) => {
  const lettersRemaining = LETTER_LENGTH - lettersProp.length
  const letters = lettersProp.split("").concat(Array(lettersRemaining).fill(""))
  console.log({ letters })

  return (
    <div className="grid grid-cols-5 gap-4">
      {letters.map((char) => (
        <CharacterBox key={char} value={char} />
      ))}
    </div>
  )
}

interface CharacterBoxProps {
  value: string
}

const CharacterBox = ({ value }: CharacterBoxProps) => {
  return (
    <span className="inline-block  border-2 border-gray-600 p-5  uppercase font-bold text-lg text-center">
      {value}
    </span>
  )
}
export { WordRow }
