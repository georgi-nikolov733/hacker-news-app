import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { COLOR_ORANGE } from '../../constants/colors.constants';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    more: {
      fontWeight: 500,
      cursor: 'pointer',
      color: COLOR_ORANGE,
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'none',
      },
    },
    spinner: {
      color: COLOR_ORANGE,
    },
  })
);
