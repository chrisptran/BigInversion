import React, {useState} from 'react';

const PersonCard = (props) => {

        const [count, setCount] = useState(props.age);

        const handleClick = () => {
            setCount(
                count + 1
            );
        }
    

    return (
        <div>
            <h1>{props.lastName}, {props.firstName}</h1>
            <p>Age: {count}</p>
            <p>Hair Color: {props.hairColor}</p>
            <button onClick={handleClick}>Birthday: {props.firstName}</button>
        </div>
    );
}

export default PersonCard;