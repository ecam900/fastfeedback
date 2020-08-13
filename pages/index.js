import { useAuth } from '@/lib/auth';
import { Button, Text, Code, Icon, Flex } from '@chakra-ui/core';
import EmptyState from '@/components/EmptyState';

const Home = () => {
  const auth = useAuth();

  return (
    <Flex
      as='main'
      direction='column'
      align='center'
      justify='center'
      h='100vh'
    >
      <Icon color='black' name='logo' size='64px' />
      {auth.user ? (
        <Button as='a' href='/dashboard'>
          View Dashboard
        </Button>
      ) : (
        <Button mt={4} size='sm' onClick={(e) => auth.signinWithGithub()}>
          Sign In
        </Button>
      )}
    </Flex>
  );
};

export default Home;
