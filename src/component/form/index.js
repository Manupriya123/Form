import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import styles from "./form.style.css"
import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border:"0px",
  boxShadow: 24,
  p: 4,
};

export default function Formmaking(props) {
  const [open, setOpen] = React.useState(true);

 const [addressdata,setaddressdata]=React.useState({
   name:"",
   email:"",
   phone:"",
   address:"",
   pin:"",
   city:"",
   state:"",
   error:{
    type:"",
    data:""
   }
 })

 const handleClose = () => {
  setOpen(false)
  props.showadd()
};


 const Addresschange=(event)=>{
     setaddressdata({
      ...addressdata,
      [event.target.name]:event.target.value
     })
 }
 const [loading,setloading]=React.useState(false)
//  const dispatch = useDispatch()

 const submitaddress=()=>{
    //  console.log(addressdata)
     setloading(true)
     if(!addressdata.name){
        setaddressdata({
          ...addressdata,
          error:{
           type:"name",
           data:"Name is required"
          }
        })
     setloading(false)
     }else if(!addressdata.email){
      setaddressdata({
        ...addressdata,
        error:{
          type:"email",
          data:"Email is required"
         }
      })
     setloading(false)

     }else if(!addressdata.email.includes("@") || !addressdata.email.includes(".")){
      setaddressdata({
        ...addressdata,
        error:{
          type:"email",
          data:"Email is not valid"
         }
      })
     setloading(false)

     }else if(!addressdata.phone){
      setaddressdata({
        ...addressdata,
        error:{
          type:"phone",
          data:"Phone is required"
         }
      })
     }else if(addressdata.phone.length!=10 ){
      setaddressdata({
        ...addressdata,
        error:{
          type:"phone",
          data:"Phone is not valid"
         }
      })
     setloading(false)

     }else if(!addressdata.address){
      setaddressdata({
        ...addressdata,
        error:{
          type:"address",
          data:"Address is required"
         }
      })
     setloading(false)

     }else if(!addressdata.pin){
      setaddressdata({
        ...addressdata,
        error:{
          type:"pin",
          data:"Pin is required"
         }
      })
     setloading(false)

     }else if(addressdata.pin.length!=6){
      setaddressdata({
        ...addressdata,
        error:{
          type:"pin",
          data:"Pin is not valid"
         }
      })
     setloading(false)

     }else if(!addressdata.city){
      setaddressdata({
        ...addressdata,
        error:{
          type:"city",
          data:"City is required"
         }
      })
     setloading(false)

     }else if(!addressdata.state){
      setaddressdata({
        ...addressdata,
        error:{
          type:"state",
          data:"State is required"
         }
      })
     setloading(false)

     }else{
   
      setloading(false)
      setOpen(false)
      
      console.log(addressdata)
      window.localStorage.setItem("address",JSON.stringify(addressdata))
      window.location.href="/form-submit"

 

     }

 }

//  alert("calling")
  return (
    <div>
     
        <Box sx={style} className={styles.addres_box}>

          <Typography onClick={handleClose} className={styles.closeicon}>
                <p className={styles.closeicon_inner}>
                <CloseIcon />
                </p>
            </Typography>

              <Typography sx={{fontWeight:"600",textAlign:"center",mb:1}}>
               New User
                </Typography>
                
                {addressdata.error.type=="server error" && 
                <Typography sx={{fontWeight:"600",color:"red",textAlign:"center",mb:1}}>
                 {addressdata.error.data}
                </Typography>
                }
              
              <form onSubmit={submitaddress}>
                <TextField 
                label="Enter Your Name"
                variant="outlined"
                sx={{width:"100%",mb:1}}
                name="name"
                onChange={Addresschange}
                error={addressdata.error.type=="name"?true:false}
                helperText={addressdata.error.type=="name"?addressdata.error.data:""}
                 />

                <TextField 
                label="Enter Your Email"
                variant="outlined"
                sx={{width:"100%",mb:1}}
                name="email"
                onChange={Addresschange}
                error={addressdata.error.type=="email"?true:false}
                helperText={addressdata.error.type=="email"?addressdata.error.data:""}
                 />

              <TextField 
                label="Enter Your Phone"
                variant="outlined"
                sx={{width:"100%",mb:1}}
                name="phone"
                type="number"
                onChange={Addresschange}
                error={addressdata.error.type=="phone"?true:false}
                helperText={addressdata.error.type=="phone"?addressdata.error.data:""}
                
                 />

              <TextField 
                label="Enter Your address"
                variant="outlined"
                sx={{width:"100%",mb:1}}
                name="address"
                onChange={Addresschange}
                error={addressdata.error.type=="address"?true:false}
                helperText={addressdata.error.type=="address"?addressdata.error.data:""}
                 />

              <TextField 
                label="Enter Your pin"
                variant="outlined"
                type="number"
                sx={{width:"100%",mb:1}}
                name="pin"
                onChange={Addresschange}
                error={addressdata.error.type=="pin"?true:false}
                helperText={addressdata.error.type=="pin"?addressdata.error.data:""}
                 />


              <TextField 
                label="Enter Your city"
                variant="outlined"
                sx={{width:"100%",mb:1}}
                name="city"
                onChange={Addresschange}
                error={addressdata.error.type=="city"?true:false}
                helperText={addressdata.error.type=="city"?addressdata.error.data:""}

                 />

               <TextField 
                label="Enter Your State"
                variant="outlined"
                sx={{width:"100%",mb:1}}
                name="state"
                onChange={Addresschange}
                error={addressdata.error.type=="state"?true:false}
                helperText={addressdata.error.type=="state"?addressdata.error.data:""}
                 />



              <Button onClick={submitaddress} className={styles.add_submit_btn} variant='contained' color="primary"> 
                {loading?"Loading...":"Submit"}
              </Button>
        

              </form>
          
        </Box>

    </div>
  );
}