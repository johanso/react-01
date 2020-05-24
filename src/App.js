import React, {useState, useEffect} from "react";
import Appbar from "./components/Appbar"
import { Container, Grid, Box, Typography } from "@material-ui/core";
import Form from "./components/Form";
import CardContact from "./components/CardContact";

function App() {

// Lee si hay items en localStorage y los coloca en el estate de contactos
let contactsLS = JSON.parse(localStorage.getItem('contacts'))
// Si no hay contactos inicia el state con un array vacio
if(!contactsLS) {
   contactsLS = [];
}
// State de contactos
const [contacts, setContacts] = useState(contactsLS);

useEffect(() => {
   // Cada vez que se agrega una cita la manda al localStorage
   if(contactsLS) {
      localStorage.setItem('contacts', JSON.stringify(contacts))
   }
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [contacts])

// Obtiene una cita y envia un nuevo array al state de contactos
const getContact = (contact) => {
   setContacts([
   ...contacts,
   contact
   ])
}

// Elimina una cita por medio del id pasado en la funcion
const getDelete = (id) => {
   const newContacts = contacts.filter( contact => (
      contact.fulldate !== id
   ))
   setContacts(newContacts)
}

return (
   <>
   <Appbar />
   <Container maxWidth="md">
      <Grid container spacing={3}>

         <Grid item md={6} xs={12}>
         <Box mt={3}>
            <Typography variant="h6" gutterBottom >
               Crear Contacto
            </Typography>
            <Form 
               getContact={getContact}
            />
         </Box>
         </Grid>
         <Grid item md={6} xs={12}>
            <Box mt={3} mb={2}>
               <Typography variant="h6" gutterBottom >
                  { contacts.length > 0 ? 'No tienes contactos agregados' : 'Lista de contactos' }
               </Typography>
            </Box>

            {
               contacts.map( contact => (
                  <CardContact 
                     key={contact.fulldate}
                     contact={contact}
                     getDelete={getDelete}
                  />
               ))
            }
         </Grid>

      </Grid>
   </Container>
   </>
);
}

export default App;
