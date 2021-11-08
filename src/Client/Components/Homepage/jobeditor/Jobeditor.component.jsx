import { Box, Button, TextField } from '@material-ui/core'
import React, {  useState } from 'react'
import { jobeditorStyle } from './Jobeditor.style'
import {  sendJob } from '../../../../utils/webSocketFunctions';

const useStyles = jobeditorStyle

function Jobeditor(){

    const classes = useStyles()
    const [job, setJob] = useState("")
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

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