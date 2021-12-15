import { Avatar, Button, Card, Divider, Grid, makeStyles, MenuItem, Select, TextField } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { addUser } from '../redux/action/userActions'
const useStyles = makeStyles(() => ({

    root: {
        padding: "30px",
    },
    avatar: {
        width: "200px",
        height: "200px",
        borderRadius: "10px"
    },
    head: {
        fontWeight: "bold"
    },
    card: {
        padding: "10px",
        width: "100%",
        borderRadius: "10px"
    },
    divider: {
        width: "100%",
        height: "2px"
    },
    mainHead: {
        fontSize: "18px",
        fontWeight: "bold"
    },
    input: {
        backgroundColor: "#F5F6F8",
        padding: "10px",
        borderRadius: "5px"
    }

}))
function AddNewUser(props) {
    const [UserName, setUserName] = useState("")
    const [Gender, setGender] = useState("Male")
    const [errors, setErrors] = useState({})

    const [Password, setPassword] = useState("")
    const [Email, setEmail] = useState("")
    const [Title, setTitle] = useState("Mr")
    const [FirstName, setFirstName] = useState("")
    const [LastName, setLastName] = useState("")
    const [Dob, setDob] = useState("")
    const [Phone, setPhone] = useState("")
    const classes = useStyles()
    const validate = () =>{
        if(!UserName){
            setErrors({username:"Username is missing"})
        }
        if(!Password){
            setErrors({password:"Password is missing"})
        }
        if(!Email){
            setErrors({email:"Email is missing"})
        }
        if(!FirstName){
            setErrors({firstName:"FirstName is missing"})
        }
        if(!Dob){
            setErrors({dob:"Dob is missing"})
        }
        if(!Phone){
            setErrors({phone:"Phone is missing"})
        }
        return errors;
    }
    const handleSubmit=()=>{
      const errors =  validate()
        if(!errors){

        }
        else{
            console.log("yyyyyy");
            props.addUser({
                user:{
                    email:Email,
                    name:{
                        title:Title,
                        first:FirstName,
                        last:LastName
                    },
                    username:UserName,
                    phone:Phone,
                    gender:Gender,
                    password:Password,
                    dob:Dob
                }
            })
        }
    }
    return (
        <Grid container className={classes.root}>
            <Card className={classes.card}>

                <Grid container spacing={2} >
                    <Grid item container justifyContent="center" className={classes.mainHead}>
                        Add New User
                    </Grid>
                    <Grid item container >
                        <Divider className={classes.divider} />
                    </Grid>
                    <Grid item container spacing={2} >
                        <Grid item lg={4} container className={classes.head}>
                            Name
                        </Grid>
                        <Grid item lg={8} container>
                            <Grid container>
                                <Grid container spacing={2}>
                                    <Grid item lg={1} container>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={Title}
                                            onChange={(e) => setTitle(e.target.value)}
                                        >
                                            <MenuItem value={"Mr"}>Mr</MenuItem>
                                            <MenuItem value={"Mrs"}>Mrs</MenuItem>
                                        </Select>
                                    </Grid>
                                    <Grid item lg={6} container>
                                        <TextField
                                            fullWidth
                                            InputProps={{
                                                disableUnderline: true,
                                                classes: {
                                                    input: classes.input
                                                }
                                            }}

                                            placeholder="FirstName"
                                            value={FirstName}
                                            error={errors.firstName}
                                            helperText={errors.firstName}
                                            onChange={(e) => setFirstName(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item lg={5} container>
                                        <TextField
                                            fullWidth
                                            InputProps={{
                                                disableUnderline: true,
                                                classes: {
                                                    input: classes.input
                                                }
                                            }}

                                            placeholder="LastName"
                                            value={LastName}
                                            error={errors.lastName}
                                            helperText={errors.lastName}
                                            onChange={(e) => setLastName(e.target.value)}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>

                        </Grid>
                        <Grid item lg={4} container className={classes.head}>
                            Gender
                        </Grid>
                        <Grid item lg={8} container>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={Gender}
                                onChange={(e) => setGender(e.target.value)}
                            >
                                <MenuItem value={"Male"}>Male</MenuItem>
                                <MenuItem value={"Female"}>Female</MenuItem>
                                <MenuItem value={"Transgender"}>Transgender</MenuItem>
                            </Select>
                        </Grid>
                        <Grid item lg={4} container className={classes.head}>
                            Username
                        </Grid>
                        <Grid item lg={8} container>
                            <TextField
                                fullWidth
                                InputProps={{
                                    disableUnderline: true,
                                    classes: {
                                        input: classes.input
                                    }
                                }}

                                placeholder="Username"
                                value={UserName}
                                error={errors.username}
                                helperText={errors.username}
                                onChange={(e) => setUserName(e.target.value)}
                            />
                        </Grid>
                        <Grid item lg={4} container className={classes.head}>
                            Password
                        </Grid>
                        <Grid item lg={8} container>
                            <TextField
                                fullWidth
                                InputProps={{
                                    disableUnderline: true,
                                    classes: {
                                        input: classes.input
                                    }
                                }}

                                placeholder="Password"
                                value={Password}
                                error={errors.password}
                                helperText={errors.password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Grid>
                        <Grid item lg={4} container className={classes.head}>
                            Email
                        </Grid>
                        <Grid item lg={8} container>
                            <TextField
                                fullWidth
                                InputProps={{
                                    disableUnderline: true,
                                    classes: {
                                        input: classes.input
                                    }
                                }}

                                placeholder="Email"
                                value={Email}
                                error={errors.email}
                                helperText={errors.email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Grid>
                        <Grid item lg={4} container className={classes.head}>
                            Phone
                        </Grid>
                        <Grid item lg={8} container>
                            <TextField
                                fullWidth
                                InputProps={{
                                    disableUnderline: true,
                                    classes: {
                                        input: classes.input
                                    }
                                }}

                                placeholder="phone"
                                value={Phone}
                                error={errors.phone}
                                helperText={errors.phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </Grid>
                        <Grid item lg={4} container className={classes.head}>
                            Dob
                        </Grid>
                        <Grid item lg={8} container>
                            <TextField
                                type="date"
                                fullWidth
                                InputProps={{
                                    disableUnderline: true,
                                    classes: {
                                        input: classes.input
                                    }
                                }}

                                placeholder="Dob"
                                value={Dob}
                                error={errors.dob}
                                helperText={errors.dob}
                                onChange={(e) => setDob(e.target.value)}
                            />
                        </Grid>
                        <Grid item  container>
                                <Button variant="contained" color="primary" onClick={handleSubmit}>
                                    Save
                                </Button>
                            </Grid>
                    </Grid>

                </Grid>

            </Card>
        </Grid>
    )
}
const mapStoreToProps = state => ({
    // user: state.signin.user
})
const mapDispatchToProps = {
    addUser
}
export default connect(mapStoreToProps, mapDispatchToProps)(AddNewUser);
