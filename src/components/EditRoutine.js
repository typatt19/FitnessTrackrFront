import React, { useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { callApi } from '../api';


const EditRoutine = ({token, routines}) => {
    const history = useHistory();
    const {routineId} = useParams();
    if (routines.length === 0) return null;


    let routineToRender = routines.find((routine) => { 
        console.log("RoutineId:", routineId,"Routine.Id:", routine.id)
        return Number(routineId) === Number(routine.id)});
 

    const [name, setName] = useState(routineToRender.name);
    const [goal, setGoal] = useState(routineToRender.goal);
    const [isPublic, setIsPublic] = useState(routineToRender.isPublic);

    const editSubmit = async (event) => {
        event.preventDefault();


        const data = await callApi({
            url: `/routines/${routineId}`,
            method: 'PATCH',
            body:{
                  name: name,
                  goal: goal,
                  isPublic: isPublic
            }, 
              token:token
        });
    

            history.push('/routines');
            window.location.reload()
        console.log(data)
    };
    
    
    return (
        <>
            <h2>Edit Routine</h2>
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
                <button type="submit">Sumbit Edit</button>
            </form>
            <button>
                <Link to="/">Home</Link>
            </button>
        </>
    );
};

export default EditRoutine;