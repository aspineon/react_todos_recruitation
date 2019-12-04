import React, { useState, useEffect} from 'react'
import { TaskList, AddTask } from './components'
import { onAddTask } from './logic/actions'

import './App.scss'

const tasks = [
	{ title: 'Test1', description: ''},
	{ title: 'Test2', description: 'desc 2' },
	{
		title: 'Test3',
		description: 'desc 3'
	},
	{ title: 'Test4', description: '' }
]

function App() {
	const [state, setState] = useState({
		tasks: tasks
	})

	useEffect(()=>{
		// if something in localStorage, than load data to state
	},[])

	return (
		<div className='app'>
			<div className='container'>
				<div className='row'>
					<div className='col'>
						<AddTask onAddTask={onAddTask(state, setState)}/>
						<TaskList outerState={state} outerSetter={setState}/>
						<AddTask onAddTask={onAddTask(state, setState)}/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
