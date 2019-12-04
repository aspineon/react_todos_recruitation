import React, { useState } from 'react'
import {onAcceptChangesInTask, onEditTask, onRemove, onColorChange, onOrderChange} from '../logic/actions'

import Task from './Task'

const TaskList = ({outerState, outerSetter}) => {
	return (
		<div className='task-list'>
			<ul>
				{outerState.tasks.map((el, k) => {
					const args = [el,k, outerState, outerSetter]
					return (
						<Task
							idx={k}
							lastIdx={outerState.tasks.length-1}
							key={k}
							task={el}
							editedTask={outerState.editedTask}
							onEditTask={onEditTask(...args)}
							onAcceptChangesInTask={onAcceptChangesInTask(...args)}
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
