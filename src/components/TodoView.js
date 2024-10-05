import React from 'react';
import './TodoView.css'

export default function TodoView({ items, onAddItem , onDelItem}) {
    const [inputValue, setInputValue] = React.useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddItem(inputValue);
        //To Clear Input Field after Submission
        setInputValue('');
    };

    return (
        <div>
            <h1>To-Do List</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                <button type="submit">Add Task</button>
            </form>
            <ul>
                {items.map((item, index) => (<li key={index}> {item} <button onClick={onDelItem}>delete</button> </li>))}
            </ul>
        </div >
    );
}