import React from 'react';
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
import CommodityList from './CommodityList'
import fakeInventory from './DataModels/Inventory.json'
import {handleRequest,getData }from './utils/request'

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
  
  class PageManageInventory extends React.Component {
    handleRequest = () =>{
      getData('/getcommoditylist',localStorage.getItem('userid')).then(data => {
        if (data.error) {
          alert(data.error.message || "");
        } else {
          console.log(data)
          this.setState({CommodityData:data});
        }
    })
    }

    render() {
    const { classes } = this.props;
  
    


    return (
      <div>
        <br/>
      <Card className={classes.card}>
        <CardContent>
        <Typography variant="h5" component="h5" >
            库存管理
          </Typography>
         <CommodityList data={fakeInventory} type='inventory'/>
        </CardContent>
      </Card>
      </div>
    );
      }
  }
  
  PageManageInventory.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(PageManageInventory);