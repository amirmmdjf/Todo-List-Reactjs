import { useState } from "react";
import { Trash } from 'react-bootstrap-icons';
import styles from './TodoList.module.css'

const TodoList = () => {

    const [item, setItem] = useState(['Learning Reactjs', 'Learning Redux', 'Learning Nextjs'])
    const [input, setInput] = useState('')

    const addItems = () => {
        if (input.trim() === '') {
            alert('you should write something')
        } else {
            setItem((prevItems) => [...prevItems, input]);
            setInput('')
        }

    };

    const inputChangeHandler = (event) => {
        setInput(event.target.value)
    }

    const keyDownHandler = (event) => {
        if (event.key === "Enter") {
            addItems()
        }
    }

    const removeItem = (index) => {
        setItem((prevItems) => prevItems.filter((_, i) => i !== index));
    };

    return (
        <div className="App">
            <h1 className={styles.title}>ToDo List</h1>

            <div className={`${styles["input-box"]}`}>
                <input
                    className={styles.input}
                    type="text" onChange={inputChangeHandler}
                    onKeyDown={keyDownHandler}
                    value={input}
                    placeholder="Learning..."
                />
                <button className={styles.button} onClick={addItems}>ADD</button>
            </div>

            <ul className={`${styles["main-box"]}`}>
                {
                    item.map((it, index) => {
                        return <li className={styles.item} key={index}>{it} <Trash className={styles.trash} onClick={() => removeItem(index)} /></li>
                    })
                }
            </ul>
        </div>
    );
}

export default TodoList;