import { useState } from 'react'
import DotGrid from './DotBg';

function App() {
  const [color, setColor] = useState('#ffffff')
  function handleColorChange(e) {
    const val = e.target.value;
    setColor(val);
  }
  function copyColor() {
    const btn = document.querySelector("#copy-btn");
    navigator.clipboard.writeText(color);
    btn.textContent = "Copied!";
    setTimeout(() => {
      btn.textContent = "Copy";
    }, 2500)
  }
  // Change text color based on bg
  const isLight = (hex) => {
    const r = parseInt(hex.substr(1, 2), 16);
    const g = parseInt(hex.substr(3, 2), 16);
    const b = parseInt(hex.substr(5, 2), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 128;
  }
  const textClass = isLight(color) ? "text-black" : "text-white";

  return (
    <>
    <main className='flex justify-center items-center w-screen h-screen relative bg-gray-200'>
        <DotGrid
        className='absolute z-0'
        dotSize={5}
        gap={30}
        baseColor="#000"
        activeColor="#BBFF00"
        proximity={100}
        shockRadius={180}
        shockStrength={10}
        resistance={200}
        returnDuration={1} />
        <div className="grid gap-x-5 gap-y-5 items-center absolute z-10 bg-white w-fit h-fit p-10 rounded-2xl">        
          <h1 className='text-4xl font-medium col-span-2 select-none'>Color Picker</h1>
          <div className='flex justify-center items-center h-50 w-50 border relative rounded' style={{backgroundColor: color}}>
            <h2 className={`text-lg ${textClass}`}>{color}</h2>
            <button className='absolute top-1 left-1 border rounded cursor-pointer px-1 py-1 bg-gray-50 active:bg-gray-200' id='copy-btn' onClick={copyColor}>Copy</button>
          </div>
          <input className='w-10 h-10' type="color" value={color} id='color' onChange={handleColorChange}/>
          <ul className='flex justify-evenly mt-5'>
            <li>
              <a href="https://github.com/G-60" target='_blank'>
                <img className='w-8 hover:scale-110 transition-all' src="./github-mark.svg" alt="my github" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/murad-salem-cys/" target='_blank'>
                <img className='w-8 hover:scale-110 transition-all' src="./InBug-Black.png" alt="my linkedin" />
              </a>
            </li>
          </ul>
        </div>
    </main>
    </>
  )
}

export default App
