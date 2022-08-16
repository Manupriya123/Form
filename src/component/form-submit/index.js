import { Typography,Box ,Paper} from "@mui/material";
import { useState } from "react";
import styles from "./formstyl.css"

export default function Formsubmitsection(){

    const [formdata,setformdata]=useState(JSON.parse(window.localStorage.getItem("address")))

    return(
        <>
        <Box sx={{minHeight:'70vh'}}>

        <Paper sx={{minHeight:"20vh",width:"50%",margin:"3em auto"}}>

            
             <Typography sx={{color:"green",textAlign:"center",fontWeight:'600',mt:1}}>Congrats Your form has submited successfully.</Typography>

             <Box className={styles.form_data_show} sx={{p:1,ml:2}}>
                <Typography sx={{fontWeight:"600"}}>Your Data is </Typography>
                 
                 <Typography><span className={styles.heading_styles}>Name :</span> {formdata?.name} </Typography>
                 
                <Typography><span className={styles.heading_styles}>Email :</span> {formdata?.email}</Typography>
                
                <Typography><span className={styles.heading_styles}>Phone :</span>{formdata?.phone}</Typography>
            
                <Typography><span className={styles.heading_styles}>Adress :</span>{formdata?.address}</Typography>
                
                <Typography><span className={styles.heading_styles}>Pin :</span>{formdata?.pin}</Typography>
                
                <Typography><span className={styles.heading_styles}>city :</span>{formdata?.city}</Typography>
                
                <Typography><span className={styles.heading_styles}>State :</span>{formdata?.state}</Typography>
            
             </Box>

        </Paper>
        



        </Box>

        </>
    )
}