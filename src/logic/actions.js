import { moveElemInArray } from './common'

const onEditTask = (el, k, state, stateSetter) => (ev, ctx) => {
	const { tasks } = state
	const { value, name } = ev.target

	const editedTask = {...ctx.state.editedTask}
	editedTask[name] = value

	ctx.setState({
		editedTask: editedTask
	})
}

const onAcceptChangesInTask = (el, k, state, stateSetter) => (ctx) => {
	const { tasks } = state

	const condition = (prompt('do you really want to edit this task?', 'Y') ||
		'')
		.toLowerCase()

	if (condition === 'y' || condition === 'yes') {
		tasks[k] = {...ctx.state.editedTask}
		stateSetter({
			...state,
			tasks: tasks
		})
		return true
	}
	else{
		ctx.setState({
			editedTask:tasks[k]
		})
		return false
	}
}

const onRemove = (el, k, state, stateSetter) => (ev, ctx) => {
	const { tasks } = state

	const condition = (prompt('do you really want to remove this task?', 'Y') ||
		'')
		.toLowerCase()

	if (condition === 'y' || condition === 'yes') {
		onChangePosition(ctx)
		stateSetter({
			...state,
			tasks: tasks.filter((e, _k) => _k !== k),
		})
		return true
	}
	else{
		return false
	}
}

const onOrderChange = (el, k, state, stateSetter, direction = 'up') => (ev) => {
	let { tasks } = state

	if (direction === 'up' && k >= 1) {
		tasks = moveElemInArray(tasks, k, k - 1)
	} else if (direction === 'down' && k < tasks.length - 1) {
		tasks = moveElemInArray(tasks, k + 1, k)
	}

	stateSetter({
		...state,
		tasks: tasks,
	})
}

const onColorChange = (el, k, state, stateSetter, direction = 'up') => (ev, ctx) => {

	const { tasks } = state
	const { value, name = 'bgColor' } = ev.target
	const {editedTask} = ctx.state

	editedTask[name] = value

	ctx.setState({
		editedTask
	})
}

const onAddTask = (state, setState) => (task) => {
	if (task.title) {
		const { tasks } = state

		const condition = (prompt('do you really want to add task?', 'Y') || '')
			.toLowerCase()

		if (condition === 'y' || condition === 'yes') {
			tasks.push(task)
			setState({
				...state,
				tasks: tasks,
			})
			return true
		} else {
			return false
		}
	} else {
		alert('Task has no title')
		return false
	}
}

function onToggleEdit(ctx) {
	const { isDuringEdit, isOpen } = ctx.state
	const newState = {}

	if (isDuringEdit === false) {
		newState['isOpen'] = true
		newState['isDuringEdit'] = true
	} else {
		newState['isOpen'] = false
		newState['isDuringEdit'] = false
	}

	ctx.setState(newState)
}

function onToggleDescription(ctx) {
	const { isDuringEdit, isOpen } = ctx.state
	const newState = {}

	if (isOpen === false) {
		newState['isOpen'] = true
		newState['isDuringEdit'] = isDuringEdit
	} else {
		newState['isOpen'] = false
		newState['isDuringEdit'] = false
	}

	ctx.setState(newState)
}

function onChangePosition(ctx) {
	const newState = {
		isDuringEdit: false,
		isOpen: false,
	}

	ctx.setState(newState)
}

export {
	onEditTask,
	onAcceptChangesInTask,
	onRemove,
	onColorChange,
	onOrderChange,
	onAddTask,
	onToggleEdit,
	onToggleDescription,
	onChangePosition,
}
