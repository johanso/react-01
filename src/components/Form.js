import React from 'react'
import PropTypes from 'prop-types'
import { TextField, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import useValidator from "../hooks/useValidator"
import validateInputs from "../utils/validateInputs"

const useStyles = makeStyles((theme) => ({
   root: {
      marginTop: theme.spacing(2),
   },
   input: {
      marginBottom: '1rem'
   }
}));

const Form = ({getContact}) => {

   const { handleChange, handleSubmit, values, errors } = useValidator(submit, validateInputs);
   const classes = useStyles();

   function submit() {
      values.fulldate = new Date().getTime()
      getContact(values)
   }

   return (
      <form
         onSubmit={handleSubmit} 
         className={classes.root} 
         noValidate 
         autoComplete="off">

         <TextField 
            className={classes.input} 
            label="Nombre" 
            variant="outlined" 
            fullWidth 
            name="name"
            value={values.name}
            onChange={ handleChange }
            error={!errors.name ? false : true}
            helperText={errors.name}
         />
         
         <TextField 
            className={classes.input} 
            label="Apellido" 
            variant="outlined" 
            fullWidth 
            name="lastName"
            value={values.lastName}
            error={!errors.lastName ? false : true}
            onChange={ handleChange }
            helperText={errors.lastName}
         />

         <TextField
            label="Numero Celular"
            variant="outlined"
            type="phone"
            fullWidth 
            name="phone"
            value={values.phone}
            className={classes.input} 
            onChange={ handleChange }
            error={!errors.phone ? false : true}
            helperText={errors.phone}
         />

         <TextField 
            className={classes.input} 
            label="Email" 
            variant="outlined" 
            fullWidth 
            name="email"
            value={values.email}
            onChange={ handleChange }
            error={!errors.email ? false : true}
            helperText={errors.email}
         />

         <Button 
            type="submit"
            variant="contained" 
            color="secondary" 
            size="large" 
            fullWidth>
            Guardar contacto
         </Button>
      </form>
   )
}

Form.propTypes = {
   getContact: PropTypes.func.isRequired
}

export default Form
