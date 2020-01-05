import { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Layout from '../components/Layout'

const boxStyle = {
  padding: '24px 0px'
}

const textFieldStyle = {
  width: '100%'
}

const Register = () => {
  const [userData, setUserData] = useState({ email: '', password: '' })

  async function handleSubmit(event) {
    event.preventDefault()
    /* ... */
  }

  return (
    <Layout maxWidth="sm">
      <Box display="flex" justifyContent="center">
        <Typography variant="h4">
          Register
        </Typography>
      </Box>
      <Box style={boxStyle}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <TextField style={textFieldStyle}
                value={userData.email}
                onChange={e => {
                  setUserData({
                    ...userData,
                    email: e.target.value
                  })
                }}
                variant="outlined" label="Email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField style={textFieldStyle}
                variant="outlined" label="Password" type="password"
                value={userData.password}
                onChange={e => {
                  setUserData({
                    ...userData,
                    password: e.target.value
                  })
                }}
              />
            </Grid>
          </Grid>
        </form>
      </Box>
    </Layout>
  )
}

export default Register
