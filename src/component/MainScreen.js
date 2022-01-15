import React from 'react'

function MainScreen({setEnter}) {
  return (
    <div onClick={() => setEnter(true)} className='cursor-pointer w-screen h-screen backdrop-filter backdrop-blur absolute flex justify-center items-center flex-col'>
      <h2 className="text-center text-5xl font-bold">Sorting Visualizer</h2>
      <p>Made by Kobi with <i className="fas fa-heart"></i></p>
    </div>
  )
}

export default MainScreen
