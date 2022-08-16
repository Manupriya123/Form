import  React,{useState} from 'react'
// import { Form, Button } from 'semantic-ui-react';
import { useForm } from "react-hook-form";
import Formmaking from './component/form';
import Formsubmitsection from './component/form-submit';

import styles from './App.css'
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";

const App = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  }
return (
  <div>

<BrowserRouter>
    <Routes>
    <Route path='/' element={<Formmaking />} />
          <Route path='/form-submit' element={<Formsubmitsection />} />
    </Routes>
  </BrowserRouter>

  </div>
)
}
export default App

