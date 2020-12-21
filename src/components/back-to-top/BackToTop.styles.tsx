import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { COLOR_ORANGE } from '../../constants/colors.constants';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
    fab: {
      color: theme.palette.common.white,
      backgroundColor: COLOR_ORANGE,
      '&:hover': {
        backgroundColor: COLOR_ORANGE,
      },
    },
    icon: {
      fontSize: 36,
    },
  })
);
