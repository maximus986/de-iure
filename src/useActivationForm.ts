import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const NUMBERS_REGEX = /[^0-9]/g;

export const useActivationForm = (): [
  string,
  (code: string) => void,
  (event: any) => void,
  () => void
] => {
  const [activationCode, setActivationCode] = useState<string>('');

  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = (codeToActivate: string) => {
    if (codeToActivate.length === 6) {
      console.log({ code: codeToActivate });
    }
  };

  useEffect(() => {
    const code = searchParams.get('code');

    if (!code) {
      return;
    }
    if (new RegExp(NUMBERS_REGEX).test(code)) {
      alert('Код за активацију мора садржати само бројеве!');
      setSearchParams('');
      return;
    }
    if (code.length > 6) {
      alert('Код за активацију мора имати тачно 6 цифара');
      setSearchParams('');
      return;
    }
    setActivationCode(code);
    handleSubmit(code);
    // Simulate clearing activation code after the request is submitted
    const id = setTimeout(() => {
      setActivationCode('');
    }, 2000);

    return () => clearTimeout(id);
  }, [searchParams, setSearchParams]);

  const validateActivationCode = (code: string): string => {
    return code.replace(NUMBERS_REGEX, '').replace(/(\..*)\./g, '$1');
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newInputVal = validateActivationCode(event.target.value);
    setActivationCode(newInputVal);
  };

  const reset = () => {
    setActivationCode('');
  };

  return [activationCode, handleSubmit, handleInputChange, reset];
};
