import './App.css';
import {increment, decrement, addTodo, removeLastTodo} from "./reduxToolkit/toolkitSlice";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {Button, ListGroup, ListGroupItem, Input} from 'reactstrap';

function App() {
    const count = useSelector(state => state.counter.count)
    const [todo, setTodo] = useState('')
    const todos = useSelector(state => state.counter.todos)
    const dispatch = useDispatch()


    function changeInput(e) {
        setTodo(e.target.value)
    }


    function addTodoAndCleanInput() {
        if(todo.length>0){
            dispatch(addTodo(todo))
            setTodo('')
        } else{
            alert( 'Длина сообщения должна быть больше нуля!')
        }

    }

    return (
        <div className="App container my-4">
            <div className='Счетчик'>Счетчик: <span>{count}</span></div>
            <Button color='primary' className='mx-1' onClick={() => dispatch(increment())}>Increment</Button>
            <Button color='primary' outline onClick={() => dispatch(decrement())}>Decrement</Button>
            {todos.length ?
                (<ListGroup className='my-2'>
                    {todos.map(todo => <ListGroupItem>{todo}</ListGroupItem>)}
                </ListGroup>)
                : <div>Дел больше нет</div>
            }

            <Button color='danger' className='my-2' onClick={() => dispatch(removeLastTodo())}>Remove</Button>
            <div className='d-flex justify-content-between align-items-center'>
                <Input className='mx-1' type='text' onChange={(e) => changeInput(e)} value={todo}/>
                <Button onClick={() => addTodoAndCleanInput()}>AddTodo</Button>
            </div>
        </div>
    );
}

export default App;
