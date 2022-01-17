import { Box, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/system';
import { Logo } from './Logo';
import { ActivationForm } from './ActivationForm';

export const Activate = () => {
  const {
    palette: {
      primary: { main, A700 },
    },
  } = useTheme();

  return (
    <Grid
      container
      sx={{
        margin: '0 auto',
        px: [5, null, null, 0],
        mt: [10, null, null, 0],
        height: [null, null, null, '100%'],
      }}
    >
      <Grid
        item
        xs={12}
        lg={7}
        sx={{
          textAlign: ['center', null, null, 'left'],
          background: [
            null,
            null,
            null,
            `linear-gradient(42deg, ${main} 0%, ${A700} 100%)`,
          ],
          pt: [null, null, null, 3],
          pl: [null, null, null, 1],
        }}
      >
        <Logo />
      </Grid>
      <Grid
        item
        xs={12}
        lg={5}
        sx={{
          margin: '0 auto',
          pt: [null, null, null, 5],
          boxShadow: [null, null, null, '-7px 0px 16px -5px rgba(0,0,0,0.5)'],
          px: [null, null, null, 5],
        }}
      >
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="h4"
            component="h4"
            mb={1}
            fontSize={[null, null, null, '1.5rem']}
          >
            Још само један корак.
          </Typography>
          <Typography variant="subtitle1" component="p" mb={6}>
            Унесите шестоцифрен број који сте добили на електронској пошти.
          </Typography>
        </Box>
        <Box sx={{ maxWidth: ['600px', '600px', '400px'], mx: 'auto' }}>
          <ActivationForm />
        </Box>
      </Grid>
    </Grid>
  );
};
