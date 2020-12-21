import { createMuiTheme } from '@material-ui/core';
import { COLOR_LIGHT_BEIGE } from './constants/colors.constants';

export const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundColor: COLOR_LIGHT_BEIGE,
        },
      },
    },
  },
});
