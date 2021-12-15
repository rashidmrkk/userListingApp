import { Avatar, Button, Card, Grid, makeStyles, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import SearchUser from './SearchUser';
const useStyles = makeStyles(() => ({
    table: {
        width: "100%",
        padding: "20px",
        borderRadius: "5px"
    },
    root: {
        padding: "30px"
    },
    card:{
        width:"100%",
        borderRadius:"10px"
    }

}))
function Dashboard() {
    const classes = useStyles();
    const history = useHistory()
    const [users, setUsers] = useState([])
    useEffect(() => {
        const data = localStorage.getItem('users')
        console.log(data);
        setUsers(JSON.parse(data))
    }, [])
    return (
        <Grid container className={classes.root} >
            <Grid container spacing={2}>
                <Grid item container>
                <Card className={classes.card} >
                <SearchUser />
            </Card>
                </Grid>
                <Grid item container justifyContent="flex-end">
                    <Button variant="contained" color="primary" onClick={()=>history.push('/adduser')} >
                        Add new user
                    </Button>
                </Grid>
                <Grid item container>
                <Card className={classes.card}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">User</TableCell>
                            <TableCell align="left">Phone</TableCell>
                            <TableCell align="left">Email</TableCell>
                            <TableCell align="right">Action</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            users.map(user => <TableRow key={user.user.username}>
                                <TableCell component="th" scope="row">
                                    <Grid container spacing={2}>
                                        <Grid item lg={2} container>
                                            {user.user.picture &&
                                            <Avatar src={user.user.picture.thumbnail} alt={user.user.username} />
                                            }
                                            </Grid>
                                        <Grid container item lg={10}>
                                            {user.user.name.first}
                                        </Grid>
                                    </Grid>
                                </TableCell>
                                <TableCell component="th" scope="row">

                                    {user.user.phone}
                                </TableCell>
                                <TableCell component="th" scope="row">

                                    {user.user.email}
                                </TableCell>
                                <TableCell component="th" scope="row">

                                    <Button variant="contained" color="primary" onClick ={()=>history.push(`/user/${user.user.username}`)} >
                                        View
                                    </Button>
                                </TableCell>
                            </TableRow>
                            )
                        }

                    </TableBody>
                </Table>
            </Card> 
                </Grid>
            </Grid>
            
            
            
        </Grid>

    )
}

export default Dashboard
