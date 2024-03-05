import { useState } from "react"
function App() {
  const [color, setColor] = useState("pink")

  return (
    <>
      <div className='w-full h-screen' style={{backgroundColor: color}}>
          <div>
            <h1 className="text-white text-4xl font-bold flex justify-center py-6">BACKGROUND CHANGER</h1>
          </div>
          <div className="w-[1490px] flex flex-wrap  gap-10 py-4 px-48 absolute bottom-[100px] left-6  bg-white rounded-full">
              <button onClick={()=>setColor("red")} className="bg-red-600 text-white  py-2 rounded-full w-[80px]">Red</button>
              <button onClick={()=>setColor("orange")} className="bg-orange-400 text-white py-2 rounded-full w-[80px]">Orange</button>
              <button onClick={()=>setColor("grey")} className="bg-slate-400 text-white py-2 rounded-full w-[80px]">Grey</button>
              <button onClick={()=>setColor("yellow")} className="bg-yellow-500 text-white py-2 rounded-full w-[80px]">Yellow</button>
              <button onClick={()=>setColor("olive")} className="bg-lime-900 text-white py-2 rounded-full w-[80px]">Green</button>
              <button onClick={()=>setColor("aqua")} className="bg-cyan-400 text-white py-2 rounded-full w-[80px]">Aqua</button>   
              <button onClick={()=>setColor("teal")} className="bg-cyan-800 text-white py-2 rounded-full w-[80px]">Teal</button>  
              <button onClick={()=>setColor("magenta")} className="bg-pink-700 text-white py-2 rounded-full w-[80px]">Magenta</button>  
              <button onClick={()=>setColor("purple")} className="bg-purple-500 text-white py-2 rounded-full w-[80px]">Purple</button>     
          </div> 
      </div>
    </>
  )
}

export default App
