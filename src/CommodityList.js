import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import PageCommidityDetailM from './PageCommidityDetailM';



const styles = theme => ({
  card: {
    display: 'flex',
    maxHeight: 90,
    minHeight: 90,
  },

  details: {
    display: 'flex',
    // flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  listItem:{
    display: 'flex',
  },
  cover: {
    width: 130,
    marginTop:1,
    marginBottom:1,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
  playIcon: {
    height: 38,
    width: 38,
  },

  root: {
    width: '100%',
    marginTop:'2rem',
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    maxHeight: "1080px",
  },
  listSection: {
    backgroundColor: 'inherit',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
  optionDiv:{
    display:"flex",
    marginLeft:'auto',
    marginRight:"1rem",

    marginBottom:"1rem",
    marginTop:"auto",
  },
});

function CardItem(props) {
  const { classes, theme } = props;
  const { data }= props;
  const {listData} = props;
  return (
    <div>
    
    <List className={classes.root} subheader={<li />}>
      {
        <li key={`section-${data.shopId}`} className={classes.listSection}>
          <ul className={classes.ul}>
            <ListSubheader>{`${data.shopName}`}</ListSubheader>
            {data.value.map(item => (
              <Card className={classes.card} key={item.commodityId}>
              <CardMedia
              className={classes.cover}
              image={item.picUrl}
              title="漂亮的水果"
            /><div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography>
                {item.commodityName}
              </Typography>
              <Typography color="textSecondary" style={{fontSize:'smaller', overflow:'hidden', textOverflow:'ellipsis', width:'40rem'}}>
              {item.description}
              </Typography>


            </CardContent>
            
          </div>
          <div className={classes.optionDiv}><PageCommidityDetailM buttonName={'详情'} itemId={item.commodityId} tab="inventory"/></div> </Card>
            ))}
          </ul>
        </li>
      }
    </List>
    </div>
  );
}

CardItem.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
};

export default withStyles(styles, { withTheme: true })(CardItem);