import { makeStyles } from "@material-ui/core/styles";

export const jobeditorStyle = makeStyles((theme) => ({

    mainBox: {
        minHeight: "100vh",
        minWidth: "500px",
        display: "flex",
        flexDirection: "column",
    },
    titleInput: {
        marginTop: "24px"
    },
    descriptionInput: {
        marginTop: "24px"
    },
    buttons: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: "48px"
    },
    cancelButton:{
        color: '#f44336',
        borderColor: '#f44336',
        fontWeight: "bold"
    },
    saveButton:{
        background: '#66bb6a',
        fontWeight: "bold",
        color: "white",
        "&:hover": {
            background: '#2e9933',
        }
        
    }
}))