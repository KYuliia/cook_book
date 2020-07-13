import React, { useState } from 'react';
import './MyRecipes.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const LIST = [
    {
        lable: "Pizza Recipe_1",
        date: "2015-03-25T12:00:00-06:30",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elireprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  Excepteur sint occaecat cupidatat non proident,sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        lable: "Pizza Recipe_2",
        date: "2015-03-25T12:00:00-06:30",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elireprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  Excepteur sint occaecat cupidatat non proident,sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        lable: "Pizza Recipe_3",
        date: "2015-03-25T12:00:00-06:30",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elireprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  Excepteur sint occaecat cupidatat non proident,sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        lable: "Pizza Recipe_4",
        date: "2015-03-25T12:00:00-06:30",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elireprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  Excepteur sint occaecat cupidatat non proident,sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        lable: "Pizza Recipe_5",
        date: "2015-03-25T12:00:00-06:30",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elireprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  Excepteur sint occaecat cupidatat non proident,sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        lable: "Pizza Recipe_6",
        date: "2015-03-25T12:00:00-06:30",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elireprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  Excepteur sint occaecat cupidatat non proident,sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
];
const convertDate = (inputFormat) => {
    function pad(s) { return (s < 10) ? '0' + s : s; }
    var d = new Date(inputFormat);
    return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join('/');
}

const MyRecipes = () => {
    const today = new Date();
    const date1 = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    const [lable, setTitle] = useState({ lable: LIST?.lable });
    const [date, setCount] = useState(date1);
    const [text, setText] = useState('');
    const [list, newList] = useState(LIST);

    const onSubmit = (e) => {
        e.preventDefault();
        e.target.reset();
        const newListFULL = { lable: lable, date: date, text: text };
        return newList([...list, newListFULL]);
    }

    const listItems = list.map((list, value) => {
        return <nav>
            <ul className="list-group-recipes-items">
                <li>
                    <div className="list-group-recipes-items-title" >
                        <input value={list?.lable} onChange={e => setTitle(e.target.value)} />
                        <span>{convertDate(list?.date)} </span></div>
                    <p>{list?.text}</p>
                </li>
            </ul ></nav >
    });

    return (
        <div>
            <form onSubmit={onSubmit} >
                <ul className="list-group-recipes-items">
                    <li>
                        <div className="inputDatePiker"><span>Here entered today's date</span>
                            <input placeholder="Add you recipes" value={date1} disabled />
                        </div>
                        <input type="text" className="inputText" placeholder="Add Your Title" onChange={e => setTitle(e.target.value)} />
                        <textarea className="inputTextArea" type="text" placeholder="Add you recipes" onChange={e => setText(e.target.value)} />
                    </li>
                    <button onSubmit={onSubmit} className="btn btn-outline-light btn-lg btn-block appBtn" type="submit" >Add New Repices</button>
                </ul>
            </form>

            <div>{listItems}</div>
        </div>
    );
}

export default MyRecipes;