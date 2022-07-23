import { useState } from "react"
import { WordRow } from "./WordRow"

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="mx-auto w-96">
      <header className="border-b border-violet-900 pb-2 my-2">
        <h1 className="text-4xl text-center">Reactle</h1>
      </header>
      <main>
        <WordRow letters="hel" />
        <WordRow letters="hello" />
        <WordRow letters="world" />
        <WordRow letters="sword" />
      </main>
    </div>
  )
}

export default App
