import { Button, Card, CircularProgress, Grid, makeStyles, TextField, Typography } from '@material-ui/core';
import axios from 'axios'
import { connect } from 'react-redux'
import { signin } from '../redux/action/signinAction'

import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
const useStyles = makeStyles(() => ({
    card: {
        width: "100%",
        padding: "20px",
        borderRadius: "5px"
    },
    root: {
        height: "100vh"
    },
    // inputRoot: {
    //     backgroundColor: "#F5F6F8",
    //     padding: "10px",
    //     borderRadius: "5px"
    // },
    text: {
        fontSize: "18px",
        fontWeight: "bold"

    },
    input: {
        backgroundColor: "#F5F6F8",
        padding: "10px",
        borderRadius: "5px"
    }
}))
function Login(props) {
    const classes = useStyles();
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState({})
    const history = useHistory()
    useEffect(() => {
        if (!localStorage.getItem('users')) {
            console.log("if");
            axios.get('https://randomuser.me/api/0.8/?results=20')
                .then(res => {
                    console.log(res);
                    localStorage.setItem('users', JSON.stringify(res.data.results))
                    setUsers(res.data.results)
                })
                .catch(err => {
                    console.log(err);
                })
        }
        else {
            console.log("else");
            const data = localStorage.getItem('users')
            console.log(data);
            setUsers(JSON.parse(data))
        }
    }, [])


    const handlelogin = () => {
        setLoading(true)
        setErrors({})
        const data = users.filter(user => user.user.username === username)
        if (data.length === 0) {
            setErrors({ username: "Username doesn't match !" })
            setLoading(false)
        }
        else {
            if (data[0].user.password === password) {
                setLoading(false)
                props.signin(data[0].user)
                console.log("success");
                history.replace('/dashboard')
            }
            else {
                setErrors({ password: "Password doesn't match!" })
                setLoading(false)
            }
            // console.log(data[0].user.password);
        }
        // console.log(data);
    }
    return (
        <Grid container justifyContent="center" alignItems="center" className={classes.root} >
            <Grid item container lg={6} md={6} sm={8} xs={11} >
                <Card className={classes.card} >
                    <Grid container spacing={2}>
                        <Grid item container justifyContent="center">
                            <Typography className={classes.text}>
                                Login
                            </Typography>
                        </Grid>
                        <Grid item container>
                            <TextField
                                fullWidth
                                InputProps={{
                                    disableUnderline: true,
                                    classes: {
                                        input: classes.input
                                    }
                                }}
                                classes={{
                                    // root: classes.inputRoot
                                }}
                                placeholder="Username"
                                value={username}
                                error={errors.username}
                                helperText={errors.username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </Grid>
                        <Grid item container>

                            <TextField
                                fullWidth
                                InputProps={{
                                    disableUnderline: true,
                                    classes: {
                                        input: classes.input
                                    }

                                }}
                                classes={{
                                    // root: classes.inputRoot
                                }}
                                type="password"
                                error={errors.password}
                                helperText={errors.password}
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Grid>
                        <Grid item container justifyContent="center">
                            <Button variant="contained" color="primary" onClick={handlelogin} disabled={loading}>
                                Login {loading && <CircularProgress />}
                            </Button>
                        </Grid>
                    </Grid>
                </Card>
            </Grid>
        </Grid>
    )
}

const mapStoreToProps = state => ({
    user: state.signin.user
})
const mapDispatchToProps = {
    signin
}
export default connect(mapStoreToProps, mapDispatchToProps)(Login);

// export default (Login);


