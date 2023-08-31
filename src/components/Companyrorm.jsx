import React, { useState, useEffect } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import HolidayVillageIcon from '@mui/icons-material/HolidayVillage';
import PinDropIcon from '@mui/icons-material/PinDrop';
import AssessmentIcon from '@mui/icons-material/Assessment';
import GroupIcon from '@mui/icons-material/Group';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';

import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import bggray from '../assets/bggray.png';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';

import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addCompany } from '../redux/slice/company'; 

const drawerWidth = 160;
const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#FCB724',
    color: '#FCB724',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      border: '1px solid currentColor',
      content: '""',
    },
  }
}));
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Companyrorm = () => {
  // const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isToggle, setIstoggle] = useState(false);

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [age, setAge] = React.useState('');
  const [ isTogglebtn, setIstoggleButton] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  const toggleButtton = () => {
    setIstoggleButton(!isTogglebtn)
  }
  const gotoPage = () => {
    // location.go('/hello')
    navigate('/dashboard')
  }

  const [compayData, setCompanyData] = useState({
    companyName: '',
    companyBPP: '',
    companyDepartment: [],
    companyContact: ''
  })

  const handleChange = (event) => {
    
    let {companyName, companyBPP, companyDepartment, companyContact } = compayData;
    if(event.target.id === 'companyName'){
      companyName = event.target.value
    } else if (event.target.id === 'companyBPP') {
      companyBPP = event.target.value
    } else if (event.target.name === 'companyDepartment') {
      // if (event.target.value) {
        companyDepartment.push(event.target.value)
      // }
    } else if (event.target.name === 'companyContact') {
      companyContact = event.target.value
    }
    setCompanyData({
      companyName,
      companyBPP,
      companyDepartment,
      companyContact
    })
  };  

  const submitCompanyData = () => {
    console.log(compayData)
    dispatch(addCompany(compayData));
  }

  return(
    <>
      <Box sx={{ display: 'flex' }}>
      
      <Drawer variant="permanent" open={open}>
        <List>
          <ListItem disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
              onClick={gotoPage}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <FormatListBulletedIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <CallIcon />
              </ListItemIcon>
              <ListItemText primary="Voice" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <EmailIcon />
              </ListItemIcon>
              <ListItemText primary="Mail" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <HolidayVillageIcon />
              </ListItemIcon>
              <ListItemText primary="Library" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <PinDropIcon />
              </ListItemIcon>
              <ListItemText primary="Location" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <AssessmentIcon />
              </ListItemIcon>
              <ListItemText primary="Report" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <GroupIcon />
              </ListItemIcon>
              <ListItemText primary="Media Traffic" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <QuestionAnswerIcon />
              </ListItemIcon>
              <ListItemText primary="Chat" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <GroupIcon />
              </ListItemIcon>
              <ListItemText primary="Social Media" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <CalendarMonthRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Calendar" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <GroupIcon />
              </ListItemIcon>
              <ListItemText primary="Team Messaging" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar style={{ marginLeft: "0xp", marginRight: '0px' }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
          >
            <ArrowLeftIcon fontSize='20px' style={{ fontSize: '60px' }} />
          </IconButton>
        </Toolbar>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Card sx={{ display: 'flex' }} className='custom-card marginBottom40'>
            <List className="m-0 p-0">
              <ListItem>
                <ListItemAvatar>
                      <Avatar alt="Remy Sharp" src={bggray} sx={{ width: 151, height: 151 }} />
                    {/* </StyledBadge> */}
                    <div className="px-3 upload-btn-wrapper">
                      <input type="file" className="form-control" />
                      <BorderColorIcon className="" />
                    </div>
                </ListItemAvatar>
              </ListItem>
            </List>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                  <Typography component="div" variant="h5">
                    My Company
                  </Typography>
                  <div className="switch-button">
                    <span className="active"></span>
                    <button className={`switch-button-case left ${isTogglebtn ? '' : 'active-case'}`} onClick={toggleButtton}>Company</button>
                    <button className={`switch-button-case right ${!isTogglebtn ? '' : 'active-case'}`} onClick={toggleButtton}>Location</button>
                  </div>
                </CardContent>
                
              </Box>
            </Card>
            <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1 },
              }}
              noValidate
              autoComplete="off"
              fullWidth
              style={{ padding : '0px 60px'}}
            >
              <TextField label="Company Name" id="companyName" value={compayData.companyName} onChange={handleChange} fullWidth size='small' variant="outlined" />
              <TextField label="Company BPP" id="companyBPP" value={compayData.companyBPP} onChange={handleChange} fullWidth size='small' variant="outlined" />
              <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} className={`${!isTogglebtn ? '' : 'disabled_feild'} `}>
                <InputLabel id="demo-simple-select-standard-label">Department</InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  name="companyDepartment"
                  value={compayData.companyDepartment}
                  onChange={handleChange}
                  label="Department"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value='IT Team'>IT Team</MenuItem>
                  <MenuItem value='Sales & Marketing'>Sales & Marketing</MenuItem>
                </Select>
              </FormControl>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} className={`${isTogglebtn ? '' : 'disabled_feild'} `}>
                <InputLabel id="demo-simple-select-standard-label">Contacts</InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  name="companyContact"
                  value={compayData.companyContact}
                  onChange={handleChange}
                  label="Department"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value='IT Team'>IT Team</MenuItem>
                  <MenuItem value='Sales & Marketing'>Sales & Marketing</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <div>
              {compayData.companyDepartment !== [] &&
                <>
                  <div style={{ marginLeft: '67px', marginTop: '10px' }}>
                  {compayData.companyDepartment.map((ele) => {
                    return(
                      <>
                        <Button variant="outlined" className='rounded-button'>{ele}</Button>&nbsp;
                      </>
                    )
                  })}
                  </div>
                </>
              }
            </div>
            <Button variant="contained" className='custom-btn' style={{ float: 'right' }} size='small' onClick={submitCompanyData}>Save</Button>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card className='custom-card marginBottom40'>
            <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1 },
              }}
              noValidate
              autoComplete="off"
              fullWidth
              style={{ padding : '0px 60px'}}
            >
                <div className='input-group'>
                  <SearchIcon />
                  <TextField id="outlined-basic" label="" fullWidth size='small' variant="outlined" />
                </div>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
    </>
  )
}

export default Companyrorm;