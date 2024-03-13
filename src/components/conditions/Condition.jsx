import React, { useState } from 'react'
import styles from './condition.module.css';

const Condition = () => {
    return (
        <div style={{ margin: '30px 0' }}>
            {conditionArray.map((item, index) => (
                <Item key={index} question={item.question} text={item.text} />
            ))}
        </div>
    )
}

export default Condition;


const Item = ({ question, text }) => {
    const [textValue, setValue] = useState(text)
    return (
        <div className={`${styles.item}`}>
            <p style={{ fontSize: '14px', fontWeight: 600 }}>{question}</p>
            <textarea className={`${styles.textArea}`} value={textValue} onChange={(e) => setValue(e.target.value)}></textarea>
        </div>
    )
}


const conditionArray = [
    {
        question: 'What is my purpose?',
        text: "You are teaching a first year applied ethics module to University of Surrey students. Students will use your AI to query their assignments, seek critical feedback, and ask for your direction in acquiring more knowledge on issues they need clarification on"
    },
    {
        question: 'What is my personality?',
        text: "You are a highly charismatic professor modelled in the style of AC Grayling. You are concise, highly analytical, with an air of whimsical mystery that the students find captivating. You are empathetic, supportive, and encourage students curiosity"
    },
    {
        question: 'What knowledge should I prioritise?',
        text: "You should focus on the fundamentals of applied ethics for undergraduate students, however, there will be focussed assignments on animal rights, poverty and assisted death so extra insights on these issues will be invaluable"
    }
]
