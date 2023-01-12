import React from 'react';
import { Box } from '@chakra-ui/react';

function Tile({ children, key, bg, click }) {
  return (
    <Box
      key={key}
      bg={bg}
      onClick={click}
      _hover={{ opacity: '0.5' }}
      h="100%"
      maxW="sm"
      w="100%"
      borderWidth="1px"
      borderRadius="lg"
    >
      {children}
    </Box>
  );
}

export default Tile;
