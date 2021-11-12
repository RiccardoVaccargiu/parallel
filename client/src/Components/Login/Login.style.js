import { makeStyles } from "@material-ui/core/styles";

export const loginStyle = makeStyles((theme) => ({

    mainBox: {
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
    },

    formBox: {
        display: "flex",
        flexDirection: "column",
        marginTop: "auto",
        marginBottom: "auto",
    },

    input: {
        alignSelf: "center",
        marginTop: "40px",
        width: "300px"
    },
    title: {
        alignSelf: "center",
        marginTop: "40px",
        width: "300px"
    },
    button: {
        width: "300px",
        height: "50px",
        alignSelf: "center",
        marginTop: "50px",
    }

}))