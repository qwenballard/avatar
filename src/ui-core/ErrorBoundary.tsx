import { ComponentType } from 'react';
import { FallbackProps } from 'react-error-boundary';

export const ErrorFallback: ComponentType<FallbackProps> = ({ error }) => {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <p>{error?.message}</p>
      {/* <button onClick={resetErrorBoundary}>Try again</button> */}
    </div>
  );
};
