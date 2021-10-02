import React from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { callApi } from '../api';

const Routine = ({routine, routines, token, userData}) => {
    const { routineId } = useParams();
    const history = useHistory();

    if (routines.length === 0) return null;

    let routineToRender;

    if (routine) {
        routineToRender = routine;
    } else {
        routineToRender = routines.find((routine) => routineId === routine._id);
    }

        const onDelete = async (event) => {
            event.preventDefault();
    
    
            const data = await callApi({
                url: `/routines/${routineToRender.id}`,
                method: 'DELETE',
                token,
            });
        
    
                history.push('/routines');
                window.location.reload()
        }

         return (
             
        
        <>
        
            {
            routineToRender.username
            ? 
            <div><b style ={{fontSize:"23px"}}>Submitted by:</b> {routineToRender.username }</div>
            :
            null
            }
            <div><b style ={{fontSize:"23px"}}>Name:</b> {routineToRender.name}</div>
            <div><b style ={{fontSize:"23px"}}>Goal:</b> {routineToRender.goal}</div>
            <div><b style ={{fontSize:"23px"}}>CreatorName:</b> {routineToRender.creatorName}</div>
            <div><b style ={{fontSize:"23px"}}>Public Routine:</b> {routineToRender.isPublic ? 'Yes' : 'No'}</div>
            {!routine ? <Link to="/Routines">Back to all routines</Link> : null}
            {/* {routineToRender.id === userData.id
            ? 
            <>
            <button>
                        <Link to={`routines/${routine.id}/activities`}>Add Activity To Routine</Link>
                    </button>
            <button>
            <Link to={"/EditRoutine/" + routineToRender.id}>Edit Routine</Link>
            </button>
            <button onClick={onDelete}>Delete Routine</button> 
            
            </>

            
            : 
            null        
}  */}

        {routine.activities?.map((activity) => {
           return  (<>

            <div><b style ={{fontSize:"23px"}}>Name:</b> {activity.name}</div>
            <div><b style ={{fontSize:"23px"}}>ID:</b> {activity.id}</div>
            <div><b style ={{fontSize:"23px"}}>Description:</b> {activity.description}</div>
            <div><b style ={{fontSize:"23px"}}>Duration:</b> {activity.duration}</div>
            <div><b style ={{fontSize:"23px"}}>Count:</b> {activity.count}</div>
            <div><b style ={{fontSize:"23px"}}>Routine Activity:</b> {activity.routineActivityId}</div>
            <div><b style ={{fontSize:"23px"}}>RoutineId:</b> {activity.routineId}</div>


            </>
        )
})}
    </>       
    );
};

export default Routine;