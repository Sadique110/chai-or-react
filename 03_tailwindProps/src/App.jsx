// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <div className="bg-blue-500 text-white p-4">Hello, Tailwind!</div>

      <h1 className='font-bold bg-orange-500'>Tailwind css</h1>
      <div class="max-w-sm rounded overflow-hidden shadow-lg">
        
        <img class="w-full" src="https://images.pexels.com/photos/3068920/pexels-photo-3068920.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Sunset in the mountains" />
        
        <div class="px-6 py-4">
        <button >Click here </button>
          <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
          <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
        </div>
      </div> 
      
    </>
  )
}

export default App
