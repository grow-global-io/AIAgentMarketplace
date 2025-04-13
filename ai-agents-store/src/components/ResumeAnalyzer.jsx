import React, { useState } from 'react';
import {
  Box,
  Button,
  Input,
  Textarea,
  VStack,
  Text,
} from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';

const ResumeAnalyzer = () => {
  const [resume, setResume] = useState('');
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const toast = useToast();

  const handleResumeUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setResume(e.target.result);
        toast({
          title: 'Resume uploaded successfully',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
      };
      reader.readAsText(file);
    }
  };

  const handleSendMessage = () => {
    if (!input.trim()) return;
    
    const newMessage = {
      text: input,
      sender: 'user',
    };
    
    setMessages([...messages, newMessage]);
    setInput('');
    
    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        text: "I'm analyzing your resume and will help you with career advice. What specific questions do you have?",
        sender: 'ai',
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  return (
    <Box p={4} maxW="800px" mx="auto">
      <VStack spacing={4} align="stretch">
        <Text fontSize="2xl" fontWeight="bold">Resume Analyzer AI</Text>
        
        <Box>
          <Input
            type="file"
            accept=".txt,.pdf,.doc,.docx"
            onChange={handleResumeUpload}
            mb={4}
          />
          {resume && (
            <Text color="green.500">Resume uploaded successfully!</Text>
          )}
        </Box>

        <Box
          borderWidth="1px"
          borderRadius="lg"
          p={4}
          h="400px"
          overflowY="auto"
          bg="gray.50"
        >
          {messages.map((message, index) => (
            <Box
              key={index}
              alignSelf={message.sender === 'user' ? 'flex-end' : 'flex-start'}
              bg={message.sender === 'user' ? 'blue.500' : 'gray.200'}
              color={message.sender === 'user' ? 'white' : 'black'}
              p={3}
              borderRadius="lg"
              mb={2}
              maxW="80%"
            >
              {message.text}
            </Box>
          ))}
        </Box>

        <Box display="flex" gap={2}>
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          <Button
            colorScheme="blue"
            onClick={handleSendMessage}
          >
            Send
          </Button>
        </Box>
      </VStack>
    </Box>
  );
};

export default ResumeAnalyzer; 