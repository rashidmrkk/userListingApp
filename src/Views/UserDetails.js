import { Avatar, Card, Divider, Grid, makeStyles } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
const useStyles = makeStyles(() => ({
    
    root: {
        padding: "30px",
    },
    avatar:{
        width:"200px",
        height:"200px",
        borderRadius:"10px"
    },
    head:{
        fontWeight:"bold"
    },
    card:{
        padding:"10px",
        width:"100%",
        borderRadius:"10px"
    },
    divider:{
        width:"100%",
        height:"2px"
    },
    mainHead:{
        fontSize:"18px",
        fontWeight:"bold"
    }

}))
function UserDetails(props) {
    const [user, setUser] = useState({})
    const classes = useStyles()
    useEffect(() => {
        const users = JSON.parse(localStorage.getItem('users'))
        const data = users.filter(user => user.user.username === props.match.params.username)
        if (data.length > 0) {
            setUser(data[0].user)
            console.log(data[0].user);
        }
    }, [props.match.params.username])
    return (
        <Grid container className={classes.root}>
            <Card className={classes.card}>
            {
                user ?
                    <Grid container spacing={2} >
                        <Grid item container justifyContent="center" className={classes.mainHead}>
                            User Details
                        </Grid>
                        <Grid item container >
                            <Divider className={classes.divider} />
                        </Grid>
                        <Grid item container lg={6}>
                        <Grid item lg={4} container className={classes.head}>
                            Username
                        </Grid>
                        <Grid item lg={8} container>
                            {user.username}
                        </Grid>
                        <Grid item lg={4} container className={classes.head}>
                            Gender
                        </Grid>
                        <Grid item lg={8} container>
                            {user.gender}
                        </Grid>
                        <Grid item lg={4} container className={classes.head}>
                            Email
                        </Grid>
                        <Grid item lg={8} container>
                            {user.email}
                        </Grid>
                        <Grid item lg={4} container className={classes.head}>
                            Phone
                        </Grid>
                        <Grid item lg={8} container>
                            {user.phone}
                        </Grid>
                        <Grid item lg={4} container className={classes.head}>
                            Cell
                        </Grid>
                        <Grid item lg={8} container>
                            {user.cell}
                        </Grid>
                        </Grid>
                        <Grid item lg={6} container justifyContent="center">
                            <Avatar src={user.picture && user.picture.large} variant="square" className={classes.avatar} />
                        </Grid>
                    </Grid>
                    : <>No user Found </>
            }
            </Card>
        </Grid>
    )
}

export default UserDetails
