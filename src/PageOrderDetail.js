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
import {Tabs,Tab, CardContent, Card, CardMedia, List, ListSubheader}from '@material-ui/core'
import PageCommidityDetailM from './PageCommidityDetailM'
import fakeInventory from './DataModels/Inventory.json'
import CommodityList from './CommodityList.js';


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
  root: {
    width: '100%',
    marginTop:'1px',
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    maxHeight: "1080px",
    marginLeft:"-2rem",
  },

  paper: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  optionDiv:{
    display:"flex",
    marginLeft:'auto',
    marginRight:"1rem",

    marginBottom:"1rem",
    marginTop:"auto",
  },
  cover: {
    width: 130,
    marginTop:1,
    marginBottom:1,
  },
  details: {
    display: 'flex',
    // flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  listcard: {
    display: 'flex',
    maxHeight: 90,
    minHeight: 90,
  },
  });
  
  function Transition(props) {
    return <Slide direction="up" {...props} />;
  }
  
  class FullScreenDialog extends React.Component {
    state = {
      open: false,
      thisOrder: null,
      value:"order",
    };
  


    componentWillReceiveProps(nextProps){
        this.setState({thisOrder:nextProps.thisOrder,})
        if(this.props.thisOrder !== nextProps.thisOrder) this.handleClickOpen();
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
      const {thisOrder} = this.props;

      const orderDetail = <div><Card className={classes.paper} elevation={1}>
      <Typography style={{fontSize:"larger"}}>
        当前顾客：{thisOrder.customer_name}
      </Typography>
      <Typography style={{fontSize:"larger"}}>
        顾客ID：{thisOrder.customer_id}
      </Typography>
      <Typography style={{fontSize:"larger"}}>
        所属店面：{thisOrder.shop_name}
      </Typography>
      <Typography style={{fontSize:"larger"}}>
        店面ID：{thisOrder.shop_id}
      </Typography>
      <Typography style={{fontSize:"larger"}}>
        日期：{thisOrder.date}
      </Typography>
      <Typography style={{fontSize:"larger"}}>
        总价：{thisOrder.total_price}元
      </Typography>
      <Typography style={{fontSize:"larger"}}>
        备注：{thisOrder.note}
      </Typography>
      <Typography style={{fontSize:"larger"}}>
        商品列表：
      </Typography>
      <List className={classes.root} subheader={<li />}>
      {
        <li key={`section-${thisOrder.shop_id}`} className={classes.listSection}>
          <ul className={classes.ul}>
            
            {thisOrder.list.map(item => (
              <Card className={classes.listcard} key={item.commodity_id}>
              <CardMedia
              className={classes.cover}
              image={item.commodity_pic}
              title="漂亮的水果"
            /><div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography>
                {item.commodity_name}
              </Typography>
              <div style={{fontSize:'smaller', overflow:'hidden', textOverflow:'ellipsis', width:'40rem'}}>
              买了<Typography color ="secondary" inline>{item.quantity}</Typography>{item.unit}, 合计<Typography color ="secondary" inline>{item.price}</Typography>元。
              </div>


            </CardContent>
            
          </div>
          <div className={classes.optionDiv}><PageCommidityDetailM buttonName={'详情'} itemId={item.commodity_id}/></div> </Card>
            ))}
          </ul>
        </li>
      }
    </List>
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
                  当前订单 : {thisOrder.order_id}

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