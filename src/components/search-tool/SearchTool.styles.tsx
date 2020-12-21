import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { COLOR_MEDIUM_GREY } from '../../constants/colors.constants';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    select: {
      marginRight: theme.spacing(1),
      fontSize: 16,
      fontWeight: 500,
      color: COLOR_MEDIUM_GREY,
    },
    selectRoot: {
      '&:focus': {
        backgroundColor: 'inherit',
      },
    },
    selectIcon: {
      color: COLOR_MEDIUM_GREY,
    },
  })
);
