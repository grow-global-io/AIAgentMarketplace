import React from 'react';
import { Box, HStack, Button, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Box
      as="header"
      position="fixed"
      top={0}
      left={0}
      right={0}
      bg="white"
      boxShadow="sm"
      zIndex={1000}
      px={4}
      py={2}
    >
      <HStack justify="space-between" maxW="container.xl" mx="auto">
        <Link to="/">
          <Image
            src="/logoGLL.png"
            alt="Logo"
            height="40px"
            objectFit="contain"
            cursor="pointer"
            _hover={{ opacity: 0.8 }}
          />
        </Link>
        <HStack spacing={4}>
          <Button variant="ghost">Login</Button>
          <Button colorScheme="blue">Sign Up</Button>
        </HStack>
      </HStack>
    </Box>
  );
};

export default Header; 