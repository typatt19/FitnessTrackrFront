import React from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { callApi } from '../api';

const Activity = ({activity, activities, token, userData}) => {
    const { activityId } = useParams();
    const history = useHistory();

    if (activities.length === 0) return null;

    let activityToRender;

    if (activity) {
        activityToRender = activity;
    } else {
        activityToRender = activities.find((activity) => activityId === activity.id);
    }

        const onDelete = async (event) => {
            event.preventDefault();
    
    
            const data = await callApi({
                url: `/activities/${activityToRender.id}`,
                method: 'DELETE',
                token,
            });
        
    
                history.push('/activities');
                window.location.reload()
        }

         return (
             
        
        <>
        
            {
            activityToRender.username
            ? 
            <div><b style ={{fontSize:"23px"}}>Submitted by:</b> {activityToRender.username }</div>
            :
            null
            }
            <div><b style ={{fontSize:"23px"}}>Name:</b> {activityToRender.name}</div>
            <div><b style ={{fontSize:"23px"}}>Id:</b> {activityToRender.id}</div>
            <div><b style ={{fontSize:"23px"}}>Description:</b> {activityToRender.description}</div>
            {!activity ? <Link to="/Activities">Back to all Activities</Link> : null}


        {activity.activities?.map((routine) => {
           return  (<>
            <div><b style ={{fontSize:"23px"}}>Name:</b> {routine.name}</div>
            <div><b style ={{fontSize:"23px"}}>Description:</b> {routine.description}</div>
            <div><b style ={{fontSize:"23px"}}>Goal:</b> {routine.goal}</div>
            <div><b style ={{fontSize:"23px"}}>Count:</b> {routine.count}</div>

            </>
        )
})}
    </>       
    );
};

export default Activity;