import * as React from 'react';
import Button from '@mui/material/Button';
import { FormControl, Grid } from '@mui/material';
import { InputLabel } from '@mui/material';
import { Input } from '@mui/material';
import { FormHelperText } from '@mui/material';
import { useState, useEffect } from "react";
import { io } from "socket.io-client";
import { Link } from 'react-router-dom';
import PatientProfile from '../../pages/patient/patient_profile';
import EmptyProfile from '../../pages/patient/empty_profile';
import HandleStates from '../../components/handleStates';

function OhipSubmission() {
    const {patientList, setPatientList, showClicked, setShowClicked, patientProfile, setPatientProfile,getPatientProfile,patientProfileChange,addItem,updateItem} = HandleStates();
    const [patientOhip, setOHIP] = useState(0)
    const [ohipFound, setOhipFound] = useState(false)
    const [patientisUpdating, setPatientisUpdating] = useState(false)
    const patientUser = patientList.filter(patient  => patient.OHIP === patientOhip)
 
    function handleSubmit(bool) {
        getPatientProfile()
        { patientUser.length > 0 ? setOhipFound(true) : setOhipFound(false) } 
        setShowClicked(bool)
      }
    function wrapper(bool) {
        if (bool){
        addItem(); }
        else {
            updateItem(patientOhip)
            setPatientisUpdating(false);
        }
        setOhipFound(true);
    }
    function wrapper2(){
        setPatientisUpdating(true)
        setOhipFound(false)
    }

    function showPatient(bool) {
        if (bool) {
            return(
                <div> 
                {patientUser.map(items => <PatientProfile  patient = {items} /> )} 
                <button style={{marginLeft:100}}  onClick={()=>wrapper2()}> Update </button>
                <Link style={{ textDecoration: 'none' }} to={{
                pathname: "/Complaint",
                 }}>
                <Button>Next</Button>
            </Link> 
                </div> 
                ) 
        }
        else {
            return (
            <div>
                <EmptyProfile savedOhip = {patientOhip} patientProfileChange = {patientProfileChange}/>
                <div>
                {!patientisUpdating ? <button style={{marginLeft:100}}  onClick={()=>wrapper(true)}> Add Patient </button>  : <button style={{marginLeft:100}}  onClick={()=>wrapper(false)}> Confirm </button> }

                </div>
            </div> 
            )
        }
    }
    return (
    <form sx={{ flexDirection: "row"}} id='childForm'>
        <Grid id="form" direction="column" container spacing={8}>
            <Grid id="field1"  item xs={8} spacing={2}>
                <FormControl>
                    <InputLabel htmlFor="firstName">OHIP</InputLabel>
                    <Input id="firstName" aria-describedby="my-helper-text" onChange={e => setOHIP(e.target.value)} />
                    <FormHelperText id="my-helper-text">Please enter your 12 digit OHIP number and Version</FormHelperText>
                </FormControl>
    
         </Grid>
        
        <Grid id="submitButton" item xs={12}>
            {!showClicked ? <Button onClick={() => handleSubmit(true)}>Submit</Button> : <Button onClick={() => handleSubmit(false)}>Close</Button> }
            {showClicked  && showPatient(ohipFound)  }
     
        </Grid>
        </Grid> 

      
    </form>
    )
}

export default OhipSubmission;