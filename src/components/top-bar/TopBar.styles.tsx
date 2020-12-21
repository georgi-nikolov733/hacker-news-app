import { createStyles, fade, makeStyles, Theme } from '@material-ui/core';
import { COLOR_ORANGE } from '../../constants/colors.constants';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    appBar: {
      backgroundColor: COLOR_ORANGE,
    },
    appBarContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    title: {
      color: theme.palette.common.white,
      marginLeft: -1,
      marginRight: theme.spacing(3),
      textDecoration: 'none',
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(4),
      [theme.breakpoints.up('sm')]: {
        marginRight: theme.spacing(3),
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputField: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      fontWeight: 500,
      width: '10ch',
      [theme.breakpoints.up('sm')]: {
        width: '16ch',
      },
    },
    tab: {
      fontSize: 16,
      minWidth: 40,
      width: 80,
    },
    tabIndicator: {
      backgroundColor: theme.palette.common.white,
      transition: 'unset',
    },
  })
);
