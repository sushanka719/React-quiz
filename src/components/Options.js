import React from 'react'

const Options = ({ question, dispatch, answer }) => {
    const hadAnswered = answer !== null;
    return (
        <div className="options">
            {question.options.map((option, index) => (
                <button className={`btn btn-option ${index === answer ? 'answer' : ''}
                ${hadAnswered ? index === question.correctOption ? 'correct' : "wrong" : ''}`}
                    key={option}
                    disabled={hadAnswered}
                    onClick={() => dispatch({ type: "newAnswer", payload: index })}>{option}</button>
            ))}
        </div>
    )
}

export default Options