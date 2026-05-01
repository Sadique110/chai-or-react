import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
// import './App.css'

function App() {
  const [length, setLength] = useState(12)
  const [includeNumbers, setIncludeNumbers] = useState(false)
  const [includeSpecialChars, setIncludeSpecialChars] = useState(false)
  const [password, setPassword] = useState("")

  // useref hook
  const passwordref = useRef()
  const copyToClipboard= useCallback(() => {
    window.navigator.clipboard.writeText(passwordref.current.innerText)
  }, [setPassword])
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (includeNumbers) str += "0123456789"
    if (includeSpecialChars) str += "!@#$%^&*()_+"

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }
    setPassword(pass)
 }, [length, includeNumbers, includeSpecialChars])


  useEffect(() => {
    // passwordGenerator()
  }, [length, includeNumbers, includeSpecialChars, passwordGenerator])


  return (
    <>
      <div className="max-w-md mx-auto p-6 bg-red-100 rounded-lg shadow-md h-100 w-100">
       <h6 className="text-2xl font-bold mb-4">Password Generator</h6>

        <div className="bg-gray-100 p-3 rounded mb-4 flex justify-between right-30">
          <span className="font-mono text-center" id="password">
            {password || 'Click Generate'}
          </span>
          <button className="text-blue-500" onClick={copyToClipboard}>
            Copy
          </button>
        </div>

        <div className="mb-4">
          <label>Length: <span id="length">{length}</span></label>
          <input
            type="range"
            min="4"
            max="32"
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(Number(e.target.value))}
          />
        </div>
        <label>Length {length}</label>
        <div className="flex items-center gap-x-1">
          <label className="flex items-center gap-2">
            <input type="checkbox" id="uppercase" defaultChecked />
            Uppercase (A-Z)
          </label>
          <label className="flex items-center gap-x-1">
            <input type="checkbox" id="lowercase" defaultChecked={includeSpecialChars} />
            Lowercase (a-z)
          </label>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            id="numbers"
            defaultChecked={includeNumbers}
            onChange={(e) => setIncludeNumbers(e.target.checked)}
          />
          Numbers (0-9)
        </label>

        <label className="flex items-center gap-2 ">
          <input
            type="checkbox"
            id="symbols"
            checked={includeSpecialChars}
            onChange={(e) => setIncludeSpecialChars(e.target.checked)}
          />
          Symbols (!@#$)
        </label>
        </div>

        <button
          className="w-full top-4 bg-blue-600 text-white py-2 rounded-2xl hover:bg-blue-700 transition-colors"
          onClick={passwordGenerator}
        >Generate  </button>
      </div>
    </>
  )
}

export default App
