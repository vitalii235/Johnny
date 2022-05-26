import {useEffect} from 'react';

export const useDebounce = ({delay = 500, cb, trigger}) => {
  useEffect(() => {
    const handler = setTimeout(() => {
      cb && cb();
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [trigger, delay]);
};
