import {
  Flex,
  Icon,
  Link,
  Stack,
  Avatar,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  Box,
  Text,
  Button,
} from '@chakra-ui/core';
import { auth } from 'firebase';
import { useAuth } from '@/lib/auth';

const DashboardShell = ({ children }) => {
  const { user, signout } = useAuth();
  return (
    <Flex flexDirection='column'>
      <Flex
        backgroundColor='white'
        alignItems='center'
        justifyContent='space-between'
        py={4}
        px={8}
      >
        <Stack isInline spacing={4} align='center'>
          <Icon color='black' name='logo' size='24px' />
          <Link>Sites</Link>
          <Link>Feedback</Link>
        </Stack>
        <Flex justifyContent='center' alignItems='center'>
          <Button variant='ghost' mr={2} onClick={() => signout()}>
            Log Out
          </Button>
          <Avatar size='sm' src={user.photoUrl} />
        </Flex>
      </Flex>
      <Flex backgroundColor='gray.100' p={8} height='100vh'>
        <Flex
          maxWidth={800}
          w='100%'
          ml='auto'
          mr='auto'
          direction='column'
        >
          <Breadcrumb>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink color='gray.700' fontSize='sm'>
                Sites
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Heading color='black' mb={4}>
            Sites
          </Heading>
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
};
export default DashboardShell;
