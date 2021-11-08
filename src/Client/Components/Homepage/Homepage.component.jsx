import React  from 'react'
import { Box } from '@material-ui/core'
import Jobeditor from './jobeditor/Jobeditor.component';
import JobsViewer from './jobsviewer/Jobsviewer.component'
import { homepageStyle } from './Homepage.style';

const useStyles = homepageStyle

function Homepage() {

    const classes = useStyles()

    return (
        <Box className={classes.mainBox}>
            <Jobeditor />
            <JobsViewer />
        </Box>
    )
}

export default Homepage