import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import { Card, Tabs,Tab, TextField } from '@material-ui/core';

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
        position:'absolute',
        right:200,
        padding:'1rem',
        color:'black',
        width:300,
        height:400,
    },
    background:{
        width:"100%",
        overflow:"hidden",
        
    }
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class PageLogin extends React.Component {
  state = {
    open: false,
    value:"login",
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
  render() {
    const { classes, buttonName } = this.props;

    const loginField  = <div>
        <TextField onChange={this.handleText('username') } label="用户名"/>
        <br/>
        <br/>
        <TextField onChange={this.handleText('password') } label="密码" type="password"/>
        <br></br>
        <br/>
        <Button onClick={()=>{;}}>{this.state.value=="login"?'登录':'注册'}</Button>
        </div>;

    const signupField = <div></div>;
    
    const LoginLayout = <div className={classes.background}>
        <img className={classes.background} src='https://images.unsplash.com/photo-1546548970-71785318a17b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1834&q=80'></img>
        <Card className={classes.title}></Card>
        <div className={classes.content}>
        <br/>
        <Card className={classes.card}>
        <Tabs
          value={this.state.value}
          indicatorColor="primary"
          textColor="primary"
          onChange={this.handleChange}
        >
          <Tab label="登录" value="login"/>
          <Tab label="注册" value="signup"/>
        </Tabs>
        {this.state.value=="login"?loginField:'signupField'}
        </Card>
        </div>
        
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
          {LoginLayout}
        </Dialog>
      </div>
    );
  }
}

PageLogin.propTypes = {
  classes: PropTypes.object.isRequired,
  buttonName: PropTypes.string.isRequired,
};

export default withStyles(styles)(PageLogin);