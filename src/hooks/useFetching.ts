import { useState } from 'react';

// interface IProps {
//   fetching: () => Promise<void>;
//   isLoading: boolean;
//   isError: boolean;
// }

export const useFetching = (callback: {
  (limit: number, page: number): Promise<void>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (limit: number, page: number): any;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setError] = useState(false);

  const fetching: (limit: number, page: number) => Promise<void> = async (
    ...args
  ) => {
    try {
      setIsLoading(true);
      await callback(...args);
    } catch {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return [fetching, isLoading, isError] as const;
};

export const useFetchingById = (callback: {
  (id: number): Promise<void>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (id: number): any;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setError] = useState(false);

  const fetching: (id: number) => Promise<void> = async (...args) => {
    try {
      setIsLoading(true);
      await callback(...args);
    } catch {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return [fetching, isLoading, isError] as const;
};
