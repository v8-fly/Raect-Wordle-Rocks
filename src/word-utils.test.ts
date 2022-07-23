import { describe, expect, it } from "vitest"
import { getRandomWord, computeGuess, LettersState } from "./word-utils"

describe("getRandomWord", () => {
  it("get random word", () => {
    expect(getRandomWord()).toBeTruthy()
    expect(getRandomWord().length).toBe(5)
  })
})

describe("computeGuess", () => {
  it("works with match and present", () => {
    expect(computeGuess("boost", "basic")).toEqual([
      LettersState.Match,
      LettersState.Miss,
      LettersState.Miss,
      LettersState.Pesent,
      LettersState.Miss,
    ])
  })
  it("works with all matches", () => {
    expect(computeGuess("boost", "boost")).toEqual([
      LettersState.Match,
      LettersState.Match,
      LettersState.Match,
      LettersState.Match,
      LettersState.Match,
    ])
  })
  it("works with full Miss", () => {
    expect(computeGuess("azzzz", "boost")).toEqual([
      LettersState.Miss,
      LettersState.Miss,
      LettersState.Miss,
      LettersState.Miss,
      LettersState.Miss,
    ])
  })
})
