import React, { useState } from 'react'

import Task from './Task'

const tasks = [
	{ title: 'Test1', description: null},
	{ title: 'Test2', description: 'desc 2' },
	{
		title: 'Test3',
		description: 'desc 3'
	},
	{ title: 'Test4', description: null },
]

function moveElemInArray(array, _from, _to) {

	const elem = array[_from]
	const without = array.filter((e, _k) => _k !== _from)
	const clean = []

	for(const idx in without){
		if(idx == _to){
			clean.push(elem)
		}
		clean.push(without[idx])
	}
    return clean
}

const onEdit = (el, k, state, stateSetter) => (ev) => {
	const {tasks} = state
	const {value, name} = ev.target

	tasks[k][name] = value

	stateSetter({
		...state,
		tasks:tasks
	})
}

const onRemove = (el, k, state, stateSetter) => (ev) => {
	const { tasks } = state

	stateSetter({
		...state,
		tasks: tasks.filter((e, _k) => _k !== k),
	})
}


const onOrderChange = (el, k, state, stateSetter, direction = 'up') => (ev) => {
	let { tasks } = state

	if (direction === 'up' && k >= 1) {
		tasks = moveElemInArray(tasks,k,k-1)
	} else if (direction === 'down' && k < tasks.length-1) {
		tasks = moveElemInArray(tasks,k+1,k)
	}

	stateSetter({
		...state,
		tasks: tasks
	})
}

const onColorChange = (el, k, state, stateSetter, direction = 'up') => (ev) => {
	const {tasks} = state
	const {value, name='bgColor'} = ev.target

	tasks[k][name] = value

	stateSetter({
		...state,
		tasks: tasks
	})
}

const TaskList = () => {
	const [state, setState] = useState({
		tasks: tasks,
		editedTask: {},
		newTask: {
			title: '',
			description: null,
			textColor: 'red',
			bgColor: 'blue',
		},
	})
	return (
		<div className='task-list'>
			<ul>
				{state.tasks.map((el, k) => {
					const args = [el,k,state,setState]
					return (
						<Task
							idx={k}
							lastIdx={state.tasks.length-1}
							{...el}
							key={k}
							onEdit={onEdit(...args)}
							onRemove={onRemove(...args)}
							onColorChange={onColorChange(
								...args
							)}
							onOrderChangeUp={onOrderChange(
								...args
							)}
							onOrderChangeDown={onOrderChange(
								...args,
								'down'
							)}
						/>
					)
				})}
			</ul>
		</div>
	)
}

export default TaskList
