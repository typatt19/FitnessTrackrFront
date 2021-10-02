import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { callApi } from '../api';

const CreateRoutine = ({token}) => {
    const history = useHistory();
    const [name, setName] = useState('');
    const [goal, setGoal] = useState('');
    const [isPublic, setIsPublic] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = await callApi({
            url: `/routines`,
            method: 'POST',
            body:{
                  name: name,
                  goal: goal,
                  isPublic: true
            }, 
              token
        });
    
            history.push('/routines');
            window.location.reload()
        console.log(data)
    };

    return (
        <>
            <h2>Create New Routine!</h2>
            <form onSubmit={handleSubmit}>
                <div id ="TextField">
                <input
                    type="text"
                    placeholder="Name of Routine"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                ></input>
                <input
                    type="text"
                    placeholder="Goal"
                    value={goal}
                    onChange={(event) => setGoal(event.target.value)}
                ></input>
                <div>Make Routine Public?</div>
                <input
                    type="checkbox"
                    value={isPublic}
                    class="largerCheckbox"
            name="checkBox2"
                    onChange={(event) => setIsPublic(event.target.value)}
                ></input>
                </div>
                <button type="submit">Post Routine</button>
            </form>
            <button>
                <Link to="/">Home</Link>
            </button>
        </>
    );
};

export default CreateRoutine;