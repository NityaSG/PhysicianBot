'use client'
import {
  useState
} from 'react'

export default function Home() {
  const [query, setQuery] = useState('')
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)
  async function createIndexAndEmbeddings() {
    try {
      const result = await fetch('/api/setup', {
        method: "POST"
      })
      const json = await result.json()
      console.log('result: ', json)
    } catch (err) {
      console.log('err:', err)
    }
  }
  async function sendQuery() {
    if (!query) return
    setResult('')
    setLoading(true)
    try {
      const result = await fetch('/api/read', {
        method: "POST",
        body: JSON.stringify(query)
      })
      const json = await result.json()
      setResult(json.data)
      setLoading(false)
    } catch (err) {
      console.log('err:', err)
      setLoading(false)
    }
  }
  return (
    <main className="min-h-screen bg-cover p-24" style={{backgroundImage: 'url(/bg1.jpg)'}}>
      <div className="flex flex-col items-center justify-between ">        
      <h1 className='text-7xl'>TrPhysician</h1>
      <p className='mt-2'>ThinkRoman Ventures</p>
      <textarea className='text-black mt-5 rounded-3xl w-[700px] bg-gray-200 px-4 py-2' rows={1} value={query} onChange={e => setQuery(e.target.value)} />
      <button className="px-7 py-1 rounded-2xl bg-white text-black mt-5 mb-2" onClick={sendQuery}>
        {loading ? 'Asking AI...' : 'Ask AI'}
      </button>
      {
        result && <p className="text-center shadow-md bg-white bg-opacity-10 rounded-lg py-1 px-2 border-opacity-10 mt-8 md:w-[50vw] w-[80vw]">{result}</p>
      }
      </div>
     
    </main>
  )
}
