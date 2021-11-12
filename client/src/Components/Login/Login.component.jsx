import { TextField, Box, Typography, Button } from '@material-ui/core'
import { loginStyle } from './Login.style'
import React from 'react'
import { useHistory } from 'react-router-dom'

const useStyles = loginStyle

function Login(){

    const classes = useStyles()
    const history = useHistory()
    // const [homepage, setHomepage] = useState(false)
    
     const navigateHomepage = () => {
         history.push('/homepage')
     }

     const navigateGuest = () => {
        history.push('/guest')
    }

    return(
        <Box className={classes.mainBox}>
            <Box className={classes.formBox}>
                <Typography className={classes.title} variant="h4">Accedi</Typography>
                <TextField className={classes.input} label="Username" variant="outlined" />
                <TextField className={classes.input} label="Password" variant="outlined" />
                <Button onClick={navigateHomepage} className={classes.button} variant="contained">Accedi</Button>
                
                <Button onClick={navigateGuest} className={classes.button} variant="contained">Guest</Button>
            </Box>
        </Box>
    )
}

export default Login