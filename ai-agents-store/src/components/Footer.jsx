import React from 'react';
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  Image,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
  return (
    <Box
      bg="gray.50"
      color="gray.700"
      borderTop="1px"
      borderColor="gray.200"
      py={10}
    >
      <Container maxW="container.xl">
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          <VStack align="start" spacing={4}>
            <RouterLink to="/">
              <Image
                src="/logoGLL.png"
                alt="Logo"
                height="40px"
                objectFit="contain"
              />
            </RouterLink>
            <Text fontSize="sm">
              Empowering developers with AI-powered tools and solutions.
            </Text>
          </VStack>

          <VStack align="start" spacing={4}>
            <Text fontWeight="bold">Products</Text>
            <Stack spacing={2}>
              <Link as={RouterLink} to="/resume-analyzer" fontSize="sm">
                Resume Analyzer
              </Link>
              <Link as={RouterLink} to="/code-reviewer" fontSize="sm">
                Code Reviewer
              </Link>
              <Link as={RouterLink} to="/content-writer" fontSize="sm">
                Content Writer
              </Link>
              <Link as={RouterLink} to="/how-to-code" fontSize="sm">
                How to Code
              </Link>
            </Stack>
          </VStack>

          <VStack align="start" spacing={4}>
            <Text fontWeight="bold">Company</Text>
            <Stack spacing={2}>
              <Link href="#" fontSize="sm">
                About Us
              </Link>
              <Link href="#" fontSize="sm">
                Contact
              </Link>
              <Link href="#" fontSize="sm">
                Privacy Policy
              </Link>
              <Link href="#" fontSize="sm">
                Terms of Service
              </Link>
            </Stack>
          </VStack>
        </SimpleGrid>

        <Box
          borderTop="1px"
          borderColor="gray.200"
          mt={8}
          pt={8}
          textAlign="center"
        >
          <Text fontSize="sm">
            © {new Date().getFullYear()} AI Agents Store. All rights reserved.
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 