import { useState } from "react"
import { WordRow } from "./WordRow"

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="mx-auto w-96">
      <header className="border-b border-violet-900 pb-2 my-2">
        <h1 className="text-4xl text-center font-semibold">Reactle</h1>
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
