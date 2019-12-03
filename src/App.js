import React from 'react'
import { TaskList, AddTask } from './components'

import './App.scss'

function App() {
	return (
		<div className='app'>
			<div className='container'>
				<div className='row'>
					<div className='col'>
						<AddTask />
						<TaskList />
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
