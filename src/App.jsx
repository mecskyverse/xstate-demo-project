import { useState } from 'react'
import { useMachine } from '@xstate/react'
import { SamagraMachine } from './Machines/DemoMachine'

//THis function is to show a normal api fetch finite states like loading completed or error state
//we are not doing any api requests we are just trying to demonstrate an typical api calls finite states
// with help of xstate.
function App() {
  const [current, send] = useMachine(SamagraMachine)
  const projectArray = ['ABDM',
    'AI Tools',
    'Avni',
    'Bahmni',
    'Beckn',
    'CARE',
    'Cord Network',
    'cQube',
    'DevDataPlatform',
    'DevOps Pipeline',
    'DIGIT']

  const renderProjects = () => {
    return projectArray.map((project) => {
      return (
        <div className='grid-element'> {project}</div>
      )
    })
  }
  return (
    <>
      <h1 className='header'>You are in the <u>{current.value}</u> state</h1>
      <hr />
      <div className="container">
        <button onClick={current.value === 'initial' ? () => send('OPENSAMAGRA') : () => send('samagraClose')}>

          {current.value === 'initial' ?
            'Open Samagra' : 'close Samagra'}


        </button>
        <div className='frame-section'>
          {current.value === 'completed' ? renderProjects() : null}
          {/* {renderProjects()} */}
        </div>
      </div>
    </>
  )
}

export default App
