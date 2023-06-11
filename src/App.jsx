import { useState } from 'react'
import { useMachine } from '@xstate/react'
import './App.css'
import { SamagraMachine } from './Machines/DemoMachine'

function App() {
  const [current, send] = useMachine(SamagraMachine)
  console.log(current.value)
  return (
    <>
      <h1 className='header'>You are in the {current.value} state</h1>
      <hr />
      <div className="container">
        <button>
          Open Samagra
        </button>
        <div className='frame-section'>

        </div>
      </div>
    </>
  )
}

export default App
