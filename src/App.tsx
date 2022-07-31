import { useState } from "react"
import { useStore } from "./store"
import { WordRow } from "./WordRow"

const App = () => {
  const state = useStore()
  const [guess, setGuess] = useState("")

  return (
    <div className="mx-auto w-96">
      <header className="border-b border-violet-900 pb-2 my-2">
        <h1 className="text-4xl text-center font-semibold">Reactle</h1>
        <input
          type="text"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          className="w-full p-2  border-2 border-gray-800"
        />
      </header>
      <main className="grid grid-rows-6 gap-4">
        <WordRow letters="forum" />
        <WordRow letters="final" />
        <WordRow letters="first" />
        <WordRow letters="focus" />
        <WordRow letters="child" />
        <WordRow letters="study" />
      </main>
    </div>
  )
}

export default App
