import { Box, Container, Flex, Heading, HStack, Link, Text, VStack } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl">
      {/* Header */}
      <Flex as="header" py={4} justify="space-between" align="center" borderBottom="1px" borderColor="gray.200">
        <Heading as="h1" size="lg">Financial Times</Heading>
        <HStack spacing={4}>
          <Link href="#">Home</Link>
          <Link href="#">World</Link>
          <Link href="#">Business</Link>
          <Link href="#">Tech</Link>
          <Link href="#">Science</Link>
          <Link href="#">Health</Link>
        </HStack>
      </Flex>

      {/* Main Content */}
      <Box as="main" py={8}>
        <VStack spacing={8} align="stretch">
          <Box>
            <Heading as="h2" size="md" mb={4}>Top Stories</Heading>
            <Text>Article 1</Text>
            <Text>Article 2</Text>
            <Text>Article 3</Text>
          </Box>
          <Box>
            <Heading as="h2" size="md" mb={4}>World News</Heading>
            <Text>Article 1</Text>
            <Text>Article 2</Text>
            <Text>Article 3</Text>
          </Box>
          <Box>
            <Heading as="h2" size="md" mb={4}>Business</Heading>
            <Text>Article 1</Text>
            <Text>Article 2</Text>
            <Text>Article 3</Text>
          </Box>
          <Box>
            <Heading as="h2" size="md" mb={4}>Technology</Heading>
            <Text>Article 1</Text>
            <Text>Article 2</Text>
            <Text>Article 3</Text>
          </Box>
        </VStack>
      </Box>

      {/* Footer */}
      <Flex as="footer" py={4} justify="space-between" align="center" borderTop="1px" borderColor="gray.200">
        <HStack spacing={4}>
          <Link href="#">About Us</Link>
          <Link href="#">Contact</Link>
          <Link href="#">Privacy Policy</Link>
        </HStack>
        <HStack spacing={4}>
          <Link href="#"><FaFacebook /></Link>
          <Link href="#"><FaTwitter /></Link>
          <Link href="#"><FaLinkedin /></Link>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Index;