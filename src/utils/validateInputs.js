export default function validate(values){

   let errors = {};
   
   if( !values.name ) {
      errors.name = "El nombre no puede estar vacío"
   }

   if( !values.lastName ) {
      errors.lastName = "El apellido no puede estar vacío"
   }

   if( !values.phone ) {
      errors.phone = "El teléfono no puede estar vacío"
   } else if (!/^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/.test(values.phone)) {
      errors.phone = "El # celular debe tener 10 numeros";
   }
   
   if (!values.email) {
      errors.email = "El email es requerido";
   } else if (!/\S+@\S+\.\S+/.test(values.email)) {
     errors.email = "El email es invalido";
   }

   return errors;
}
