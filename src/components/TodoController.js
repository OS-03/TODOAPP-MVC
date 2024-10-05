import React, { useState } from 'react';
import TodoView from './TodoView';
import { TodoModel } from '../models/TodoModel';


export default function TodoController(){

    const [model] = useState(new TodoModel());
    const [items, setItems] = useState(model.getTasks());
    
    const addItem = (item) => {
        model.addTask(item);
        setItems([...model.getTasks()]);
    };

    const delItem = () =>{
        model.removeTask();
        setItems([...model.getTasks()]);
    }
    return (
        <TodoView items={items} onAddItem={addItem} onDelItem={delItem}/>
    );
};