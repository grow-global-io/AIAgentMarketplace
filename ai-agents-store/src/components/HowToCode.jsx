import React from 'react';
import { Box, Text, Image, VStack, Container } from '@chakra-ui/react';

const HowToCode = () => {
  return (
    <Container maxW="container.xl" py={10} h="100%">
      <VStack spacing={8} align="stretch" h="100%">
        <Text fontSize="3xl" fontWeight="bold" textAlign="center">How to Code AI</Text>
        <Text fontSize="xl" textAlign="center">
          This AI agent will help you learn programming with personalized guidance and examples.
        </Text>
        
        <Box borderRadius="lg" overflow="hidden" boxShadow="xl" flex="1">
          <Image
            src="https://images.unsplash.com/photo-1515879218367-8466d9108034?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
            alt="Programming demo"
            width="100%"
            height="100%"
            objectFit="cover"
          />
        </Box>

        <Text fontSize="lg" mt={4}>
          Our AI-powered coding tutor provides:
        </Text>
        <Box pl={4}>
          <Text>• Interactive coding exercises</Text>
          <Text>• Real-time feedback on your code</Text>
          <Text>• Personalized learning paths</Text>
          <Text>• Step-by-step explanations</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default HowToCode; 