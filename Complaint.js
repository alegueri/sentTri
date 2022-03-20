import * as React from 'react';
import Button from '@mui/material/Button';
import { FormControl, Grid, TextField, Container} from '@mui/material';
import { InputLabel } from '@mui/material';
import { Input } from '@mui/material';
import { FormHelperText } from '@mui/material';
import { useState, useEffect } from "react";
import { io } from "socket.io-client";
import { Link } from 'react-router-dom';
import PatientProfile from '../../pages/patient/patient_profile';
import EmptyProfile from '../../pages/patient/empty_profile';
import HandleComplaints from '../../components/handleComplaints';
import { Carousel } from 'react-carousel-minimal';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import ImageMapper from 'react-image-mapper';
import Card from 'react-card-component';
import { DataGrid } from '@mui/x-data-grid';
import FormDialog from '../../components/FormDialog';
import ImageMap from './imageMap'

function Complaint(props) {
    const {complaintList,getPatientComplaint} = HandleComplaints();
    useEffect(() => {
        getPatientComplaint();
        console.log(complaintList)
      }, [])
     
    function chiefComplaint() {
        return(
                <form sx={{ flexDirection: "row", height:'200px'}} >
                    
                    <label > Please enter any other comments: </label> 
                    <TextField 
                        label="Extra Comments" 
                        variant = "filled" 
                        color = "primary" 
                        fullWidth
                        required /> 
        
                </form>     
        )
    }
    const columns = [
        { field: 'ComplaintID', headerName: 'ComplaintID',},
        { field: 'OHIP', headerName: 'OHIP', },
        {
            field: 'VisitID',
            headerName: 'VisitID',
            type: 'number',
            width: 80,
        },
        {
            field: 'PatientComplaint',
            headerName: 'Complaint',
            disableClickEventBubbling: true,
            width: 60,

        },
        {
            field: 'ComplaintEvent',
            headerName: 'Complaint Event',
            disableClickEventBubbling: true,
            width: 150,
        },
        {
            field: 'PatientPainLevel',
            headerName: 'Pain Level',
            disableClickEventBubbling: true,
            width: 100,

        },
        {
            field: 'PatientSymptomList',
            headerName: 'Symptoms',
            disableClickEventBubbling: true,

        },
        {
            field: 'PatientComments',
            headerName: 'Comments',
            disableClickEventBubbling: true,
        },
    ] 

    /*
    URL = "https://c1.staticflickr.com/5/4052/4503898393_303cfbc9fd_b.jpg"
    MAP = {
    name: "my-map",
    areas: [
        { name: "1", shape: "poly", coords: [25,33,27,300,128,240,128,94], preFillColor: "green", fillColor: "blue"  },
        { name: "2", shape: "poly", coords: [219,118,220,210,283,210,284,119], preFillColor: "pink"  },
        { name: "3", shape: "poly", coords: [381,241,383,94,462,53,457,282], fillColor: "yellow"  },
        { name: "4", shape: "poly", coords: [245,285,290,285,274,239,249,238], preFillColor: "red"  },
        { name: "5", shape: "circle", coords: [170, 100, 25 ] },
    ]
    }


    function imageM (){
        return (
            <ImageMapper 
              src={URL} 
              map={MAP}
           />
          )
    }
    */ 

    return (
        <AwesomeSlider animation="cubeAnimation">
        <div style={{display:'flex', flexDirection:'row', paddingRight:700, height: '100%', width: '100%' ,backgroundColor :'BlanchedAlmond'}}>
            <div style={{display:'flex', height: 300, width: '500%' ,backgroundColor :'white'}} >
            <DataGrid
                getRowId={row => row.ComplaintID}
                rows={complaintList}
                columns={columns}
                pageSize={20}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
            </div>
        </div>
        <div>
            {ImageMap()}
        </div>
    
        <div className = "cardClass" style = {{display:'flex', flexDirection:'row', alignItems:'center',backgroundColor :'BlanchedAlmond'}}> 
            <div style = {{display:'flex', flexDirection:'row'}}> 
            <Card style={{"width":"150px","height":"150px", "margin":"25px"}} background={"Plum"} hoverType={"zoom"}><div>Cardiovascular</div></Card> 
            <Card style={{"width":"150px","height":"150px", "margin":"25px"}} background={"Plum"} hoverType={"zoom"}><div>Respitory</div></Card> 
            <Card style={{"width":"150px","height":"150px", "margin":"25px"}} background={"Plum"} hoverType={"zoom"}><div>Ears</div></Card> 
            <Card style={{"width":"150px","height":"150px", "margin":"25px"}} background={"Plum"} hoverType={"zoom"}><div>Mouth, Throat,Neck</div></Card>      
            </div> 
            <div style = {{display:'flex', flexDirection:'row'}}> 
            <Card style={{"width":"150px","height":"150px", "margin":"25px",}} background={"Plum"} hoverType={"zoom"}><div style = {{display: 'flex', justifyContent:'center'}}>Nose</div></Card> 
            <Card style={{"width":"150px","height":"150px", "margin":"25px"}} background={"Plum"} hoverType={"zoom"}><div>Eyes</div></Card> 
            <Card style={{"width":"150px","height":"150px", "margin":"25px"}} background={"Plum"} hoverType={"zoom"}><div>Skin</div></Card> 
            <Card style={{"width":"150px","height":"150px", "margin":"25px"}} background={"Plum"} hoverType={"zoom"}><div>Digestive</div></Card>      
            </div> 
            <div style = {{display:'flex', flexDirection:'row'}}> 
            <Card style={{"width":"150px","height":"150px", "margin":"25px"}} background={"Plum"} hoverType={"zoom"}><div>Genitals or OBGYN</div></Card> 
            <Card style={{"width":"150px","height":"150px", "margin":"25px"}} background={"Plum"} hoverType={"zoom"}><div>Bones and Joints</div></Card> 
            <Card style={{"width":"150px","height":"150px", "margin":"25px"}} background={"Plum"} hoverType={"zoom"}><div>Neurological</div></Card> 
            <Card style={{"width":"150px","height":"150px", "margin":"25px"}} background={"Plum"} hoverType={"zoom"}><div>Mental Health</div></Card>      
            </div> 
            <div style = {{display:'flex', flexDirection:'row'}}> 
            <Card style={{"width":"150px","height":"150px", "margin":"25px"}} background={"Plum"} hoverType={"zoom"}><div>Environmental</div></Card> 
            <Card style={{"width":"150px","height":"150px", "margin":"25px"}} background={"Plum"} hoverType={"zoom"}><div>Substance Misuse</div></Card> 
            <Card style={{"width":"150px","height":"150px", "margin":"25px"}} background={"Plum"} hoverType={"zoom"}><div>Trauma</div></Card> 
            <Card style={{"width":"150px","height":"150px", "margin":"25px"}} background={"Plum"} hoverType={"zoom"}><div>General or Unknown</div></Card>      
            </div> 
        </div>
        <div style={{backgroundColor :'lightcoral'}}> {chiefComplaint()}</div>
        <div>
            <button style={{marginLeft:100}}  onClick={()=>getPatientComplaint()} > Click </button>
            {complaintList.map(items => <li> {items.OHIP}</li> )} 
            {console.log(complaintList)}
            </div>
      </AwesomeSlider> 
      /*
      <div style={{ height: 300, width: '60%' }} >
      <DataGrid
          getRowId={row => row.ComplaintID}
          rows={complaintList}
          columns={columns}
          pageSize={20}
          rowsPerPageOptions={[5]}
          checkboxSelection
      />
    </div>
    */
    )
}

export default Complaint;