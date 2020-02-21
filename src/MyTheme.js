import { createMuiTheme } from "@material-ui/core/styles";
import deepPurple from "@material-ui/core/colors/deepPurple";
import indigo from "@material-ui/core/colors/indigo";
import teal from "@material-ui/core/colors/teal";
import blueGrey from "@material-ui/core/colors/blueGrey";
import lime from "@material-ui/core/colors/teal";

// export default createMuiTheme({
//   palette: {
//     primary: teal,
//     secondary: indigo,
//   },
// });

// export default createMuiTheme({
//   palette: {
//     primary: blueGrey,
//     secondary: teal,

//     type: 'dark',
//   },
// });

export default createMuiTheme({
  palette: {
    primary: {
      main: "#3D454C",
      dark: "#29333A",
      light: "#596069",
      contrastText: "#F6F6FF"
    },

    secondary: {
      main: "#59D366",
      dark: "#169B4E",
      contrastText: "#FFFFFF"
    },

    text: {
      primary: "#FFFFFF",
      secondary: "#F6F6FF",
    },

    type: "dark",

    overrides: {
      MuiButton: {
        root: {
          minWidth: "40px",

          // "&$active": {
          //   boxShadow: '0px 0px 0px 6px rgba(181, 181, 192, 0.2)',
          // },
        }
      },
      
    },

    stop: {
      primary: {
        main: "#F9574B",
        dark: "#C2110",
        contrastText: "#FFFFFF"
      }
    }
  }
});
