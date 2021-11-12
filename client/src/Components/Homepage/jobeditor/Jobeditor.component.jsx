import { Box, Button, TextField } from '@material-ui/core'
import React, {  useState } from 'react'
import axios from 'axios';
import { jobeditorStyle } from './Jobeditor.style'
import {  client, sendJob, sendJob2 } from '../../../utils/webSocketFunctions';
import {ELECTRON_BASE_URL_API} from '../../../global'

const useStyles = jobeditorStyle

function Jobeditor(){

    const classes = useStyles()
    const [job, setJob] = useState("")
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [jobs, setJobs] = useState([])

    const catchTitleInput = (e) => {
        setTitle(e.target.value)
    }

    const catchDescriptionInput = (e) => {
        setDescription(e.target.value)
    }

    const saveJob = () => {
        setJob({
            title,
            description,
        })
        sendJob("job", job)
        
        axios.post(`${ELECTRON_BASE_URL_API}/api/create`, {title, description}).then(() => {console.log('job added!') })
    }
    

    return(
        <Box className={classes.mainBox}>
            This is the editor
            <TextField className={classes.titleInput} label="Titolo" variant="filled" onChange={catchTitleInput} />
            <TextField className={classes.descriptionInput} label="Descrizione" multiline maxRows={10} variant="filled" onChange={catchDescriptionInput} />
            <Box className={classes.buttons}>
                <Button className={classes.cancelButton} variant="outlined" size="large">Elimina</Button>
                <Button className={classes.saveButton} variant="contained" size="large" onClick={() => saveJob()}>Salva</Button>
            </Box>
        </Box>
        
    )
}

export default Jobeditor