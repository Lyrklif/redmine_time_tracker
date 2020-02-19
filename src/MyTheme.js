import { createMuiTheme } from '@material-ui/core/styles';
import deepPurple from '@material-ui/core/colors/deepPurple';
import indigo from '@material-ui/core/colors/indigo';
import teal from '@material-ui/core/colors/teal';
import blueGrey from '@material-ui/core/colors/blueGrey';


// export default createMuiTheme({
//   palette: {
//     primary: teal,
//     secondary: indigo,
//   },
// });


export default createMuiTheme({
  palette: {
    primary: blueGrey,
    secondary: teal,

    type: 'dark',
  },
});