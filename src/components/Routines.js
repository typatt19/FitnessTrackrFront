import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Routine } from './';

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


const Routines = ({ routines }) => {


    console.log("Routines:", routines)
    return (
        <>
        <button class="LargeButton">
                    <Link to="/"><b style ={{fontSize:"18px"}}>Home</b></Link>
                        </button>
                        <div></div>

            <b style ={{fontSize:"28px"}}><h2>Public Routines</h2></b>

           <div id = "RoutineContainer"> {routines?.map((routine) => (
                <div key={routine.id} style={{ border: '3px solid white', 
                borderRadius: '15px', margin: '10px 350px', padding: '10px',}}>
                    <Routine routines={routines} routine={routine} />
                    {<button>
                        <Link to={`/EditRoutine/${routine.id}`}>Edit Routine</Link>
                    </button>}
                </div>
                
            ))}
            </div>
        </>
    );
};

export default Routines;