import { TextField, Box, Typography, Button } from '@material-ui/core'
import { loginStyle } from './Login.style'
import React from 'react'
import { HashRouter as Router, Link } from 'react-router-dom'

const useStyles = loginStyle

function Login(){

    const classes = useStyles()
    // const [homepage, setHomepage] = useState(false)
    
    // const navigateHomepage = () => {
    //     setHomepage(true)
    // }

    return(
        <Box className={classes.mainBox}>
            <Box className={classes.formBox}>
                <Typography variant="h4">Accedi</Typography>
                <TextField className={classes.input} label="Username" variant="outlined" />
                <TextField className={classes.input} label="Password" variant="outlined" />
                <Router>
                    <Button component={Link} to="/homepage" className={classes.button} variant="contained"><Link to="/homepage" >Accedi</Link></Button>
                </Router>
            </Box>
        </Box>
    )
}

export default Login