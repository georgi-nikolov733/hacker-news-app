import { Fab, useScrollTrigger, Zoom } from '@material-ui/core';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import React from 'react';
import { useStyles } from './BackToTop.styles';

interface BackToTopProps {
  anchor: string;
}

export const BackToTop: React.FC<BackToTopProps> = ({
  anchor,
}: BackToTopProps) => {
  const classes = useStyles();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const destination = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector(`#${anchor}`);

    if (destination) {
      destination.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div className={classes.root} onClick={handleClick} role="presentation">
        <Fab className={classes.fab} size="medium" disableRipple>
          <KeyboardArrowUpIcon className={classes.icon} />
        </Fab>
      </div>
    </Zoom>
  );
};
