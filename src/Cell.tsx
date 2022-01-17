import { Box, useTheme } from '@mui/system';
import { FunctionComponent } from 'react';

interface CellProps {
  onCellFocus: () => void;
  isCellActive: boolean;
}

export const Cell: FunctionComponent<CellProps> = ({
  isCellActive,
  onCellFocus,
  children,
}) => {
  const {
    palette: {
      grey,
      primary: { main },
    },
  } = useTheme();
  return (
    <Box
      onClick={onCellFocus}
      sx={{
        flexBasis: '14%',
        height: '40px',
        background: grey[100],
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: isCellActive ? `1px solid ${main}` : `1px solid ${grey[200]}`,
      }}
    >
      {children}
    </Box>
  );
};
