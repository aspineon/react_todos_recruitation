import React from 'react';
import ReactDOM from 'react-dom';

import {
    onAddTask, onColorChange, onEdit, onRemove, onOrderChange, onToggleEdit, onToggleDescription
} from '../logic/actions'

import {
    channelsToRGB, moveElemInArray
} from '../logic/common'


class StateMock {
    constructor(initialState){
        this.state = {...initialState}
        this.setState = this.setState.bind(this)
    }
    setState(wholeNewState){
        this.state = {...wholeNewState}
    }
}

describe('logic',()=>{
    it('state of tasks was been editted', () => {
        const tasks = [{title:'test', description:'desc'}]
        const mockState = new StateMock({tasks:tasks})

        const event = {target:{ value:'test3', name:'title'}}
        const k = 0
        const el = tasks[k]

        onEdit(el,k,mockState.state, mockState.setState)(event)

        expect(mockState.state.tasks[0].title).toBe('test3')
    });

    it('state of tasks was been removed', () => {
        const tasks = [{title:'test1', description:'desc'}, {title:'test2', description:'desc'}]
        const mockState = new StateMock({tasks:tasks})

        const event = {target:{ value:'', name:''}}

        const k = 0
        const el = tasks[k]

        onRemove(el, k, mockState.state, mockState.setState)(event)

        expect(mockState.state.tasks.length).toBe(1)
        expect(mockState.state.tasks[0].title).toBe('test2')
    });

    it('color of tasks has been changed', () => {

        const tasks = [{title:'test1', description:'desc'}, {title:'test2', description:'desc'}]
        const mockState = new StateMock({tasks:tasks})

        const event = {target:{ value:'red'}}

        const k = 0
        const el = tasks[k]

        onColorChange(el, k, mockState.state, mockState.setState)(event)

        expect(mockState.state.tasks[0].bgColor).toBe('red')
    });

    it('new task was added', () => {
        const tasks = [{title:'test', description:'desc'}]
        const mockState = new StateMock({tasks:tasks})

        const task = {title:'test1', description:'desc'}
        
        onAddTask(mockState.state, mockState.setState)(task)

        expect(mockState.state.tasks.length).toBe(2)
        expect(mockState.state.tasks[1].title).toBe('test1')
    });

    it('order of tasks was changed', () => {
        const tasks = [{title:'test1', description:'desc'}, {title:'test2', description:'desc'}]
        const mockState = new StateMock({tasks:tasks})

        const event = {target:{ value:''}}
        const k = 0
        const el = tasks[k]

        onOrderChange(el, k, mockState.state, mockState.setState,'down')(event)
        expect(mockState.state.tasks[1].title).toBe('test1')

        onOrderChange(el, k+1, mockState.state, mockState.setState,'up')(event)
        expect(mockState.state.tasks[1].title).toBe('test2')
    });

    it('other tests', () => {
        expect(true).toBe(true)
    });
})
