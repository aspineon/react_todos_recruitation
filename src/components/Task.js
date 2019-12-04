import React, { useState } from 'react'
import { TaskButtons, EditableInput, ReorderButton } from './Task.common'
import {
	onToggleEdit,
	onToggleDescription,
	onChangePosition,
} from '../logic/actions'

const getProperStateValues = (taskState, actualValues) => {
	const { isDuringEdit, editedTask } = taskState
	if (isDuringEdit === false) {
		return actualValues
	} else {
		return editedTask
	}
}

class Task extends React.Component {

	state = {
		isOpen: false,
		isDuringEdit: false,
		editedTask: {title:'',description:''},
	}

	componentDidMount(){
		const {task, bgColor, textColor} = this.props
		this.setState({
			editedTask:{...task, bgColor, textColor}
		})
	}

	render() {
		const {
			task,
			idx,
			lastIdx,
			onAcceptChangesInTask,
			onEditTask,
			onRemove,
			onColorChange,
			onOrderChangeUp,
			onOrderChangeDown
		} = this.props

		const { isOpen, isDuringEdit } = this.state
		const  { title, description, bgColor, textColor }  = getProperStateValues(this.state, task)

		const inner = (
			<React.Fragment>
				<div className='row'>
					<div className='col-8'>
						<EditableInput
							name='title'
							value={title}
							onChange={(ev) => {
								onEditTask(ev, this)
							}}
							disabled={!isDuringEdit}
						/>
					</div>
					<div className='col-4'>
						<TaskButtons
							{...this.state}
							description={description}
							onOpen={() => {
								onToggleDescription(this)
							}}
							onEdit={() => {
								if (isDuringEdit) {
									onAcceptChangesInTask(this)
								}
								onToggleEdit(this)
							}}
							onRemove={(ev)=>{onRemove(ev,this)}}
							onColorChange={(ev)=>{onColorChange(ev,this)}}
							onOrderChangeUp={onOrderChangeUp}
							onOrderChangeDown={onOrderChangeDown}
						/>
					</div>
					<div className='col-12'>
						{description &&
						isOpen && (
							<EditableInput
								textarea={true}
								name='description'
								value={description}
								onChange={(ev) => {
									onEditTask(ev, this)
								}}
								disabled={!isDuringEdit}
							/>
						)}
					</div>
				</div>
				<div className='row no-pm'>
					{idx !== lastIdx && (
						<ReorderButton
							direction={'down'}
							onClick={onOrderChangeDown}
							onEdit={() => {
								onChangePosition(this)
							}}
						/>
					)}
					{idx !== 0 && (
						<ReorderButton
							direction={'up'}
							onClick={onOrderChangeUp}
							onEdit={() => {
								onChangePosition(this)
							}}
						/>
					)}
				</div>
			</React.Fragment>
		)

		const styles = {background:bgColor, color:textColor}

		return (
			<li className='task' style={styles}>
				{inner}
			</li>
		)
	}
}

export default Task
