import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Paper, withStyles, Grid, Button, List, ListItem,Badge,Avatar, ListItemText, ListItemSecondaryAction, Divider, Select, MenuItem, Typography, ListItemIcon,Drawer} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import MultilineChartIcon from '@material-ui/icons/MultilineChart';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import AvTimerIcon from '@material-ui/icons/AvTimer';
import { Description } from '@material-ui/icons';
import PanoramaOutlinedIcon from '@material-ui/icons/PanoramaOutlined';
import VideocamOutlinedIcon from '@material-ui/icons/VideocamOutlined';
import TocIcon from '@material-ui/icons/Toc';
import SpeedIcon from '@material-ui/icons/Speed';
import ListAltIcon from '@material-ui/icons/ListAlt';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import GetAppIcon from '@material-ui/icons/GetApp';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SettingsIcon from '@material-ui/icons/Settings';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
const drawerWidth = 200;
const styles = theme => ({
    root: {
        display: 'flex',
        background:"white",
    },
    
    footer: {
        display:"flex",
        justifyContent: "flex-end", 
        marginTop: "auto",
        alignItems:"center",
        padding:theme.spacing(1)
      },
      header: {
        padding:theme.spacing(2)
      },
    openroot:{
        width:"100%"
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
      },
      drawerPaper: {
        width: drawerWidth,
        background: "blue",  
      },
    text: {
        
        marginLeft: theme.spacing(4),
        marginTop: theme.spacing(5),   
    },
   
    button: {
        display:"flex",
        justifyContent: "flex-end",
        marginLeft: "auto",
        alignItems:"center"
    },
   
    paper: {
        padding: theme.spacing(3),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    view: {
        marginLeft: theme.spacing(55),
    },
   
    horizon: {
        float: "right",
        marginTop: theme.spacing(-7)
    },
    grid: {
        marginLeft: theme.spacing(3)
    },
    grid2: {
        marginTop: theme.spacing(2)
    },
   mainroot:{
padding:theme.spacing(1)

   },
    root1: {
       padding:theme.spacing(3)    
    },
   
    paper1: {
        padding: theme.spacing(2), 
        background: "blueviolet",
        borderRadius: 14,
    },
    paper2: {
        padding: theme.spacing(2),
        background: "lightgrey",
        borderRadius: 14,
    },
    varybutton: {

        marginLeft: 5,
        background: "lightgreen",
        color: "#036303"

    },
    varybutton1: {

        marginLeft: 5,
        background: "#e69c9a",
        color: "#960400"

    },
    pdfbutton: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(5),
        width: 320,

    },
    pdfbutton1: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(4),
        width: 320,

    },
    
    screenshot: {
        width:340,
        backgroundColor: theme.palette.background.paper,
    },
    marker:{
        cursor:"pointer",
        marginRight:theme.spacing(2),
       
      },
     
      listbutton:{
        padding:theme.spacing(2)
      },
      content: {
        flexGrow: 1,
        overflow: 'auto',
      },
      container:{
          paddingTop:theme.spacing(2)
      },
      dividerD: {
        width: "20%",
        marginLeft: theme.spacing(2),
      },


})
function createData(name, Date, starttime, stoptime, Duration) {
    return { name, Date, starttime, stoptime, Duration };
}

const rows = [
    createData('Landing page Design', 'May 21,2019', '1.10 pm', '9.20pm', '8:10:27'),
    createData('Mobile app', 'May 22,2019', '12.00 pm', '8.20pm', '8:00:00'),
    createData('UI/UX', 'May 23,2019', '1.10 pm', '1.20pm', '0:10:37'),
    createData('Website/apps', 'May 24,2019', '1.11 pm', '9.00pm', '8:00:00'),
    createData('Branding', 'May 25,2019', '1.10 pm', '1.20pm', '0:10:37'),
];

class App1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           open:true,
           full:"",
           value:""
        }
      }
      close=()=>{
        this.setState({
          open:false,
          full:"opened"
        })
      }
      open=()=>{
          this.setState({
              open:true,
              full:""
          })
      }
    render() {
        const { classes } = this.props
        return (
            <div className={this.state.full==="opened" ? classes.openroot : classes.root}>
                <CssBaseline />
                <Drawer
                 variant="persistent"
                 anchor="left"
                 className={classes.drawer}
                 classes={{
                    paper: classes.drawerPaper,
                  }}
                  open={this.state.open}
                >
               <div style={{paddingTop:5}}> 
               <div className={classes.header}>
               <GroupWorkIcon style={{ color:  "#f5d442" }} fontSize="large"/>
               </div>
            <Divider className={classes.dividerD} />
            <List>
              <ListItem button >
                <ListItemIcon>
                  <SpeedIcon style={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText style={{ color: "white" }} primary="Dashboard" />
                <ListItemSecondaryAction>
                    <PlayCircleFilledIcon style={{ color: "#f5d442",cursor:"pointer" }} onClick={this.close}/>
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <AvTimerIcon style={{ color: "lightgrey" }} />
                </ListItemIcon>
                <ListItemText style={{ color: "lightgrey" }} primary="Timesheet" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <MultilineChartIcon style={{ color: "lightgrey" }} />
                </ListItemIcon>
                <ListItemText style={{ color: "lightgrey" }} primary="Activity" />
              </ListItem>
            </List>
            <Divider className={classes.dividerD} />
            <List>
              <ListItem button>
                <ListItemIcon>
                <EventAvailableIcon style={{ color: "lightgrey" }} />
                  
                </ListItemIcon>
                <ListItemText style={{ color: "lightgrey" }} primary="To-Do" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                <ListAltIcon style={{ color: "lightgrey" }} />
                </ListItemIcon>
                <ListItemText style={{ color: "lightgrey" }} primary="Invoices" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <FolderOpenIcon style={{ color: "lightgrey" }} />
                </ListItemIcon>
                <ListItemText style={{ color: "lightgrey" }} primary="Projects" />
              </ListItem>
            </List>
            <Divider className={classes.dividerD} />
            <List>
              <ListItem button>
                <ListItemIcon>
                  <HelpOutlineIcon style={{ color: "lightgrey" }} />
                </ListItemIcon>
                <ListItemText style={{ color: "lightgrey" }} primary="Help" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <GetAppIcon style={{ color: "lightgrey" }} />
                </ListItemIcon>
                <ListItemText style={{ color: "lightgrey" }} primary="Download App" />
              </ListItem>
            </List>
          </div>
          < div className={classes.footer}>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="flex-end"
          >
            <Badge color="secondary" badgeContent={2} style={{ color: "white", marginRight: 20,marginBottom:10 }}>
              <NotificationsIcon />
            </Badge>
            <Divider orientation="vertical" flexItem />
            <SettingsIcon style={{ color: "white", marginLeft: 20, marginRight: 20,marginBottom:10 }} />
            <Divider orientation="vertical" flexItem />
            <Avatar style={{ marginLeft: 20 }}>H</Avatar>
          </Grid>
          </div>
                </Drawer>
               
                <div>
               
                    <Grid container direction="row" style={{padding:30}}>
                        <Grid item>
                        <TocIcon className={classes.marker} onClick={this.open} fontSize="large"/>
                        </Grid>
                        <Grid item >  
                            <Select
                                value={this.state.value}
                                displayEmpty
                            >
                                <MenuItem value="">Design Task</MenuItem>
                                <MenuItem value={1}></MenuItem>
                                <MenuItem value={2}></MenuItem>
                            </Select>
                        </Grid>
                        <Grid item className={classes.button}>
                            <Button
                                variant="outlined"
                                color="primary"
                                
                                startIcon={<AddIcon />}
                            >
                                Add Project
                    </Button>
                        </Grid>
                    </Grid>
                    <Divider />
                    <Grid container direction="row" >
                        <Grid item xs={12} sm={12} md={8} lg={8} >
                            <div className={classes.mainroot}>
                                <div style={{display:"flex",alignItems:"center"}}>
                                
                                    <Grid container direction="row" >
                                        <Grid item>
                                        <h1 >Timesheet</h1>
                                        </Grid>
                                        <Grid item className={classes.button}>
                                       <Button variant="outlined"
                                        color="primary" > VIEW FULL SHEET</Button>
                                        <MoreHorizIcon style={{marginLeft:10}} />
                                       </Grid>
                                        
                                    </Grid>
                                 
                                </div>
                                <TableContainer >
                                    <Table  aria-label="simple table">
                                        <TableHead>
                                            <TableCell>Project</TableCell>
                                            <TableCell align="right">Date</TableCell>
                                            <TableCell align="right">Start time</TableCell>
                                            <TableCell align="right">Stop time</TableCell>
                                            <TableCell align="right">Duration</TableCell>
                                        </TableHead>
                                        <TableBody>
                                            {rows.map((row) => (
                                                <TableRow key={row.name}>
                                                    <TableCell component="th" scope="row">
                                                        {row.name}
                                                    </TableCell>
                                                    <TableCell align="right">{row.Date}</TableCell>
                                                    <TableCell align="right">{row.starttime}</TableCell>
                                                    <TableCell align="right">{row.stoptime}</TableCell>
                                                    <TableCell align="right">{row.Duration}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </div>
                           
                        </Grid>
                        <div>
                        <Divider orientation="vertical"/>
                        </div>
                        
                        <Grid item xs={12} sm={12} md={3} lg={3} >
                              <div className={classes.root1}> 
                                  <Grid container direction="column" spacing={2}  >
                                      <Grid item >
                                <Typography variant="h1" style={{ fontSize: 20 }}> Report</Typography>
                                </Grid>
                                <Grid item >
                                <Paper className={classes.paper1} elevation={3} >
                                    <Grid container spacing={2}>
                                        <Grid item style={{ marginTop: 12 }}>
                                            <MultilineChartIcon style={{ color: "white" }} />
                                        </Grid>
                                        <Grid item xs={12} sm container>
                                            <Grid item xs container direction="column" spacing={2}>
                                                <Grid item xs>
                                                    <Typography gutterBottom variant="subtitle1" style={{ color: "white" }}>
                                                        Weekly Activity
                   </Typography>
                                                    <Typography variant="body2" gutterBottom style={{ color: "white" }}>
                                                        52%
                    </Typography>
                                                </Grid>
                                            </Grid>
                                            <Grid item style={{ marginLeft: 5 }}>
                                                <Button
                                                    variant="contained"
                                                    size="small"
                                                    className={classes.varybutton}
                                                    startIcon={<ArrowDropUpIcon />}
                                                >
                                                    17%
                      </Button>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Paper>
                                </Grid>
                                <Grid item >
                                <Paper className={classes.paper2} elevation={0}>
                                    <Grid container spacing={2}>
                                        <Grid item style={{ marginTop: 12 }}>
                                            <AvTimerIcon style={{ color: "black" }} />
                                        </Grid>
                                        <Grid item xs={12} sm container>
                                            <Grid item xs container direction="column" spacing={2}>
                                                <Grid item xs>
                                                    <Typography gutterBottom variant="subtitle1" style={{ color: "black" }}>
                                                        Worked this week
                       </Typography>
                                                    <Typography variant="body2" gutterBottom style={{ color: "black" }}>
                                                        11:56:33
                           </Typography>
                                                </Grid>
                                            </Grid>
                                            <Grid item style={{ marginLeft: 5 }}>
                                                <Button
                                                    variant="contained"
                                                    size="small"
                                                    className={classes.varybutton1}
                                                    startIcon={<ArrowDropDownIcon />}
                                                >
                                                    17%
                          </Button>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Paper>
                                </Grid>
                                <Grid item  >
                                <Button variant="outlined" color="primary" startIcon={<Description />} style={{width:300}} size="large">Export As Pdf</Button> 
                                </Grid>
                                </Grid>
                                </div>
                        </Grid>
                    </Grid>
                    
                        <Divider variant="fullWidth"/>
                    
                    <Grid container direction="row">
                        <Grid item xs={12} sm={12} md={8} lg={8}>
                            <div className={classes.mainroot}>
                                <Typography variant="h1" style={{ fontSize: 20, marginTop: 20 }}> To-Do lists</Typography>
                                <Grid container spacing={1} className={classes.grid}>
                                    <Grid container spacing={2} direction="row" className={classes.grid2}>
                                        <Grid item style={{ marginTop: 15 }}>
                                            <Typography variant="h1" style={{ fontSize: 20, color: "blueviolet" }} align="center">20<br /> May</Typography>
                                        </Grid>
                                        <Grid item xs={10}  >
                                            <Paper className={classes.paper} elevation={3}>
                                                <Typography variant='h1' style={{ fontSize: 20 }} align="left" >Revamp instagram</Typography>
                                                <Typography align="left" style={{ fontSize: 12 }}>Today</Typography>
                                                <MoreHorizIcon className={classes.horizon} />
                                            </Paper>
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={2} direction="row" className={classes.grid2}>
                                        <Grid item style={{ marginTop: 15 }}>
                                            <Typography variant="h1" style={{ fontSize: 20 }} align="center">21<br /> May</Typography>
                                        </Grid>
                                        <Grid item xs={10}  >
                                            <Paper className={classes.paper} elevation={0}>
                                                <Typography variant='h1' style={{ fontSize: 20 }} align="left">Prototyping</Typography>
                                                <Typography align="left" style={{ fontSize: 12 }}>Upcoming</Typography>
                                                <MoreHorizIcon className={classes.horizon} />
                                            </Paper>
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={2} direction="row" className={classes.grid2}>
                                        <Grid item style={{ marginTop: 15 }}>
                                            <Typography variant="h1" style={{ fontSize: 20 }} align="center">22<br /> May</Typography>
                                        </Grid>
                                        <Grid item xs={10}  >
                                            <Paper className={classes.paper} elevation={0}>
                                                <Typography variant='h1' style={{ fontSize: 20 }} align="left">Collect references for new project</Typography>
                                                <Typography align="left" style={{ fontSize: 12 }}>Upcoming</Typography>
                                                <MoreHorizIcon className={classes.horizon} />
                                            </Paper>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </div>
                        </Grid>
                        <div>
                            <Divider orientation="vertical"/>
                        </div>
                        {/* <div >
                            <Divider orientation="vertical" className={classes.Vdivider} />
                        </div> */}
                        <Grid item  xs={12} sm={12} lg={3} md={3} >
                            <div className={classes.root1}>
                                <Grid container direction="column" spacing={2}  >
                                    <Grid item> 
                                <Typography variant="h1" style={{ fontSize: 20}}> Screenshots</Typography>
                                </Grid>
                                <Grid item  >
                                   
                                <List>
                                <ListItem style={{width:320}} >
                  <ListItemIcon>  
                   <PanoramaOutlinedIcon/> 
                  </ListItemIcon>
                  <ListItemText
                    primary="Shot_1_attach_1.png"
                  />
                  <ListItemSecondaryAction  >
                    <Button size="small" color="primary" edge="end" variant="outlined">
                     View
                    </Button>
                  </ListItemSecondaryAction>
                </ListItem>
                <ListItem >
                  <ListItemIcon>  
                   <PanoramaOutlinedIcon/> 
                  </ListItemIcon>
                  <ListItemText
                    primary="Shot_1_attach_3.png"
                   
                  />
                  <ListItemSecondaryAction >
                    <Button size="small" color="primary" edge="end" variant="outlined">
                     View
                    </Button>
                  </ListItemSecondaryAction>
                </ListItem>
                <ListItem >
                  <ListItemIcon>  
                   <VideocamOutlinedIcon/> 
                  </ListItemIcon>
                  <ListItemText
                    primary="Screen_attach_3.mov"

                  />
                  <ListItemSecondaryAction >
                    <Button size="small" style={{background:"blueviolet", color:"whitesmoke"}} edge="end" variant="outlined">
                     Play
                    </Button>
                  </ListItemSecondaryAction>
                </ListItem>
                
                                </List>
                                </Grid>
                                <Grid item>
                                <Button variant="outlined" color="primary" style={{width:310}} size="large">View All</Button>
                                </Grid>
                                </Grid>
                                </div>
                        </Grid>
                    </Grid>
                </div>
                
            </div>

        )
    }


}

export default withStyles(styles)(App1);