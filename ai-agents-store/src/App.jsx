import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  Box,
  Heading,
  Container,
  SimpleGrid,
} from '@chakra-ui/react';
import ResumeAnalyzer from './components/ResumeAnalyzer';
import CodeReviewer from './components/CodeReviewer';
import ContentWriter from './components/ContentWriter';
import HowToCode from './components/HowToCode';
import AgentCard from './components/AgentCard';
import Header from './components/Header';
import Footer from './components/Footer';

const Home = () => (
  <Container maxW="container.xl" py={10}>
    <Heading textAlign="center" mb={10}>AI Agents Marketplace</Heading>
    <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
      <AgentCard
        title="Resume Analyser"
        description="Upload your resume and get personalized career advice"
        image="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
        to="/resume-analyzer"
      />
      <AgentCard
        title="Code Reviewer"
        description="Get expert code reviews and improvement suggestions"
        image="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        to="/code-reviewer"
      />
      <AgentCard
        title="Content Writer"
        description="Create engaging content for your projects"
        image="https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
        to="/content-writer"
      />
      <AgentCard
        title="How to Code"
        description="Learn programming with personalized guidance and examples"
        image="https://images.unsplash.com/photo-1515879218367-8466d9108034?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
        to="/how-to-code"
      />
    </SimpleGrid>
  </Container>
);

function App() {
  return (
    <Box minH="100vh" bg="gray.50" display="flex" flexDirection="column">
      <Header />
      <Box flex="1" pt="60px">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume-analyzer" element={<ResumeAnalyzer />} />
          <Route path="/code-reviewer" element={<CodeReviewer />} />
          <Route path="/content-writer" element={<ContentWriter />} />
          <Route path="/how-to-code" element={<HowToCode />} />
        </Routes>
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
