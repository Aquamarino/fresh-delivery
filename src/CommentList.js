import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete'
import {IconButton, ListItemSecondaryAction, Card} from '@material-ui/core'
import ReactRating from 'react-rating';
import StarIcon from '@material-ui/icons/StarRounded'
import EmptyStar from '@material-ui/icons/StarBorderRounded'
import {Link}from 'react-router-dom'

const styles = theme => ({
  root: {
    width: '100%',
    
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
    maxWidth:'50rem',

     overflow:'hidden', textOverflow:'ellipsis',
  },
});

function CommentList(props) {
  const { classes } = props;
  const {listData} = props;
  return (
    <List className={classes.root}>
      {listData.map(item=>(<ListItem alignItems="flex-start" component={Card} key={item.customer_id}> 
        <ListItemAvatar>
            <Link to={'/m'}>
          <Avatar alt="Remy Sharp" src={item.customer_pic_url} />
          </Link>
        </ListItemAvatar>
        <ListItemText
          primary={<Typography component="span" className={classes.inline} color="textPrimary"  fontSize="smaller">{item.customer_name}</Typography>}
          secondary={
            <React.Fragment >
            <Typography component="span" className={classes.inline} color="textSecondary" fontSize="smaller">{item.date} </Typography>
              <Typography component="span" className={classes.inline} color="textPrimary"  fontSize="smaller">
                {item.detail}
              </Typography>
              
            </React.Fragment>
          }
          className={classes.inline}
        />
         <ListItemSecondaryAction>
        <ReactRating emptySymbol={<EmptyStar color="disabled"/>} fullSymbol={<StarIcon color="secondary"/>} initialRating={item.rating} readonly/>
        </ListItemSecondaryAction>
      </ListItem>))}
      
    </List>
  );
}

CommentList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CommentList);