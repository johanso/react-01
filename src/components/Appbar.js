import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
   typography: {
      width: '100%'
   }
}));

const Appbar = () => {

   const classes = useStyles();

   return (
      <AppBar position="static" elevation={0}>
         <Toolbar>
            <Typography className={classes.typography} variant="h6" align="center" >
               Mis Contactos
            </Typography>
         </Toolbar>
      </AppBar>
   );
};

export default Appbar;
