import React from 'react';
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const useStyles = makeStyles((theme) => ({
   root: {
      width: '100%',
      marginBottom: '.8rem'
   },
   avatar: {
      backgroundColor: red[500],
   },
   error: {
      color: red[500],
   },
}));

const CardContact = ({contact, getDelete}) => {

   const classes = useStyles();
   const { name, lastName, phone, email, fulldate} = contact;

   return (
      <Card className={classes.root}>
         <CardHeader
            avatar={
               <Avatar aria-label="Name" className={classes.avatar}>
                  { name.charAt(0).toUpperCase() }
               </Avatar>
            }
            action={
               <IconButton 
                  className={classes.error}
                  onClick={ () => getDelete(fulldate) } 
                  aria-label="delete"
               >
                  <HighlightOffIcon />
               </IconButton>
            }
            title={`${name} ${lastName}`}
            subheader={
               <>
                  <Typography
                     component="div"
                     variant="subtitle2"
                     color="textPrimary"
                  >
                     {phone}
                  </Typography>
                  <Typography
                     component="div"
                     variant="body2"
                  >
                     {email} 
                  </Typography>
               </>
            }
         />
         
      </Card>
   );
}

CardContact.propTypes = {
   contact: PropTypes.object.isRequired,
   getDelete: PropTypes.func.isRequired
}

export default CardContact;