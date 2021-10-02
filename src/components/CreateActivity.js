import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { callApi } from '../api';

const CreateActivity = ({token}) => {
    const history = useHistory();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    
    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = await callApi({
            url: `/activities`,
            method: 'POST',
            body:{
                  name: name,
                  description: description,
            }, 
              token
        });
    
            history.push('/activities');
            window.location.reload()
        console.log(data)
    };

    return (
        <>
            <h2>Create New Activity!</h2>
            <form onSubmit={handleSubmit}>
                <div id ="TextField">
                <input
                    type="text"
                    placeholder="Name of Activity"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                ></input>
                <input
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                ></input>
                </div>
                <button type="submit">Post Activity</button>
            </form>
            <button>
                <Link to="/">Home</Link>
            </button>
        </>
    );
};

export default CreateActivity;