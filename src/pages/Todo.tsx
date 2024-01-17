import TodoContainer from "@/components/todo/TodoContainer";
import Container from "@/components/ui/Container";

const Todo = () => {
  return (
    <Container>
      <h1 className="text-center text-3xl font-semibold py-8">My Todos</h1>
      <TodoContainer />
    </Container>
  );
};

export default Todo;
