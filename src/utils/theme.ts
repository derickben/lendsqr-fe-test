import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'
const defaultTheme = createTheme({})

// Create a theme instance.
const theme = createTheme({
  shape: {
    borderRadius: 0,
  },
  palette: {
    primary: {
      main: '#213F7D',
      contrastText: '#fff',
      light: 'a9ff9b',
      // contrastText: '#f1f1f1',
    },
    secondary: {
      main: '#39CDCC',
      contrastText: '#fff',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#f1f1f1',
      paper: '#fff',
    },
    text: {
      primary: '#000',
      secondary: '#000',
    },
  },
  typography: {
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  },
  components: {
    MuiListItem: {
      styleOverrides: {
        gutters: {
          paddingLeft: defaultTheme.spacing(3),
          paddingRight: defaultTheme.spacing(3),
        },
        root: {
          '&.Mui-selected': {
            backgroundColor: 'transparent',
            borderLeft: `${defaultTheme.spacing(0.5)} solid #000`,
            paddingLeft: defaultTheme.spacing(2.5),
          },
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {},
      },
    },

    MuiCardHeader: {
      styleOverrides: {
        root: {
          borderBottom: '1px solid #a9a9a9',
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          height: '4.8rem',
          fontSize: '14px',
        },
      },
    },

    MuiTextField: {
      styleOverrides: {
        root: {},
      },
    },

    MuiInputBase: {
      styleOverrides: {
        input: {
          fontSize: '14px',
          height: '9px',
          color: '#545F7D',
        },
      },
    },

    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#fff',
          boxShadow: 'none',
        },
      },
    },
  },
})

export default theme
