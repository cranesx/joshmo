import { Box, Heading, Divider } from "@chakra-ui/react";
import OrderForm from "./components/OrderForm";
import OrderList from "./components/OrderList";

function App() {
  return (
    <Box maxW="800px" mx="auto" p={6}>
      <Heading mb={4} textAlign="center">
        Order Management
      </Heading>
      <OrderForm />
      <Divider my={8} />
      <OrderList />
    </Box>
  );
}

export default App;
