import { Typography } from '@material-ui/core';
import React from 'react';
import { useStyles } from './ErrorMessage.styles';

interface ErrorMessageProps {
  text: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({
  text,
}: ErrorMessageProps) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.message} variant="body1">
        {text}
      </Typography>
    </div>
  );
};
