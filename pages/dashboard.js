import { useAuth } from '@/lib/auth';
import { Button, Text, Code, Icon, Flex } from '@chakra-ui/core';
import EmptyState from '@/components/EmptyState';

const Dashboard = () => {
  const auth = useAuth();

  if (!auth.user) {
    return 'Loading...';
  }

  return <EmptyState />;
};

export default Dashboard;
