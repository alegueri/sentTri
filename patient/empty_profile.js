import React from 'react'
import {useState, useEffect} from 'react' 


//One function for the updating inputs. 
export const EmptyProfile = (props) => { 
    const [clicked, setClicked] = useState(false);
    return (
        <div> 
        <div className = "patientProfile " style = {{display:'flex', padding:20, flexDirection:'column', border:'1px solid', alignItems:'center'}}>
                <div className="OHIP" style = {{display:'flex', paddingRight:20 }}>
                <div> <label>OHIP Number: </label></div> <div> <input style ={{marginLeft:30}} type ="text" name ="OHIP"  placeholder = "OHIP Number" onChange = {event=>props.patientProfileChange(event)}/> </div> 
                </div>
                <div className="FirstName" style = {{display:'flex',paddingRight:20}}>
                     <div> <label>First Name: </label> </div>  <div> <input style ={{marginLeft:30}} type ="text" name ="FirstName" placeholder = "First Name"  onChange = {event=>props.patientProfileChange(event)} /> </div> 
                </div>
                <div className="LastName" style = {{display:'flex',paddingRight:20}}>
                <div> <label>Last Name: </label>  </div>   <div> <input style ={{marginLeft:30}} type ="text" name ="LastName" placeholder = "Last Name"  onChange = {event=>props.patientProfileChange(event)} /> </div> 
                </div>
                <div className="PatientSex" style = {{display:'flex',paddingRight:20}}>
                     <div> <label>Sex: </label>  </div>  <div> <input style ={{marginLeft:30}} type ="text" name ="PatientSex" placeholder = "Sex"  onChange = {event=>props.patientProfileChange(event)} /> </div> 
                </div>
                <div className="PatientDOB" style = {{display:'flex',paddingRight:20}}>
                <div> <label>Date of Birth: </label> </div>   <div> <input style ={{marginLeft:30}} type ="text" name ="patientDOB" placeholder = "Date of Birth"  onChange = {event=>props.patientProfileChange(event)} /> </div> 
                </div>
                
                <div className="PatientPhoneNumber" style = {{display:'flex', paddingRight:20 }}>
                <div> <label>Phone Number: </label> </div> <div> <input style ={{marginLeft:30}} type ="text" name ="PatientPhoneNumber" placeholder = "Phone Number"  onChange = {event=>props.patientProfileChange(event)} /></div> 
                </div>
                {/*For now keep as Address --> may need to change i.e. province, postal code */}
                <div className="PatientAddress" style = {{display:'flex',paddingRight:20}}>
                     <div> <label>Address: </label> </div>  <div> <input style ={{marginLeft:30}} type ="text" name ="PatientAddress" placeholder = "Address"  onChange = {event=>props.patientProfileChange(event)} /> </div> 
                </div>
                <div className="PatientEmail" style = {{display:'flex',paddingRight:20}}>
                <div> <label>Email: </label>  </div>   <div> <input style ={{marginLeft:30}} type ="text" name ="PatientEmail" placeholder = "Email"  onChange = {event=>props.patientProfileChange(event)} /> </div> 
                </div>
                <div className="PatientHeight" style = {{display:'flex', paddingRight:20 }}>
                <div> <label>Height: </label>  </div> <div> <input style ={{marginLeft:30}} type ="text" name ="PatientHeight" placeholder = "Height"  onChange = {event=>props.patientProfileChange(event)} /></div> 
                </div>
                <div className="PatientWeight" style = {{display:'flex',paddingRight:20}}>
                     <div> <label>Weight: </label>  </div>  <div> <input style ={{marginLeft:30}} type ="text" name ="PatientWeight" placeholder = "Weight"  onChange = {event=>props.patientProfileChange(event)} /> </div> 
                </div>
                <div className="PatientAllergies" style = {{display:'flex',paddingRight:20}}>
                <div> <label>Allergies: </label>  </div>   <div> <input style ={{marginLeft:30}} type ="text" name ="PatientAllergies" placeholder = "Allergy"  onChange = {event=>props.patientProfileChange(event)} /> </div> 
                </div>
                
                <div className="PatientMedication" style = {{display:'flex', paddingRight:20 }}>
                <div> <label>Medication: </label> </div> <div> <input style ={{marginLeft:30}} type ="text" name ="PatientMedication" placeholder = "Medication" onChange = {event=>props.patientProfileChange(event)} /> </div> 
                </div>
                <div className="PatientExistingConditions" style = {{display:'flex',paddingRight:20}}>
                     <div> <label>Existing Conditions: </label> </div>  <div> <input style ={{marginLeft:30}} type ="text" name ="PatientExistingConditions" placeholder = "Existing Conditions" onChange = {event=>props.patientProfileChange(event)} /> </div> 
                </div>


        </div>   
        
        </div>
        )
}


export default EmptyProfile