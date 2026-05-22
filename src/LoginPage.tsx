import { Button, Card, Heading, Input, VStack } from "@chakra-ui/react";
import { useState } from "react";

interface LoginPageProps {
  onLogin: () => void;
}

export const LoginPage = ({ onLogin }: LoginPageProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "admin" && password === "1234") {
      onLogin();
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <VStack minH="100vh" justify="center" padding={4} bg="bg" color="fg">
      <Card.Root
        width="100%"
        maxW="360px"
        bg="panel"
        borderWidth="1px"
        borderColor="border"
        boxShadow="0 20px 60px rgba(0, 0, 0, 0.45)"
      >
        <Card.Header>
          <Heading size="lg" textAlign="center">
            Login
          </Heading>
        </Card.Header>
        <Card.Body>
          <VStack gap={4}>
            <Input
              placeholder="Username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />

            <Input
              placeholder="Password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />

            <Button width="100%" onClick={handleLogin}>
              Login
            </Button>
          </VStack>
        </Card.Body>
      </Card.Root>
    </VStack>
  );
};
export default LoginPage;
