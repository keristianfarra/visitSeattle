import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';

// import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import LeftArrow from './LeftArrow.png';
import RightArrow from './RightArrow.png';

const styles = theme => ({
  fab: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});
function FloatingActionButtons(props) {
    const { classes } = props;
    return (
      <div>
        <Fab color="primary" aria-label="Back" className={classes.fab}>
          <LeftArrow />
        </Fab>
        <Fab color="primary" aria-label="Back" className={classes.fab}>
          <RightArrow />
        </Fab>
        <Fab color="primary" aria-label="Forward" className={classes.fab}>
          <Icon>edit_icon</Icon>
        </Fab>
        
      </div>
    );
  }
  
  FloatingActionButtons.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(FloatingActionButtons);