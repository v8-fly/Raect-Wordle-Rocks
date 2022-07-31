import create, { StateCreator } from "zustand"
import { getRandomWord } from "./word-utils"
import { persist, PersistOptions } from "zustand/middleware"

interface StoreState {
  answer: string
  guesses: string[]
  addGuess: (guess: string) => void
}
type MyPersist = (
  config: StateCreator<StoreState>,
  options: PersistOptions<StoreState>
) => StateCreator<StoreState>
export const useStore = create<StoreState>(
  (persist as unknown as MyPersist)(
    (set) => ({
      answer: getRandomWord(),
      guesses: ["hello", "solar"],
      addGuess: (guess: string) => {
        set((state) => ({
          guesses: [...state.guesses, guess],
        }))
      },
    }),
    { name: "auth-store" }
  )
)
