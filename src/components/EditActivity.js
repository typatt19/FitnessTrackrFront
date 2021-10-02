import React, { useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { callApi } from '../api';


const EditActivity = ({token, activities}) => {
    const history = useHistory();
    const {activityId} = useParams();
    if (activities.length === 0) return null;


    let activityToRender = activities.find((activity) => { 
        return Number(activityId) === Number(activity.id)});
 

    const [name, setName] = useState(activityToRender.name);
    const [description, setDescription] = useState(activityToRender.description);

    const editSubmit = async (event) => {
        event.preventDefault();


        const data = await callApi({
            url: `/activities/${activityId}`,
            method: 'PATCH',
            body:{
                  name: name,
                  description: description,
            }, 
              token:token
        });
    

            history.push('/activities');
            window.location.reload()
        console.log(data)
    };
    
    
    return (
        <>
            <h2>Edit Activity</h2>
            <form onSubmit={editSubmit}>
                <div id ="TextField">
                <input
                    type="text"
                    placeholder="Name"
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
                <button type="submit">Sumbit Activity Edit</button>
            </form>
            <button>
                <Link to="/">Home</Link>
            </button>
        </>
    );
};

export default EditActivity;