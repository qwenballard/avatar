import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Image,
  VStack,
} from '@chakra-ui/react';
import { ComponentType } from 'react';
import { FallbackProps } from 'react-error-boundary';

export const ErrorFallback: ComponentType<FallbackProps> = ({ error }) => {
  return (
    <VStack>
      <Alert
        status="error"
        variant="subtle"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        height="200px"
        width="70%"
        mt="40px"
      >
        <AlertIcon boxSize="40px" mr={0} />
        <AlertTitle mt={4} mb={1} fontSize="lg">
          Oops! Something went wrong!
        </AlertTitle>
        <AlertDescription maxWidth="sm">
          Please try refreshing the page. If this issue persists, please email
          me at qwen.ballard@gmail.com
        </AlertDescription>
      </Alert>
      <Image
        mt="-100px"
        alt="Error Gif"
        objectFit="contain"
        src="errorImage.gif"
      />
    </VStack>
  );
};
