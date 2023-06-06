import Button from "./Button";
import Container from "./Container";

const AddTodo = () => {
  return (
    <Container>
      <input
        type="text"
        style={{ borderRadius: "10px", outline: "none", fontSize: "15px" }}
      />
      <Button>Add</Button>
    </Container>
  );
};

export default AddTodo;
