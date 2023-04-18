import {createSlice} from "@reduxjs/toolkit";

const toolkitSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 0,
        todos: ['Дело 1', 'Дело 2', 'Дело 3']
    },
    reducers: {
        increment(state) {
            state.count = state.count + 1
        },
        decrement(state) {
            state.count = state.count - 1
        },
        addTodo(state, action) {
            state.todos.push(action.payload)
        },
        removeLastTodo(state) {
            state.todos.pop()
        }
    }
})

export default toolkitSlice;
export const {increment, decrement, addTodo, removeLastTodo} = toolkitSlice.actions