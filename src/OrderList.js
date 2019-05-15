import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';

import LinearProgress from '@material-ui/core/LinearProgress'

import fakeCommodity from './DataModels/Commodity.json';
import MovieDialog from './PageOrderDetail'


const actionsStyles = theme => ({
  root: {
    flexShrink: 0,
    color: theme.palette.text.secondary,
    marginLeft: theme.spacing.unit * 2.5,
  },
});

class TablePaginationActions extends React.Component {

  

  handleFirstPageButtonClick = event => {
    this.props.onChangePage(event, 0);
  };

  handleBackButtonClick = event => {
    this.props.onChangePage(event, this.props.page - 1);
  };

  handleNextButtonClick = event => {
    this.props.onChangePage(event, this.props.page + 1);
  };

  handleLastPageButtonClick = event => {
    this.props.onChangePage(
      event,
      Math.max(0, Math.ceil(this.props.count / this.props.rowsPerPage) - 1),
    );
  };

  render() {
    const { classes, count, page, rowsPerPage, theme } = this.props;

    return (
      <div className={classes.root}>
        <IconButton
          onClick={this.handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label="First Page"
        >
          {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
        </IconButton>
        <IconButton
          onClick={this.handleBackButtonClick}
          disabled={page === 0}
          aria-label="Previous Page"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
        </IconButton>
        <IconButton
          onClick={this.handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="Next Page"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </IconButton>
        <IconButton
          onClick={this.handleLastPageButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="Last Page"
        >
          {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
        </IconButton>
      </div>
    );
  }
}

TablePaginationActions.propTypes = {
  classes: PropTypes.object.isRequired,
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  theme: PropTypes.object.isRequired,
};

const TablePaginationActionsWrapped = withStyles(actionsStyles, { withTheme: true })(
  TablePaginationActions,
);


let counter = 0;


const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
  },
  table: {
    minWidth: 500,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
});

class MovieList extends React.Component {
constructor(){
  super();
  this.handleSelectMovie = this.handleSelectMovie.bind(this);
}

 getPage(num){
  fetch('/getmovies/'+num, {
    method: "GET",
    headers: new Headers({
      "UserId":"admin",
      "Username":"admin",
      "Date":'date',
  })
  }).then(response => {
    let jsonData=response.json();
    return jsonData;
  }).then(
    jsons=>{
      this.state.rows=jsons;
      this.setState({rows:jsons},()=>this.setState({onquery:false}))
    }
  ).catch(err => {
    console.error(`Request failed. Url = '/getmovies' . Message = ${err}`);
    this.state.rows=fakeCommodity;
    this.setState({rows:fakeCommodity},()=>this.setState({onquery:false}))
    return {error: {message: "Request failed."}};
  })
}


componentDidMount(){
  this.getPage(0);
}
  

  state = {
    rows: [],
    page: 0,
    rowsPerPage: 10,
    currentMovie: null,
    onquery:true,
  };

  handleChangePage = (event, page) => {
    this.setState({onquery:true},()=>this.setState({ page },()=>this.getPage(page)))
    
  };

  handleChangeRowsPerPage = event => {
    this.setState({ page: 0, rowsPerPage: event.target.value });
  };

  handleSelectMovie = (event, row) =>{
    this.setState({currentMovie : event.target})
    console.log(row)
  };

  render() {
    const { classes } = this.props;
    const { rows, rowsPerPage, page } = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, 100000);

    return (
      <Paper className={classes.root}>
      <div>{this.state.onquery?<LinearProgress variant='query'></LinearProgress>:<div/>}</div>
        <div className={classes.tableWrapper}>
          <Table className={classes.table}>
          <TableHead>
          <TableRow>
            <TableCell>商品名称</TableCell>
            <TableCell align="right">单价</TableCell>
            <TableCell align="right">类型</TableCell>
            <TableCell align="right">更多</TableCell>

          </TableRow>
          </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow key={row.id} hover={true}>
                
                  <TableCell component="th" scope="row">
                    {row.name} 
                  </TableCell>
                  <TableCell align="right">{row.price}</TableCell>
                  <TableCell align="right" >{row.countries}</TableCell>
                  <TableCell style={{width:"5rem"}}>
                  <MovieDialog currentMovie ={row}/>
                  </TableCell>
                </TableRow>
              ))}
              {emptyRows > 0 && (
                <TableRow style={{ height: 48 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
            <TableFooter align="right">
              <TableRow align="right"> 
                <TablePagination
                  rowsPerPageOptions={[10]}
                  colSpan={3}
                  count={1000}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    native: true,
                  }}
                  onChangePage={this.handleChangePage}
                  onChangeRowsPerPage={this.handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActionsWrapped}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      </Paper>
    );
  }
}

MovieList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MovieList);