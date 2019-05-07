import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import {Link, Redirect} from "react-router-dom";

const styles = {
  card: {
    minWidth: "5rem",
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

class NavMerchant extends Component {
  constructor(){
      super()
  }
  state={
    redirect:null,
  }



  render(){
    const { classes } = this.props;
  return (
    <div>
      <br/>
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="h5" >
          管理
        </Typography>
      <List component="nav">
    <Link to="/m/orders" >
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="订单管理" />
        </ListItem>
</Link>
<Link to="/m/create">
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="商品上架" />
        </ListItem>
        </Link>
        <Link to="/m/inventory">
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="库存管理" />
        </ListItem>
        </Link>
        <Link to="/m/customers">
        <ListItem button>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="用户管理" />
        </ListItem></Link>
      </List>
      <Divider />
      <br/>
      <Typography variant="h5" component="h5" >
          分析
        </Typography>
      <List component="nav">
      <Link to="/m/analyse-sales">
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="营业分析" />
        </ListItem></Link>
        <Link to="/m/analyse-commodity">
        <ListItem button>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="商品分析" />
        </ListItem></Link>
      </List>
      <Divider />
      <br/>
      <Typography variant="h5" component="h5" >
          互动
        </Typography>
      <List component="nav">
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="通知" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="私信" />
        </ListItem>
      </List>
      </CardContent>
    </Card>
    {this.state.redirect}
    </div>
  );
}
}

NavMerchant.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavMerchant);