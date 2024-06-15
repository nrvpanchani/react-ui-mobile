import React, { useState } from 'react';
import { Container, Box, Grid, Typography, AppBar, Toolbar, IconButton, BottomNavigation, BottomNavigationAction, Dialog, DialogTitle, DialogContent, DialogActions, Button, Select, MenuItem, FormControl, InputLabel, Radio, FormControlLabel, RadioGroup, Slide } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HomeIcon from '@mui/icons-material/Home';
import DateRangeIcon from '@mui/icons-material/DateRange';
import ListIcon from '@mui/icons-material/List';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import StarsRoundedIcon from '@mui/icons-material/StarsRounded';
import "./App.css"

const services = [
  { name: "Personal BodyGuard" },
  { name: "Close Protection" },
  { name: "Buddy Bodyguard" },
  { name: "Night Club" },
  { name: "Event Bodyguard" },
  { name: "Family Bodyguard" },
];

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const App = () => {
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = useState(false);
  const [steps, setSteps] = useState(1)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSteps(1)
  };

  const handleBottomNavChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 1) {
      handleClickOpen();
    }
  };
  return (
    <Container maxWidth="sm" sx={{ backgroundColor: '#f8f9fa', padding: 0 }}>
      <AppBar position="static" sx={{ backgroundColor: '#D0A819', }}>
        <Toolbar>
          <StarsRoundedIcon sx={{ marginRight: '10px' }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'left', fontSize: '14px', fontWeight: 'bolder' }}>
            PRO Membership Plan
          </Typography>
          <ArrowForwardIosIcon sx={{ textAlign: 'right', fontSize: '18px' }} />
        </Toolbar>
      </AppBar>
      
      <Box sx={{ textAlign: 'left', marginTop: '5px', padding: '10px' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'left' }}>
          <Typography variant="subtitle1" sx={{ marginLeft: '8px', fontWeight: 'bolder', color: '#494949' }}>Location</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'left' }}>
          <Typography variant="subtitle1" sx={{ marginLeft: '8px', fontSize: '12px', color: '#868686' }}>Sector 20, Airoli, Mumbai</Typography>
        </Box>
        <hr />
      </Box>
      
      <Box sx={{ textAlign: 'left', marginTop: '0px', padding: '0 10px' }}>
        <Typography variant="h6" style={{ fontSize: '16px', fontWeight: 'bolder', color: '#494949', marginTop: '0px', paddingTop: '0px' }}>What are you looking for?</Typography>
      </Box>
      
      <Grid container spacing={2} sx={{ marginTop: '0px', padding: '0 15px' }}>
        {services.map((service, index) => (
          <Grid item xs={4} key={index}>
            <Box sx={{
              height: 80,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#e0e0e0',
              borderRadius: '8px',
              textAlign: 'center',
              padding: '10px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}>
            </Box>
            <Typography variant="body2" sx={{ textAlign: 'center', fontWeight: 'bold', marginTop: '5px', color: '#494949', fontSize: '12px', wordBreak: 'break-word' }}>{service.name}</Typography>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={2} sx={{ marginTop: '0px', padding: '0 15px' }}>
        <Grid item xs={6} key={`Escort Car with Bodyguard`}>
          <Box sx={{
            height: 80,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#e0e0e0',
            borderRadius: '8px',
            textAlign: 'center',
            padding: '10px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
          </Box>
          <Typography variant="body2" sx={{ textAlign: 'center', fontWeight: 'bold', marginTop: '10px', color: '#494949', fontSize: '12px', wordBreak: 'break-word' }}>Escort Car with Bodyguard</Typography>
        </Grid>
        <Grid item xs={6} key={`Luxury Car with Chauffeur`}>
          <Box sx={{
            height: 80,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#e0e0e0',
            borderRadius: '8px',
            textAlign: 'center',
            padding: '10px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
          </Box>
          <Typography variant="body2" sx={{ textAlign: 'center', fontWeight: 'bold', marginTop: '10px', color: '#494949', fontSize: '12px', wordBreak: 'break-word' }}>Luxury Car with Chauffeur</Typography>
        </Grid>
      </Grid>

      <BottomNavigation
        value={value}
        onChange={handleBottomNavChange}
        showLabels
        sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, backgroundColor: '#000' }}
      >
        <BottomNavigationAction label="Home" icon={<HomeIcon />} sx={{ color: '#fff' }} />
        <BottomNavigationAction label="Booking" icon={<DateRangeIcon />} sx={{ color: '#fff' }} />
        <BottomNavigationAction label="Instant Quote" icon={<PlayArrowIcon />} sx={{ color: '#fff', padding: '3px 0px' }} />
        <BottomNavigationAction label="My List" icon={<ListIcon />} sx={{ color: '#fff' }} />
        <BottomNavigationAction label="Account" icon={<AccountCircleIcon />} sx={{ color: '#fff' }} />
      </BottomNavigation>

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        fullWidth
        maxWidth="sm"
        sx={{
          '& .MuiDialog-container': {
            alignItems: 'flex-end'
          },
          '& .MuiPaper-root': {
            borderRadius: '8px 8px 0 0',
            margin: 0
          }
        }}
      >
        <DialogTitle>
          {steps == 1 ? `Service Start Date` : `Service End Date`}
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{ position: 'absolute', right: 8, top: 8, color: (theme) => theme.palette.grey[500] }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
            <Select defaultValue="01" sx={{ width: '30%' }}>
              {<MenuItem value="01">01</MenuItem>}
              {/* Add other date options here */}
            </Select>
            <Select defaultValue="Jan" sx={{ width: '30%' }}>
              <MenuItem value="Jan">Jan</MenuItem>
              {/* Add other month options here */}
            </Select>
            <Select defaultValue="2024" sx={{ width: '30%' }}>
              <MenuItem value="2024">2024</MenuItem>
              {/* Add other year options here */}
            </Select>
          </Box>
          {steps == 1 ? <FormControl component="fieldset">
            <RadioGroup>
              <FormControlLabel value="noDate" control={<Radio />} label="I don't have a specific date" />
            </RadioGroup>
          </FormControl> : null}
        </DialogContent>
        <DialogActions>
          <Button 
            onClick={() => {
              if(steps == 1) {
                setSteps(2)
              }
            }} 
            variant="contained" 
            fullWidth
            >
              Next
            </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

export default App;
