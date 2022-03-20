import {useState} from 'react'; 
import Axios from 'axios';


// all functions defined for handling state variables are organized/defined here. 

function HandleComplaints() {
    const [complaintList, setComplaintList] = useState([]); 
    const [showClicked, setShowClicked] = useState(false);
    //object array for added inputs and updated inputs respectively. 
    const [patientComplaint,setPatientComplaint] = useState(
      {
          ComplaintID:0,
          OHIP: '',
          VisitID: '',
          PatientComplaint: '',
          ComplaintEvent: '',
          PatientPainLevel: 0,
          PatientSymptomList: '',
          PatientComments: '',
      }
    );

    //Handlechange events for added and updated inputs respectively. 
    const patientComplaintChange = (event) => {    
          setPatientComplaint({
              ...patientComplaint,
              [event.target.name]:event.target.value
          })
    }

    const complaintListChange = (event) => {
            setComplaintList([...complaintList,
                patientComplaint
    ]); 
    }
    // Functions below connect frontend with backend. 

    
    const addItem = () => {
      Axios.post('http://localhost:4000/complaintList/create',{
        patientComplaint: patientComplaint
        }).then(()=>
        {
          setComplaintList([...complaintList,
                        patientComplaint
          ]); 
        } 
        );
    };

    const getPatientComplaint = () => {
        Axios.get('http://localhost:4000/complaintList/').then((response)=> {

            setComplaintList(response.data); 
            console.log(complaintList)
    /*console.log(response.data.OHIP)   */     });
    }

 /*
    
    const deleteItem = (id)=> {
      Axios.delete(`http://localhost:3001/inventorylist/delete/${id}`).then((response)=> {
        setItemList(itemList.filter(val=>val.id!=id).map(newVal => ({id:newVal.id, item: newVal.item, price: newVal.price, quantity:newVal.quantity})))
              });
    }

    const updateItem =(ohipNum)=> {
      Axios.put('http://localhost:4000/patientList/update',{
          patientProfile: patientProfile,
          ohipNum: ohipNum
            }).then((response)=> {
                setPatientList(patientList.map((val)=>{
                      return val.OHIP === ohipNum? {
                         OHIP: patientProfile.OHIP, 
                         FirstName: patientProfile.FirstName,
                         LastName: patientProfile.LastName, 
                         PatientSex: patientProfile.PatientSex,
                         patientDOB: patientProfile.PatientDOB,
                         PatientPhoneNumber: patientProfile.PatientPhoneNumber,
                         PatientAddress: patientProfile.PatientAddress,
                         PatientEmail: patientProfile.PatientEmail,
                         PatientHeight: patientProfile.PatientHeight,
                         PatientWeight: patientProfile.PatientWeight,
                         PatientAllergies: patientProfile.PatientAllergies,
                         PatientMedication: patientProfile.PatientMedication,
                         PatientExistingConditions: patientProfile.PatientExistingConditions
                        } : val      
                      }))
                  }
               );
      }
      */
 
      
    return {complaintList,getPatientComplaint}
}

export default HandleComplaints
