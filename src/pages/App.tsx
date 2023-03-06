import { ThemeProvider } from '@mui/material/styles'
import theme from '../utils/theme'
import '../App.scss'
import { Login } from './Login'
import { Dashboard } from './dashboard'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="container">
        {/* <Login /> */}
        <Dashboard />
      </div>
    </ThemeProvider>
  )
}

export default App
