import React from "react";
import {
  Box,
  Input,
  Button,
  Textarea,
  Stack,
  Select,
  useToast,
  InputGroup,
  InputLeftAddon,
  SimpleGrid,
} from "@chakra-ui/react";
import useAuth from "../hooks/useAuth";
import { addTodo } from "../api/todo";
import { IoIosArrowRoundForward } from "react-icons/io";
const AddTodo = () => {
  const [legajo, setLegajo] = React.useState("");
  const [fullName, setFullname] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [status, setStatus] = React.useState("pending");
  const [isLoading, setIsLoading] = React.useState(false);

  const toast = useToast();

  const { isLoggedIn, user } = useAuth();

  const handleTodoCreate = async () => {
    if (!isLoggedIn) {
      toast({
        title: "You must be logged in to create a todo",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
      return;
    }
    setIsLoading(true);
    const todo = {
      title,
      description,
      status,
      userId: user.uid,
    };
    await addTodo(todo);
    setIsLoading(false);

    setTitle("");
    setDescription("");
    setStatus("pending");

    toast({ title: "Todo created successfully", status: "success" });
  };

  return (
    <Box w="50%" margin={"0 auto"} display="block" mt={5}>
      <Stack direction="column">
        <Input
          placeholder="Legajo"
          value={legajo}
          onChange={(e) => setLegajo(e.target.value)}
        />
        <Input
          placeholder="Apellido, Nombre"
          value={fullName}
          onChange={(e) => setFullname(e.target.value)}
        />
        <Input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* <Select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option
            value={"pending"}
            style={{ color: "yellow", fontWeight: "bold" }}
          >
            Pending ⌛
          </option>
          <option
            value={"completed"}
            style={{ color: "green", fontWeight: "bold" }}
          >
            Completed ✅
          </option>
        </Select>*/}
        <SimpleGrid columns={2} spacing={5}>
          <Box bg='tomato' height='80px'></Box>
          <Box bg='tomato' height='80px'></Box>
          <Box bg='tomato' height='80px'></Box>
          <Box bg='tomato' height='80px'></Box>
          <Box bg='tomato' height='80px'></Box>
          <Box bg='tomato' height='80px'></Box>
        </SimpleGrid>
        <Button rightIcon={<IoIosArrowRoundForward style={{ fontSize: '25px' }} />} colorScheme='teal' variant='outline'
          onClick={() => handleTodoCreate()}
          disabled={legajo.length < 1 || fullName.length < 1 || email.length < 1 || isLoading}
        //variantColor="teal"

        >
          Votar
        </Button>
      </Stack>
    </Box>
  );
};

export default AddTodo;
