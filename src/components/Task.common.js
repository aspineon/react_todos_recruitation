import React, { useState } from 'react'
import ColorPicker from './ColorPicker'

const TaskButtons = ({
	onOpen,
	onEdit,
	onRemove,
	onColorChange,
	isDuringEdit,
	isOpen,
	description,
}) => {
	return (
		<div className='btn-group'>
			{description && (
				<button className='btn btn-light' onClick={onOpen}>
					<i
						className={[`fas fa-chevron-${isOpen ? 'up' : 'down'}`]}
					/>
				</button>
			)}
			<button
				className={`btn btn-${isDuringEdit ? 'success' : 'warning'}`}
				onClick={onEdit}
			>
				<i className={[`fas fa-${isDuringEdit ? 'save' : 'edit'}`]} />
			</button>
			<button className='btn btn-danger' onClick={onRemove}>
				<i className='fas fa-trash' />
			</button>
			<ColorPicker
				onColorChange={onColorChange}
				isDuringEdit={isDuringEdit}
				onClick={onEdit}
			/>
			{!isDuringEdit && (
				<button className='btn btn-warning' onClick={onEdit}>
					<i className='fas fa-paint-brush' />
				</button>
			)}
		</div>
	)
}

const ReorderButton = ({ onClick, direction = 'up', onEdit }) => {
	const icon = <i className={`fas fa-chevron-${direction}`} />
	return (
		<div className='reorder-btn'>
			<button
				className='btn'
				onClick={(ev) => {
					onClick(ev)
					onEdit()
				}}
			>
				{icon}
			</button>
		</div>
	)
}

const EditableInput = ({
	value,
	name,
	onChange,
	disabled = true,
	textarea = false,
}) => {
	return (
		<div className='form-group'>
			{textarea ? (
				<textarea
					className='form-control'
					value={value}
					name={name}
					onChange={onChange}
					readOnly={disabled}
					disabled={disabled}
				/>
			) : (
				<input
					className='form-control'
					value={value}
					name={name}
					onChange={onChange}
					readOnly={disabled}
					disabled={disabled}
				/>
			)}
		</div>
	)
}

export { TaskButtons, ReorderButton, EditableInput }
