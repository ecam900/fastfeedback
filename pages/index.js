import { useAuth } from '@/lib/auth';
import { Button, Heading, Text, Code } from '@chakra-ui/core';

const Home = () => {
  const auth = useAuth();

  return (
    <div>
      <main>
        <Heading>Fast Feedback</Heading>
        <Text>
          Current user:{' '}
          <Code>{auth?.user ? auth.user.email : 'None'}</Code>
        </Text>
        {auth?.user ? (
          <Button onClick={(e) => auth.signout()}>Sign Out</Button>
        ) : (
          <Button onClick={(e) => auth.signinWithGithub()}>Sign In</Button>
        )}
      </main>
    </div>
  );
};

export default Home;
