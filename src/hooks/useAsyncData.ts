import React, { use } from 'react';

// React 19: Custom hook using the new 'use' hook for async data
export function useAsyncData<T>(promise: Promise<T>): T {
  return use(promise);
}

// Example usage for data fetching
export function useUserData(userId: string) {
  const fetchUserData = async () => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 100));
    return {
      id: userId,
      name: 'John Escalona',
      role: 'Software Developer',
      experience: '4 years'
    };
  };

  return useAsyncData(fetchUserData());
}

// React 19: Hook for handling loading states
export function useLoadingState() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<Error | null>(null);

  const executeAsync = async (asyncFn: () => Promise<any>) => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await asyncFn();
      return result;
    } catch (err) {
      setError(err as Error);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, error, executeAsync };
} 