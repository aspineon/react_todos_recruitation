import React, { useState } from 'react'
import Modal from './Modal'

const AddTask = ({onAddTask}) => {
	const [isOpen, toggle] = useState(false)
	return (
		<React.Fragment>
			<div className='modal-btn'>
				<button
					className='btn btn-block btn-success'
					onClick={() => {
						toggle(true)
					}}
				>
					<i className='fas fa-plus' /> TASK{' '}
					<i className='fas fa-plus' />
				</button>
			</div>
			<Modal toggle={toggle} isOpen={isOpen} onAddTask={onAddTask}/>
		</React.Fragment>
	)
}

export default AddTask
