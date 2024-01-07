import { useEffect, useRef } from 'react';

export const useObserver = (
  ref: React.MutableRefObject<HTMLDivElement | null>,
  canLoad: boolean,
  isLoading: boolean,
  callback: () => void
) => {
  const observer = useRef(null);
  useEffect(() => {
    if (isLoading) {
      return;
    }
    if (observer.current) observer.current.disconnect();
    const cb = function (entries: IntersectionObserverEntry[]) {
      if (entries[0].isIntersecting && canLoad) {
        callback();
      }
    };
    observer.current = new IntersectionObserver(cb);
    observer.current.observe(ref.current);
  }, [isLoading]);
};
