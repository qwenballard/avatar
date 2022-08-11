import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Button,
  VStack,
} from '@chakra-ui/react';
import { ComponentType } from 'react';
import { FallbackProps } from 'react-error-boundary';

export const ErrorFallback: ComponentType<FallbackProps> = ({
  error,
  resetErrorBoundary,
}) => {
  return (
    <VStack>
      <Alert
        status="error"
        variant="subtle"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        height="350px"
        width="70%"
        mt="40px"
      >
        <AlertIcon boxSize="40px" mr={0} />
        <AlertTitle mt={4} mb={1} fontSize="lg">
          Oops! Something went wrong!
        </AlertTitle>
        <AlertDescription maxWidth="sm" mb="20px">
          Please try refreshing the page or clicking the button below to be
          redirected back to the home page.
        </AlertDescription>
        <Button
          onClick={resetErrorBoundary}
          size="md"
          height="48px"
          width="100px"
          border="2px"
          borderColor="red.500"
          colorScheme="red"
        >
          Go Home
        </Button>
      </Alert>
    </VStack>
  );
};
