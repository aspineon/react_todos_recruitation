import React, { useState } from 'react'
import ColorPicker from './ColorPicker'

const TaskButtons = ({ onOpen, onEdit, onRemove, onColorChange, isDuringEdit, description }) => {
	return (
		<React.Fragment>
		<div className='col-md-4'>
			<div className='btn-group'>
				{description && <button className="btn btn-light"  onClick={onOpen}><i className="fas fa-chevron-down"></i></button>}
				<button className="btn btn-warning"  onClick={onEdit}><i className="fas fa-edit"></i></button>
				<button className="btn btn-danger" onClick={onRemove}><i className="fas fa-trash"></i></button>
				<ColorPicker onColorChange={onColorChange} isDuringEdit={isDuringEdit} onClick={onEdit}/>
				{!isDuringEdit && <button className="btn btn-warning" onClick={onEdit}><i className="fas fa-paint-brush"></i></button>}
			</div>
		</div>
		
		</React.Fragment>
	)
}

const ReorderButton = ({ onClick, direction = 'up' }) => {
	const icon = <i className={`fas fa-chevron-${direction}`} />
	return (
		<div className="reorder-btn">
			<button className="btn" onClick={onClick}>{icon}</button>
		</div>
	)
}

const EditableInput = ({ value, name, onChange, disabled = true, textarea=false }) => {
	return (
		<div className="form-group">
		{textarea ?
			<textarea className="form-control"
			value={value}
			name={name}
			onChange={onChange}
			readOnly={disabled}
			disabled={disabled}>
			
			</textarea> : 
			<input
				className="form-control"
				value={value}
				name={name}
				onChange={onChange}
				readOnly={disabled}
				disabled={disabled}
			/>}
		
		</div>
	)
}

const Task = ({
	title,
	description,
	bgColor = '#fff',
	textColor = '#000',
	idx,lastIdx,
	onEdit,
	onRemove,
	onColorChange,
	onOrderChangeUp,
	onOrderChangeDown,
}) => {
	const styles = {
		background: bgColor,
		color: textColor,
	}

	const [state, setState] = useState({
		isOpen: false,
		isDuringEdit: false,
	})

	const inner = (
			<React.Fragment>
				<div className='row'>
					<div className='col-md-8'>
						<EditableInput
							name="title"
							value={title}
							onChange={onEdit}
							disabled={!state.isDuringEdit}
						/>
					</div>
					<TaskButtons
						isDuringEdit={state.isDuringEdit}
						description={description}
						onOpen={() => {
							setState({
								...state,
								isOpen: !state.isOpen,
							})
						}}
						onEdit={() => {
							setState({
								...state,
								isDuringEdit: !state.isDuringEdit
							})
						}}
						onRemove={onRemove}
						onColorChange={onColorChange}
						onOrderChangeUp={onOrderChangeUp}
						onOrderChangeDown={onOrderChangeDown}
					/>
				</div>
				{(description && state.isOpen) && (
					<div className='row'>
						<div className='col'>
							<EditableInput
								textarea={true}
								name="description"
								value={description}
								onChange={onEdit}
								disabled={!state.isDuringEdit}
							/>
						</div>
					</div>
				)}
				<div className='row no-pm'>
				{idx !== lastIdx && <ReorderButton direction={'down'} onClick={onOrderChangeDown} />}
				{idx !== 0 && <ReorderButton direction={'up'} onClick={onOrderChangeUp} />}
				</div>

				
			</React.Fragment>
		)
	 

	return (
		<li className='task' style={styles}>
			{inner}
		</li>
	)
}

export default Task
