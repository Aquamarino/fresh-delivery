import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

const styles = {
  root: {
    padding: '4px 4px',
    border: "4px 4px",
    display: 'flex',
    alignItems: 'center',
    width: "100%",
    marginRight: 16,
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4,
  },
  selectEmpty:{
    marginLeft:8,
  }
};



class SearchBar extends React.Component {
    state = {
        age: '',
        name: '',
        labelWidth: 0,
      };
    
    handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };
    render(){

    
  const { classes } = this.props;

  const merchantStyle = <FormControl className={classes.formControl}>
  <span> </span><NativeSelect
    value={this.state.age}
    onChange={this.handleChange('age')}
    name="age"
    className={classes.selectEmpty}
  >
    <option value="user">用户名</option>
    <option value="commodity">商品名</option>
    <option value="type">商品类型</option>
  </NativeSelect>
</FormControl>

  const itemList = <div></div>    
  

  return (
    <div>
    <Paper className={classes.root} elevation={1}>
      {merchantStyle}
      <InputBase className={classes.input} placeholder="开始搜索" />
      <IconButton className={classes.iconButton} aria-label="Search">
        <SearchIcon />
      </IconButton>
    </Paper>
    <Divider/>

    </div>
  );
    }
}

SearchBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchBar);