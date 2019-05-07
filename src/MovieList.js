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
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import movieData from './films1.json';


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

const Dialogstyles = {
    appBar: {
      position: 'relative',
    },
    flex: {
      flex: 1,
    },
    paper:{
      marginTop:10,
      marginLeft:20,
      marginRight:20,
      padding:40,
    }
  };
  
  function Transition(props) {
    return <Slide direction="up" {...props} />;
  }
  
  class FullScreenDialog extends React.Component {
    state = {
      open: false,
      currentMovie: null
    };
  
    componentDidMount(){
        this.setState({currentMovie: this.props.currentMovie})
    }

    componentWillReceiveProps(nextProps){
        this.setState({currentMovie:nextProps.currentMovie,})
        if(this.props.currentMovie !== nextProps.currentMovie) this.handleClickOpen();
    }

    

    handleClickOpen = () => {
      this.setState({ open: true });
    };
  
    handleClose = () => {
      this.setState({ open: false });
    };
  
    render() {

      const { classes } = this.props;
      return (
        <div>
            <Button variant="contained" color="secondary" onClick={this.handleClickOpen}>
          Detail
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
                  Current Movie ID : {this.props.currentMovie._id}

                </Typography>
                
                <Button color="inherit" onClick={this.handleClose}>
                  Close
                </Button>
              </Toolbar>
            </AppBar>
            <Paper className={classes.paper} elevation={1}>
        <Typography variant="h5" component="h3">
          {this.props.currentMovie.title}
        </Typography>
        <br/>
        <Typography >
          Genres : {this.props.currentMovie.genres.map(genre=>genre+" ")}
        </Typography>
        <br/>
        <Typography >
          Directors : {this.props.currentMovie.directors.map(director=>director.name+" ")}
        </Typography>
        <br/>
        <Typography >
          Ratings : {this.props.currentMovie.rating.average}
        </Typography>
        <br/>
        <Typography >
          Poster : <img src={this.props.currentMovie.poster} alt = {this.props.currentMovie.poster}/>
        </Typography>
        <br/>
        <Typography >
          Country : {this.props.currentMovie.countries.map(c=>c+' ')}
        </Typography>
        <br/>
        <Typography >
          Actors : {this.props.currentMovie.casts.map(cast=>cast.name+" ")}
        </Typography>
        <br/>
        <Typography >
          Duration : {this.props.currentMovie.duration}
        </Typography>
        <br/>
        <Typography >
          Summary : {this.props.currentMovie.summary}
        </Typography>
      </Paper>
          </Dialog>
        </div>
      );
    }
  }
  
  FullScreenDialog.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  const MovieDialog =  withStyles(Dialogstyles, { withTheme: true })(FullScreenDialog);




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

  state = {
    rows: movieData,
    page: 0,
    rowsPerPage: 10,
    currentMovie: null,
  };

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ page: 0, rowsPerPage: event.target.value });
  };

  handleSelectMovie = (event, row) =>{
    this.setState({currentMovie : event.target})
    console.log(row)
  }

  render() {
    const { classes } = this.props;
    const { rows, rowsPerPage, page } = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

    return (

      
        <div className={classes.tableWrapper}>
          <Table className={classes.table}>
          <TableHead>
          <TableRow>
            <TableCell>Movie Name</TableCell>
            <TableCell align="right">Publish Date</TableCell>
            <TableCell align="right">Country</TableCell>
            <TableCell align="right">More</TableCell>

          </TableRow>
          </TableHead>
            <TableBody>
              {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => (
                <TableRow key={row._id} hover={true}>
                
                  <TableCell component="th" scope="row">
                    {row.title} 
                  </TableCell>
                  <TableCell align="right">{row.pubdate}</TableCell>
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
                  count={rows.length}
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

    );
  }
}

MovieList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MovieList);