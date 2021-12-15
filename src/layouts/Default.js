import { Grid } from '@material-ui/core';
import React from 'react'

function Default({children}) {
  return (
    <Grid container>
      {children}
    </Grid>
  )
}

export default Default
