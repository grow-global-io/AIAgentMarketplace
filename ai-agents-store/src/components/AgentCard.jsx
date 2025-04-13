import React from 'react';
import { Card, CardBody, Image, Heading, Text, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const AgentCard = ({ title, description, image, to }) => {
  return (
    <Card
      as={RouterLink}
      to={to}
      _hover={{ transform: 'scale(1.02)', transition: 'transform 0.2s' }}
      cursor="pointer"
    >
      <CardBody>
        <Image
          src={image}
          alt={title}
          borderRadius="lg"
          height="200px"
          width="100%"
          objectFit="cover"
        />
        <Heading size="md" mt={4}>{title}</Heading>
        <Text mt={2}>{description}</Text>
      </CardBody>
    </Card>
  );
};

export default AgentCard; 