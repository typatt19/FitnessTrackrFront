import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Activity } from './';


const styles = {
    searchContainer: {
        display: 'flex',
        justifyContent: 'center',
        padding: '16px',
        alignItems: 'center',
    },
    searchInput: {
        margin: '0 16px',
    },
};


const Activities = ({ activities, userData }) => {


    console.log("Activities:", activities)
    return (
        <>
        <button class="LargeButton">
                    <Link to="/"><b style ={{fontSize:"18px"}}>Home</b></Link>
                        </button>
                        <div></div>

            <b style ={{fontSize:"28px"}}><h2>Public Activities</h2></b>

           <div id = "ActivityContainer"> {activities?.map((activity) => (
                <div key={activity.id} style={{ border: '3px solid white', 
                borderRadius: '15px', margin: '10px 350px', padding: '10px',}}>
                    <Activity activities={activities} activity={activity} userData={userData} />
                    {<button>
                        <Link to={`/EditActivity/${activity.id}`}>Edit Activity</Link>
                    </button>}
                </div>
                
            ))}
            <