import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import { Card, Tabs,Tab, TextField, CardContent } from '@material-ui/core';
import { getData, postJSON } from './utils/request';

const styles = {
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
  title:
    {
    position:'absolute',
    top:200,
    color:'white',
    fontSize:'xx-large',
    width:"100%",
    height:500,
    opacity:0.5
    },
    content:
    {
    position:'absolute',
    top:200,
    color:'white',
    fontSize:'xx-large',
    width:"100%",
    height:500,
    },
    card:{
        marginLeft:'auto',
        marginRight:'auto',
        padding:'1rem',
        color:'black',
        width:1080,
        height:"100%",
    },
    background:{
        width:"100%",
        overflow:"hidden",
        
    },
    pd1:{
        padding:'2rem'
    }
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class PageCommodityDetailM extends React.Component {
  state = {
    open: false,
    value:"order",
    data:null,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleText = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleRequest = () =>{
    
    getData('/getcommodity',this.props.itemId).then(data => {
      if (data.error) {
        alert(data.error.message || "login failed");
      } else {
        console.log(data)
        this.setState({data:data});
      }
  })
  }

  render() {
    const { classes, buttonName } = this.props;

    const orderDetail = <div>
        <Typography>
            {`订单号：
            用户名：
            用户ID：`}
            </Typography>
    </div>

    const customerDetail = <div></div>

    const deliveryLayout = <div></div>
    
    const DetailLayout = <div className={classes.background}>
        
        <Card className={classes.card}>
        <Tabs
          value={this.state.value}
          indicatorColor="primary"
          textColor="primary"
          onChange={this.handleChange}
          
        >
          <Tab label="订单详情" value="order"/>
          <Tab label="用户详情" value="customer"/>
          <Tab label="物流详情" value="delivery"/>
        </Tabs>
        <CardContent>
        {this.state.value=="order"?orderDetail:this.state.value}
        </CardContent>
        </Card>
        </div>
        
    


    return (
      <div>
        <Button variant="contained" color="primary" onClick={this.handleClickOpen}>
          {buttonName}
        </Button>
        <Dialog
          fullScreen
          open={this.state.open}
          onClose={this.handleClose}
          TransitionComponent={Transition}
        >
        <AppBar className={classes.appBar}>
            <Toolbar>

              <Typography variant="h6" color="inherit" className={classes.flex}>
                {buttonName}
              </Typography>
              <Button color="inherit" onClick={this.handleClose}>
              <CloseIcon />
              </Button>
            </Toolbar>
          </AppBar>
          {DetailLayout}

        </Dialog>
      </div>
    );
  }
}

PageCommodityDetailM.propTypes = {
  classes: PropTypes.object.isRequired,
  buttonName: PropTypes.string.isRequired,
};

export default withStyles(styles)(PageCommodityDetailM);