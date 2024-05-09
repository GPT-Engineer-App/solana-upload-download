import { useState } from "react";
import { Container, VStack, Button, Text, Input, useToast } from "@chakra-ui/react";
import { FaWallet, FaUpload, FaDownload } from "react-icons/fa";

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [file, setFile] = useState(null);
  const toast = useToast();

  const handleLogin = () => {
    // Placeholder for Phantom wallet login logic
    setIsLoggedIn(true);
    toast({
      title: "Logged in",
      description: "You have successfully logged in with your Phantom Wallet.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = () => {
    // Placeholder for file upload logic
    toast({
      title: "File Uploaded",
      description: "Your file has been uploaded to Solana Devnet.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  const handleDownload = () => {
    // Placeholder for file download logic
    toast({
      title: "File Downloaded",
      description: "Your file has been downloaded from Solana Devnet.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        {!isLoggedIn ? (
          <Button leftIcon={<FaWallet />} colorScheme="teal" onClick={handleLogin}>
            Login with Phantom Wallet
          </Button>
        ) : (
          <>
            <Text fontSize="xl">Welcome! You are logged in.</Text>
            <Input type="file" onChange={handleFileChange} placeholder="Upload file" size="md" />
            <Button leftIcon={<FaUpload />} colorScheme="blue" onClick={handleUpload} isDisabled={!file}>
              Upload to Solana Devnet
            </Button>
            <Button leftIcon={<FaDownload />} colorScheme="green" onClick={handleDownload}>
              Download from Solana Devnet
            </Button>
          </>
        )}
      </VStack>
    </Container>
  );
};

export default Index;
