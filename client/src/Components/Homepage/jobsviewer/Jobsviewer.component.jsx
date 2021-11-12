import {  Card, Typography } from '@material-ui/core'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { jobsviewerStyle } from './Jobsviewer.style'
import {ELECTRON_BASE_URL_API} from '../../../global'
import {
    GridContextProvider,
    GridDropZone,
    GridItem,
    swap
  } from "react-grid-dnd";
import { client } from '../../../utils/webSocketFunctions'

const useStyles = jobsviewerStyle


function JobsViewer(){

    const classes = useStyles()
    const [jobs, setJobs] = useState([])
    
    useEffect(() => {
        
        client.onmessage = (message) => {
            const dataFromServer = JSON.parse(message.data)
            console.log("get reply! ", dataFromServer)
            setJobs([...jobs, dataFromServer.msg])
        }

        if(jobs.length === 0){
            axios.get(`${ELECTRON_BASE_URL_API}/api/get`)
            .then((res) => {setJobs(res.data)})
            .catch(() => console.log("Can't get jobs..."))
        }
    })

    const onChange = (sourceId, sourceIndex, targetIndex, targetId) => {
        const nextState = swap(jobs, sourceIndex, targetIndex)
        setJobs(nextState)
    }

    return(
        <GridContextProvider onChange={onChange}>
            <GridDropZone id="jobs" boxesPerRow={4} rowHeight={400} style={{flex: 1, height: "auto"}}>
                    {jobs && jobs.map((job, i) => {
                        return (
                        <GridItem key={i}>
                            <Card className={classes.card}>
                                <Typography>
                                    {job.title}
                                </Typography>
                                <Typography>
                                    {job.subtitle}
                                </Typography>
                            </Card>
                        </GridItem>
                        )
                    })}
            </GridDropZone>
        </GridContextProvider>
    )
}

export default JobsViewer