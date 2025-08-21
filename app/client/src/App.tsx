import reactLogo from './assets/react.svg'
import viteLogo from '/logo-nest.svg'
import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [data, setData] = useState<null | { heading: string; message: string }>(null);

useEffect(() => {
  const fetchData = async () => {
    const res = await fetch("/api");
    const data = (await res.json()) as { heading: string; message: string };
    setData(data);
  };

  fetchData();
}, []);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Nest+ React</h1>
      <div className="">
        <h2>{data?.heading}</h2>
        <p>{data?.message}</p>
      </div>
    </>
  )
}

export default App
