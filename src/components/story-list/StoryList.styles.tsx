import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { COLOR_MEDIUM_GREY } from '../../constants/colors.constants';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    list: {
      padding: 0,
    },
    listItem: {
      paddingLeft: 0,
      paddingRight: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      '&:last-child': {
        paddingBottom: 0,
      },
    },
    story: {
      display: 'flex',
      alignItems: 'center',
    },
    title: {
      fontWeight: 500,
      marginRight: theme.spacing(1),
    },
    titleLink: {
      color: theme.palette.common.black,
      textDecoration: 'none',
    },
    caption: {
      color: COLOR_MEDIUM_GREY,
    },
    captionLink: {
      color: COLOR_MEDIUM_GREY,
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  })
);
