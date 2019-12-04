import React, { useState } from 'react';


const Modal = ({ toggle, onAddTask, isOpen }) => {
	const [state, setState] = useState({
		title:'', description:''
	})
	return (
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
								setState({
									title:'',
									description:''
								})
								toggle(false)
							}}
						>
							<span aria-hidden='true'>&times;</span>
						</button>
					</div>
					<div className='modal-body'>
						<form className='form'>
							<div className='form-group with-margin'>
								<input
									name='title'
									value={state.title}
									onChange={(ev)=>{
										setState({
											...state,
											title:ev.target.value
										})
									}}
									className='form-control'
									placeholder='Add title*'
								/>
							</div>
							<div className='form-group with-margin'>
								<input
									name='description'
									value={state.description}
									className='form-control'
									placeholder='Add description'
									onChange={(ev)=>{
										setState({
											...state,
											description:ev.target.value
										})
									}}
								/>
							</div>
						</form>
					</div>
					<div className='modal-footer'>
						<button className='btn btn-block btn-success' onClick={()=>{
							const withSuccess = onAddTask(state, setState)
							if(withSuccess){
								setState({
									title:'',
									description:''
								})
								toggle(false)
							}
						}}>Add</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Modal