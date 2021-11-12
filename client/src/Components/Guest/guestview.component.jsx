
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ELECTRON_BASE_URL_API } from '../../global'
import { client } from '../../utils/webSocketFunctions'


function GuestView(){

    
   const [jobsReceivedFromSocket, setJobsReceivedFromSocket] = useState([])

   useEffect(() => {

    if(jobsReceivedFromSocket.length === 0){
        axios.get(`${ELECTRON_BASE_URL_API}/api/get`)
        .then((res) => {setJobsReceivedFromSocket(res.data)})
        .catch(() => console.log("Can't get jobs..."))
    }

        client.onmessage = (message) => {
            const dataFromServer = JSON.parse(message.data)
            console.log("get reply! ", dataFromServer)
            setJobsReceivedFromSocket([...jobsReceivedFromSocket, dataFromServer.msg])
        }
    
    }, [jobsReceivedFromSocket])

    return(
        <div>
        {jobsReceivedFromSocket && jobsReceivedFromSocket.map((job, i) => {
            return <div key={i}>{job.title}</div>
        })}</div>
    )
}

export default GuestView