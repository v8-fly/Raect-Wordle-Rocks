import { describe, expect, it } from "vitest"
import { getRandomWord, computeGuess, LettersState } from "./word-utils"

describe("getRandomWord", () => {
  it("get random word", () => {
    expect(getRandomWord()).toBeTruthy()
    expect(getRandomWord().length).toBe(5)
  })
})

describe("computeGuess", () => {
  test("works with match and presents", () => {
    expect(computeGuess("boost", "basic")).toEqual([
      LettersState.Match,
      LettersState.Miss,
      LettersState.Miss,
      LettersState.Present,
      LettersState.Miss,
    ])
  })

  test("full match", () => {
    expect(computeGuess("boost", "boost")).toEqual([
      LettersState.Match,
      LettersState.Match,
      LettersState.Match,
      LettersState.Match,
      LettersState.Match,
    ])
  })

  test("full miss", () => {
    expect(computeGuess("guard", "boost")).toEqual([
      LettersState.Miss,
      LettersState.Miss,
      LettersState.Miss,
      LettersState.Miss,
      LettersState.Miss,
    ])
  })

  test("only does one match when two letters exist", () => {
    expect(computeGuess("solid", "boost")).toEqual([
      LettersState.Present,
      LettersState.Match,
      LettersState.Miss,
      LettersState.Miss,
      LettersState.Miss,
    ])
  })

  test("returns empty array when given incomplete guess", () => {
    expect(computeGuess("so", "boost")).toEqual([])
  })

  test("when 2 letters are present but answer has only 1 of those letters", () => {
    expect(computeGuess("allol", "smelt")).toEqual([
      LettersState.Miss,
      LettersState.Present,
      LettersState.Miss,
      LettersState.Miss,
      LettersState.Miss,
    ])
  })

  test("when 1 letter matches but guess has more of the same letter", () => {
    expect(computeGuess("allol", "colon")).toEqual([
      LettersState.Miss,
      LettersState.Miss,
      LettersState.Match,
      LettersState.Match,
      LettersState.Miss,
    ])
  })
})
