import React, { useState } from 'react'

const Modal = ({ toggle, onAddTask, isOpen }) => {
	return (
        <a onClick={(ev)=>{
            toggle(false)
        }}>
		<div
			className={['modal fade', isOpen ? 'show' : ''].join(' ')}
			tabIndex='-1'
            role='dialog'
		>
			<div
				className='modal-dialog modal-dialog-centered'
				role='document'
			>
				<div className='modal-content'>
					<div className='modal-header'>
						<h5 className='modal-title' id='exampleModalLabel'>
							New task
						</h5>
						<button
							className='close'
							onClick={() => {
								toggle(false)
							}}
						>
							<span aria-hidden='true'>&times;</span>
						</button>
					</div>
					<div className='modal-body'>...</div>
					<div className='modal-footer'>
						<button className='btn btn-primary'>Add</button>
					</div>
				</div>
			</div>
        </div>
        </a>
	)
}

const AddTask = () => {
	const [isOpen, toggle] = useState(false)
	return (
		<React.Fragment>
			<div className="modal-btn">
                <button
                className="btn btn-block btn-success"
					onClick={() => {
						toggle(true)
					}}
				>
				<i className="fas fa-plus"></i>	TASK <i className="fas fa-plus"></i>
				</button>
			</div>
			<Modal toggle={toggle} isOpen={isOpen} />
		</React.Fragment>
	)
}

export default AddTask
