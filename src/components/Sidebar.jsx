import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Fab from '@mui/material/Fab';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import companyLogo from '../assets/company_logo.png';
import usericon from '../assets/user_icon.png';
import icon_video from '../assets/icon-video.svg'
import icon_call from '../assets/icon-phone.svg'
import icon_chat from '../assets/icon-chat.svg'
import video_sm from '../assets/sm_video.svg'
import video from '../assets/video.svg'
import TextField from '@mui/material/TextField';


const Sidebar = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const StyledFab = styled(Fab)({
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  });
  return(
    <>
      <Box>
        <AppBar position="fixed" color="primary" sx={{ right: 'auto', left: 0 }} id="sidebar1">
          <Toolbar>
            <Box sx={{ flexGrow: 1 }} />
          </Toolbar>
        </AppBar>
        <Container maxWidth="xl" className='main-container' style={{ paddingLeft: '80px' }} >
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={12} md={4}>
              <Item className='box-shadow-none'>
              <img
                src={companyLogo}
                srcSet={companyLogo}
                alt='Company Logo'
                loading="lazy"
                className="c_logo"
              />
              <CardContent className='textLeft'>
                <Typography sx={{ fontSize: '48px', margin: '0px' }} color="#F93439" fontWeight='700' className='boder_bottom_li' >
                  User Name
                </Typography>
                <Typography sx={{ mb: 1.5 , mt: 1.5, fontWeight: '700' }} color="#333333" fontSize='32px'>
                  Title
                </Typography>
                <Typography variant="body2" display={'flex'} justifyContent='space-between' color="#333333" fontSize='24px'>
                  <div>department   -  </div>
                  <div>Department Value</div>
                </Typography><br /><br /><br />
                <Typography sx={{ mb: 0 , mt: 1.5, fontWeight: '700' }} color="#333333" fontSize='36px'>
                  Compay Name
                </Typography>
                <div sx={{ fontWeight: '600' }} color="#333333" fontSize='24px' fontWeight='600'>
                  Address 1
                </div>
                <div sx={{ fontWeight: '600' }} color="#333333" fontSize='24px' fontWeight='600'>
                  Address 1
                </div>
                <div sx={{ fontWeight: '600' }} color="#333333" fontSize='24px' fontWeight='600'>
                  Address 1
                </div>
                <div sx={{ fontWeight: '600' }} color="#333333" fontSize='24px' fontWeight='600'>
                  Maharashtra, 400025 India.
                </div>
              </CardContent>
              </Item>
            </Grid>
            <Grid item xs={12} md={4}>
            <Item className='box-shadow-none'>
              <img
                src={usericon}
                srcSet={usericon}
                alt='Company Logo'
                loading="lazy"
                className="user_logo"
              />
              <CardContent className='textLeft'>
                <CardActions style={{ justifyContent: 'space-around'}}>
                  <img
                    src={usericon}
                    srcSet={icon_chat}
                    alt='Company Logo'
                    loading="lazy"
                    className="icon_logo"
                  />
                  <img
                    src={usericon}
                    srcSet={icon_video}
                    alt='Company Logo'
                    loading="lazy"
                    className="icon_logo"
                  />
                  <img
                    src={usericon}
                    srcSet={icon_call}
                    alt='Company Logo'
                    loading="lazy"
                    className="icon_logo"
                  />
                </CardActions>
                <div style={{ marginTop: '60px' }}>
                  <TextField id="typing" label="Typing..." variant="outlined" autoComplete='false' size='small' className='custom_input' fullWidth />
                </div>
              </CardContent>
              </Item>
            </Grid>
            <Grid item xs={12} md={4}>
            <Card sx={{ maxWidth: 345 }} className='box-shadow-none'>
              <div className='vIcon-group'>
                <CardMedia
                  sx={{ height: 140 }}
                  image={video}
                  title="green iguana"
                />
                <CardMedia
                  sx={{ height: 40, width: 40 }}
                  image={video_sm}
                  title="green iguana"
                  className="v-icon"
                />
              </div>
              <CardContent>
                <Item className='text-custom-secondary custom-border-radius' fontWeight='700'>
                Some text showing offers on the customers business
                </Item>
              </CardContent>
            </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}

export default Sidebar;