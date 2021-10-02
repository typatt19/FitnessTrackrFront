import React, { useEffect, useState } from 'react';
import { Link, Route } from 'react-router-dom';
import { callApi } from '../api';
import { Activities, Register } from './';
import {Routines} from "./";
import {Routine} from "./";
import {CreateRoutine} from './'
import {EditRoutine} from './'
import CreateActivity from './CreateActivity';
import ActToRoutine from './ActToRoutine'
import {EditActivity} from './'



const fetchUserData = async (token) => {
    const data  = await callApi({
        url: '/users/me',
        token,
    });

    return data;
};

const fetchActivities = async (token) => {
    const activities = await callApi({
        url: '/activities',
        token,
    });

    return activities;
};

const fetchRoutines = async (token) => {
    const routines = await callApi({
        url: '/routines',
        method: 'GET',
        token,
    });

    return routines;
};


const App = () => {
    const [token, setToken] = useState('');
    const [userData, setUserData] = useState({});
    const [activities, setActivities] = useState([]);
    const [routines, setRoutines] = useState([]);

    const isLoggedIn = userData.username !== undefined;

    const onLogOutClick = () => {
        localStorage.removeItem('st-token');
        setToken('');
        setUserData({});
    };

    useEffect(async () => {
        if (activities.length === 0) {
            const fetchedActivities = await fetchActivities(token);
            console.log("Fetched Activities", fetchedActivities)
            setActivities(fetchedActivities);
        }
    });

    useEffect(async () => {
        if (routines.length === 0) {
            const fetchedRoutines = await fetchRoutines(token);
            console.log("Fetched Routines", fetchedRoutines)
            setRoutines(fetchedRoutines);
        }
    });

    useEffect(async () => {
        if (!token) {
            setToken(localStorage.getItem('st-token'));
            return;
        }
        const data = await fetchUserData(token);
        setUserData(data);
    }, [token]);
    console.log("userData", userData)
    console.log("isLoggedIn", isLoggedIn)


    return (
        <>
        
        {!isLoggedIn ?
            <h1>Welcome to Fitness Trackr, the largest Fitness Community! </h1>
            : ""}
            <Route exact path="/">
                {isLoggedIn ? (
                    <>
                        <div id ="Greeting">Hey, {userData.username}! Let's put in work!</div>
                        <button class="button">
                    <Link to="/CreateRoutine">Create A New Routine</Link>
                        </button>
                        <button class="button">
                    <Link to="/CreateActivity">Create A New Activity</Link>
                        </button>
                    
                        <button class="button">
                    <Link to="/Routines">View Public Routines</Link>
                        </button>
                        <button class="button">
                    <Link to="/Activities">View Public Activities</Link>
                        </button>
                        <div></div>
                        <button class="button" onClick={onLogOutClick}>Log Out</button>

                    </>
                ) : (
                    <>
                        <button class="button">
                            <Link to="/register">Register</Link>
                        </button>
                        <button class="button">
                            <Link to="/login">Login</Link>
                        </button>
                        <div></div>
                        <br></br>
                        <button class="LargeButton">
                    <Link to="/Routines">View Public Routines</Link>
                        </button>
                        <button class="LargeButton">
                    <Link to="/Activities">View Public Activities</Link>
                        </button>
                    </>
                )}

                    


            </Route>
            <Route path="/CreateRoutine">
                <CreateRoutine action="Create Routine" token={token} />
            </Route>
            <Route path="/CreateActivity">
                <CreateActivity action="Create Activity" token={token} />
            </Route>
            <Route path="/Routines">
                <Routines routines={routines} token={token} userData = {userData} />
            </Route>
            <Route path="/Routine">
                <Routine routines={routines} token={token} userData = {userData} />
            </Route>
            <Route path="/EditRoutine/:routineId">
                <EditRoutine routines={routines} token={token} />
            </Route>
            <Route path="/EditActivity/:activityId">
                <EditActivity activities={activities} token={token} />
            </Route>
            <Route path="/ActToRoutine">
                <ActToRoutine action="ActivityToRoutine" token={token} userData = {userData} routines = {routines} />
            </Route>
            <Route path="/Activities">
            <Activities activities={activities}  userData={userData} token={token} />

            </Route>
            <Route path="/register">
                <Register action="register" setToken={setToken} />
            </Route>
            <Route path="/login">
                <Register action="login" setToken={setToken} />
            </Route>
            <Route path="/routines/:routineId">
                <Routines routines={routines} />
            </Route>
            
            {/* <Route path="/CreateRoutine/">
                <CreateRoutine action="routine" token={token} />
            </Route> */}
            {/* <Route path="/EditRoutine/:routineId">
                <EditRoutine routine={routines} token={token} />
            </Route> */}
        </>
    );
};


export default App