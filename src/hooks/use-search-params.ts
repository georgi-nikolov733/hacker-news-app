import { useLocation } from 'react-router-dom';

export const useSearchParams = (): URLSearchParams =>
  new URLSearchParams(useLocation().search);
