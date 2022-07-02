import React from 'react'

const Person = (props) => {
  return (
    <div>
        My name is {props.name}. I am {props.age}. I am living in {props.city}.
        <button onClick={() => {props.deleteItem(props.index)}}>X</button>
    </div>
  )
}

export default Person;