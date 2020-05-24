import { createMuiTheme } from '@material-ui/core/styles';
import {indigo, blue} from '@material-ui/core/colors';

const theme = createMuiTheme ({
   palette: {
      primary: {
         main: indigo[500]
      },
      secondary: {
         main: blue[500],
         contrastText: '#fff'
      }
   },
})

export default theme;