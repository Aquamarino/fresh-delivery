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
import { Card, Tabs,Tab, TextField, CardContent, List,ListItem,Chip } from '@material-ui/core';
import { getData, postJSON } from './utils/request';
import fakeCommodity from './DataModels/Commodity.json';


const styles = theme => ({
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

class PageCommodityDetailM extends React.Component {
  state = {
    open: false,
    value:"commodity",
    data:null,
    createdData:fakeCommodity[0],
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
    const {createdData} = this.state;
    const fakeData = fakeCommodity;
    const commodityDetail = <div>
        <Card className={classes.paper} elevation={1}>
        <Typography variant="h5" component="h2">
        商品名称：{this.state.createdData.name}
        </Typography>
        <List>
          <ListItem>
            商品ID：{this.state.createdData.id===""?"即将生成新商品ID":this.state.createdData.id}
          
          </ListItem>
          <ListItem>商品价格：{this.state.createdData.price+" 元 / "+this.state.createdData.unit+" "}</ListItem>
          <ListItem>商品库存：{this.state.createdData.inventory+" "+this.state.createdData.unit+" "}</ListItem>
          <ListItem>商品描述：{this.state.createdData.resource.detail}</ListItem>
          <ListItem>商品类型：{this.state.createdData.type===0?"新鲜水果":this.state.createdData.type===1?"水果篮子":this.state.createdData.type===2?"加工水果":""}</ListItem>
          <ListItem>商品标签：{this.state.createdData.tag.map(data => {
          return (
        <Chip
              key={data}
              label={data}
              className={classes.chip}
            />)})}</ListItem>
        <ListItem> </ListItem>
        </List>
        </Card>
    </div>

    const orderDetail = <div><Card className={classes.paper} elevation={1}>
    <Typography variant="h5" component="h2">
    商品名称：{this.state.createdData.name}
    </Typography>
    <List>
      <ListItem>
        交易1
      
      </ListItem>
      <ListItem>交易2</ListItem>
      <ListItem>交易3</ListItem>
      <ListItem>交易4</ListItem>
      <ListItem>交易5</ListItem>
      <ListItem>交易6</ListItem>
    <ListItem>交易7 </ListItem>
    </List>
    </Card></div>

    const saleDetail = <div>
      <Card className={classes.paper} elevation={1}>
      营业额
      </Card>
    </div>

    const ratingDetail = <div><Card className={classes.paper} elevation={1}>
    评价
    </Card></div>
    
    const DetailLayout = <div className={classes.background}>
        
        <Card className={classes.card}>
        <Tabs
          value={this.state.value}
          indicatorColor="primary"
          textColor="primary"
          onChange={this.handleChange}
          
        >
          <Tab label="商品介绍" value="commodity"/>
          <Tab label="订单列表" value="orders"/>
          <Tab label="营业额表" value="sales"/>
          <Tab label="客户评价" value="ratings"/>
        </Tabs>
        <CardContent>
        {this.state.value=="commodity"?commodityDetail:
        this.state.value=="orders"?orderDetail:
         this.state.value=="sales"?saleDetail:
            this.state.value=="ratings"?ratingDetail:<div/>
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

PageCommodityDetailM.propTypes = {
  classes: PropTypes.object.isRequired,
  buttonName: PropTypes.string.isRequired,
};

export default withStyles(styles)(PageCommodityDetailM);