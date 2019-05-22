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
import fakeOrderList from './DataModels/OrderList.json';
import LinearProgress from '@material-ui/core/LinearProgress'
import Typography from '@material-ui/core/Typography'

import PageOrderDetail from './PageOrderDetail'


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
   
  let queryUrl = this.props.type==="commodity"?
   `/getcommodityorderlist?page=${num}&id=${this.props.thisId}`:'/getmerchantorderlist?page='+num;
  

  fetch(queryUrl, {
    method: "GET",
    headers: new Headers({
      "X_Auth_Token":localStorage.getItem("token")
  })
  }).then(response => {
    let jsonData=response.json();
    return jsonData;
  }).then(
    
    // jsons=>{
    //   this.state.rows=jsons;
    //   // this.setState({rows:jsons},()=>this.setState({onquery:false}))
    // }
    
  ).catch(err => {
    console.error(`Request failed. Url = '/getmovies' . Message = ${err}`);
    this.state.rows=fakeOrderList;
    this.setState({rows:fakeOrderList},()=>this.setState({onquery:false}))
    return {error: {message: "Request failed."}};
  })
}


componentDidMount(){
  this.getPage(0);
}
  

  state = {
    rows:fakeOrderList,
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
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length);

    return (
      <Paper className={classes.root}>
      <div>{this.state.onquery?<LinearProgress variant='query'></LinearProgress>:<div/>}</div>
        <div className={classes.tableWrapper}>
          <Table className={classes.table}>
          <TableHead>
          <TableRow>
            <TableCell>订单号</TableCell>
            <TableCell align="right">包含商品</TableCell>
            <TableCell align="right">所属店面</TableCell>
            <TableCell align="right">金额</TableCell>
            <TableCell align="right">更多</TableCell>

          </TableRow>
          </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow key={row.orderId} hover={true}>
                
                  <TableCell component="th" scope="row">
                    {row.orderId} 
                  </TableCell>
                  <TableCell align="right"><span>{row.list[0].commodityName}</span>{row.list.length>1?<Typography component="span" color="textSecondary" fontSize="smaller">...共{row.list.length}件</Typography>:<div/>}</TableCell>
                  <TableCell align="right">{row.shopName}</TableCell>
                  <TableCell align="right" >{row.totalPrice+"元"}</TableCell>
                  <TableCell align="right" style={{width:"5rem"}}>
                  <PageOrderDetail thisOrder ={row}/>
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
  type: PropTypes.string.isRequired,
  thisId: PropTypes.number.isRequired,
};

export default withStyles(styles)(MovieList);