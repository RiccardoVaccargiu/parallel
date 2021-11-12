import { makeStyles } from "@material-ui/core/styles";

export const jobsviewerStyle = makeStyles((theme) => ({

    mainBox: {
        minHeight: "100vh",
        maxWidth: "80%",
        minWidth: "80%",
        display: "flex",
        flexDirection: "row",
        background: "#999999",
        
        
    },
    
    card: {
        minWidth: "300px",
        height: "400px",
        margin: "15px",
        display: "flex"
    }
}))