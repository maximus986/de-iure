import { Box, Button } from '@mui/material';
import { useCallback, useEffect, useRef, useState } from 'react';
import { ActivationInput } from './ActivationInput';
import { Cell } from './Cell';
import { useActivationForm } from './useActivationForm';

const CELL_COUNT = 6;

export const ActivationForm = () => {
  const [isActive, setActive] = useState(false);
  const [activationCode, handleSubmit, handleInputChange, reset] =
    useActivationForm();

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleFieldFocus = useCallback(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    handleFieldFocus();
  }, [handleFieldFocus]);

  return (
    <Box sx={{ position: 'relative' }}>
      <ActivationInput
        value={activationCode}
        onChange={handleInputChange}
        ref={inputRef}
        maxLength={CELL_COUNT}
        onFocus={(e) => {
          setActive(true);
          const value = e.target.value;
          e.target.setSelectionRange(value.length, value.length);
        }}
        onBlur={() => {
          setActive(false);
        }}
      />
      <Box
        onClick={() => handleFieldFocus()}
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          position: 'absolute',
          left: 0,
          right: 0,
        }}
      >
        {[...Array(CELL_COUNT)].map((_, i) => (
          <Cell
            isCellActive={
              (activationCode.length === i ||
                (activationCode.length === i + 1 && CELL_COUNT === i + 1)) &&
              isActive
            }
            onCellFocus={() => handleFieldFocus()}
            key={i}
          >
            {activationCode[i]}
          </Cell>
        ))}
      </Box>
      <Button
        variant="contained"
        fullWidth
        color="secondary"
        sx={{ mt: 8 }}
        disabled={activationCode.length !== 6}
        onClick={() => {
          handleSubmit(activationCode);
          reset();
        }}
      >
        АКТИВАЦИЈА
      </Button>
    </Box>
  );
};
