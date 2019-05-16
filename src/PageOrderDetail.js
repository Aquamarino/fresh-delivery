import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import {Tabs,Tab, CardContent, Card}from '@material-ui/core'




const Dialogstyles = theme =>({
    appBar: {
      position: 'relative',
    },
    flex: {
      flex: 1,
    },
    background:{
      width:"100%",
      overflow:"hidden",
      
  },
    card:{
      marginLeft:'auto',
      marginRight:'auto',
      padding:'1rem',
      color:'black',
      width:1080,
      height:"100%",
  },
  paper: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  });
  
  function Transition(props) {
    return <Slide direction="up" {...props} />;
  }
  
  class FullScreenDialog extends React.Component {
    state = {
      open: false,
      currentMovie: null,
      value:"order",
    };
  
    componentDidMount(){
        this.setState({currentMovie: this.props.currentMovie})
    }

    componentWillReceiveProps(nextProps){
        this.setState({currentMovie:nextProps.currentMovie,})
        if(this.props.currentMovie !== nextProps.currentMovie) this.handleClickOpen();
    }

    handleChange = (event, value) => {
        this.setState({ value });
      };

    handleClickOpen = () => {
      this.setState({ open: true });
    };
  
    handleClose = () => {
      this.setState({ open: false });
    };
  
    render() {

      const { classes } = this.props;

      const orderDetail = <div><Card className={classes.paper} elevation={1}>
      <Typography variant="h5" component="h2">
      商品名称：
      </Typography>
      </Card></div>
      
      const deliveryDetail =<div><Card className={classes.paper} elevation={1}>
      <Typography variant="h5" component="h2">
      商品名称：
      </Typography>
      </Card></div>

      const paymentDetail = <div><Card className={classes.paper} elevation={1}>
      <Typography variant="h5" component="h2">
      商品名称：
      </Typography>
      </Card></div>

      const customerDetail = <div><Card className={classes.paper} elevation={1}>
      <Typography variant="h5" component="h2">
      商品名称：
      </Typography>
      </Card></div>

      return (
        <div>
            <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
          详情
        </Button>
          <Dialog
            fullScreen
            open={this.state.open}
            onClose={this.handleClose}
            TransitionComponent={Transition}
          >
         
            <AppBar className={classes.appBar}>
              <Toolbar>
                <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                  <CloseIcon />
                </IconButton>
                <Typography variant="h6" color="inherit" className={classes.flex}>
                  Current Movie ID : {this.props.currentMovie._id}

                </Typography>
                
                <Button color="inherit" onClick={this.handleClose}>
                  Close
                </Button>
              </Toolbar>
            </AppBar>
            <div className={classes.background}>
            <Card className={classes.card}>
            <Tabs
          value={this.state.value}
          indicatorColor="primary"
          textColor="primary"
          onChange={this.handleChange}
          
        >
          <Tab label="订单详情" value="order"/>
          <Tab label="物流详情" value="delivery"/>
          <Tab label="付款详情" value="payment"/>
          <Tab label="客户详情" value="customer"/>
        </Tabs>
        <CardContent>
        {this.state.value=="order"?orderDetail:
        this.state.value=="delivery"?deliveryDetail:
         this.state.value=="payment"?paymentDetail:
            this.state.value=="customer"?customerDetail:<div/>
         }
        </CardContent>
      </Card>
      </div>
          </Dialog>
        </div>
      );
    }
  }
  
  FullScreenDialog.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default  withStyles(Dialogstyles, { withTheme: true })(FullScreenDialog);