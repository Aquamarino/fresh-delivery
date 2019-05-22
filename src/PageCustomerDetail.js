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
import { Card, Tabs,Tab, TextField, CardContent, List,ListItem,Chip, Grid, Tooltip } from '@material-ui/core';
import { getData, postJSON } from './utils/request';
import fakeCommodity from './DataModels/Commodity.json';
import SalesChart from "./CommodityChart2";
import SalesData from "./DataModels/sales.json";
import OrderList from './OrderList';
import CommentList from './CommentList'
import fakeComments from './DataModels/Comments'
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/DeleteForever'
import AddIcon from '@material-ui/icons/Add';

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
  toolbar:{
    display:'flex',
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"row"
  },
  margin:{
    margin:"1rem"
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
    },
    paper: {
      ...theme.mixins.gutters(),
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2,
    },
    chip: {
      margin: theme.spacing.unit / 2,
    },
});

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class PageCutomerDetail extends React.Component {
  state = {
    open: false,
    value:"commodity",
    CustomerData:fakeCommodity,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
    this.handleRequest();
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
    
    getData(`/getcommodity/findById?id=${this.props.itemId}`).then(data => {
      if (data.code!=="200") {
        alert(data.message || "request failed");
      } else {
        console.log(data.commodity.commodity)
        data.commodity.commodity.shopDetail=data.commodity.merchant.shopAddress;
        this.setState({CustomerData:data.commodity.commodity});
      }
  })

  getData(`/getcommoditycomments/findById?id=${this.props.itemId}`).then(data => {
    if (data.code!=="200") {
      alert(data.message || "request failed");
    } else {
      // console.log(data.commodity.commodity)
      // data.commodity.commodity.shopDetail=data.commodity.merchant.shopAddress;
      // this.setState({CustomerData:data.commodity.commodity});
    }
})
  }

  componentDidMount(){
    if(this.props.tab==="inventory")this.setState({value:"inventory"})
  }
  render() {
    const { classes, buttonName} = this.props;
    const {CustomerData} = this.state;
    
    const commodityDetail = <div>
        <Card className={classes.paper} elevation={1}>
        <Typography variant="h5" component="h2">
        用户名称：Jack
        </Typography>
        <List>
          <ListItem>
            用户ID：12345
          
          </ListItem>
          <ListItem>vip客户：是</ListItem>
          <ListItem>购买次数：10</ListItem>
          <ListItem>购买历史：</ListItem>
          <ListItem>用户详情：</ListItem>

        
        </List>
        </Card>
    </div>

    
    const DetailLayout = <div className={classes.background}>
        
        <Card className={classes.card}>
        <Tabs
          value={this.state.value}
          indicatorColor="primary"
          textColor="primary"
          onChange={this.handleChange}
          
        >
          <Tab label="用户详情" value="commodity"/>

        </Tabs>
        <CardContent>
        {this.state.value=="commodity"?commodityDetail:<div/>
         }
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

PageCutomerDetail.propTypes = {
  classes: PropTypes.object.isRequired,
  buttonName: PropTypes.string.isRequired,
};

export default withStyles(styles)(PageCutomerDetail);