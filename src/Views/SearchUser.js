import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import SearchIcon from "@material-ui/icons/Search";
import { useHistory } from "react-router";
import { Grid } from "@material-ui/core";

export default function SearchUser() {
    const useStyles = makeStyles((x) => ({
        inputRoot: {
            backgroundColor: "#FFF",
            padding: "5px",
            borderRadius: "5px"
        }
    }));

    const classes = useStyles();
    const history = useHistory()
    const [value, setValue] = React.useState(null);
    const [inputValue, setInputValue] = React.useState("");
    const [options, setOptions] = React.useState([]);
    

    React.useEffect(() => {
        let active = true;
        if (inputValue === "") {
            setOptions(value ? [value] : []);
            return undefined;
        }
        if (localStorage.getItem('users')) {

            if (active) {
                let newOptions = [];

                if (value) {
                    newOptions = [value];
                }
                newOptions = [...newOptions, ...JSON.parse(localStorage.getItem('users'))];
                setOptions(newOptions);
            }
        }


        return () => {
            active = false;
        };
    }, [value, inputValue ]);



    return (
        <Autocomplete
            style={{ width: "100%" }}
            getOptionLabel={(option) =>
                option.user.username
            }
            options={options}
            autoComplete
            includeInputInList
            filterSelectedOptions
            value={value}
            onChange={(event, newValue) => {

                setOptions(newValue ? [newValue, ...options] : options);
                setValue(newValue);
            }}
            onInputChange={(event, newInputValue) => {
                setInputValue(newInputValue);
            }}
            classes={{
                root: classes.inputRoot,
                input: classes.input,

            }}
            renderInput={(params) => (
                <TextField
                    {...params}
                    placeholder="Search username"
                    // variant="outlined"
                    classes={{
                        input: classes.input,
                        root: classes.inputRoot,
                    }}
                    fullWidth
                    InputProps={{
                        ...params.InputProps,
                        startAdornment: <SearchIcon className={classes.searchIcon} />,
                        disableUnderline: true,
                        endAdornment: true,
                    }}
                />
            )}
            renderOption={(option) => {
                return (
                        <Grid container onClick={()=>history.push(`/user/${option.user.username}`)}>
                            {option.user.username}
                        </Grid>
                );
            }}
        />
    );
}
