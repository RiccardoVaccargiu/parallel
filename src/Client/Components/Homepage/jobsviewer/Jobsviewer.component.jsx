import { Box } from '@material-ui/core'
import React from 'react'
import { jobsviewerStyle } from './Jobsviewer.style'

const useStyles = jobsviewerStyle


function JobsViewer(){

    const classes = useStyles()

    return(
        <Box className={classes.mainBox}>
            This is the editor
        </Box>
    )
}

export default JobsViewer