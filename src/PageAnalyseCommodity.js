import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MovieList from "./MovieList"
import CommodityChart from "./CommodityChart";
import CardItem from './CardItem';
import Divider from '@material-ui/core/Divider';

import MovieList from "./OrderList"
import CardItem from './CommodityList';
import fakeInventory from './DataModels/Inventory'

const styles = {
  palette: {
    primary: 'blue',
    secondary: 'pink',
  },
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

  function handleClick(event) {
    event.preventDefault();
  }
  
  function PageAnalyseCommodity(props) {
    const { classes } = props;
  
    return (


      <div>
        {/* <br/>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h5" component="h5" >
            商品分析
          </Typography>
          <CardItem data={fakeInventory}/>
        </CardContent>
      </Card>
      <br/>
      水果收藏数——过去一周
      <Card className={classes.card}>
        <CardContent>
          <CommodityChart/>
        </CardContent>
      </Card>
      <br/> */}
      {/* <Card className={classes.card}>
        <CardContent>
          <CardItem/>
        </CardContent>
      </Card> */}
 
      
      </div>
      
    );
  }
  
  PageAnalyseCommodity.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(PageAnalyseCommodity);