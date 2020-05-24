import { useState, useEffect } from 'react'

const useValidator = (submit, validateInputs) => {

   const [ values, setValues] = useState({
      name: '',
      lastName: '',
      email: '',
      phone: ''
   });
   const [errors, setErrors] = useState({});
   const [isSubmitting, setIsSubmitting] = useState(false)

   const handleChange = (e) => {
      const {name, value} = e.target;
      setValues({
         ...values,
         [name]: value
      })
   }

   const handleSubmit = e => {
      e.preventDefault();
      setErrors(validateInputs(values))
      setIsSubmitting(true)
   }

   useEffect(() => {
      if( Object.keys(errors).length === 0 && isSubmitting ) {
         submit()
         setValues({
            name: '',
            lastName: '',
            email: '',
            phone: ''
         })
      }
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [errors])

   return{
      handleChange,
      handleSubmit,
      values,
      errors
   }
}

export default useValidator;