import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function RadioGroupRating() {
  const [value, setValue] = React.useState<number | null>(2);

  return (
    <Box
      alignItems="center"
      justifyContent="center"
      alignContent="center"

    >
      <Typography component="legend" variant="h3">Smakował Ci obiad?</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        size="large"
      />
    </Box>
  );
}