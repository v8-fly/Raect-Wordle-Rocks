import wordBank from "./wordbank.json"

const getRandomWord = () => {
  const randomIndex = Math.floor(Math.random() * wordBank.length)
  return wordBank[randomIndex]
}

export { getRandomWord }
