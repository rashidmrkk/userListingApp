import React from "react";

import { Card, Grid, makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
    card: {
        padding: "20px"
    },

}));
const LoginLayout = ({ children }) => {
    const classes = useStyles()
    return (
        <Grid container style={{ height: "100vh" }} justify="center" alignItems="center">
            <Card className={classes.card}>
                {children}
            </Card>
        </Grid>
    );
}


export default LoginLayout;
