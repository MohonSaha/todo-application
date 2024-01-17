import { useAppSelector } from "@/redux/hook";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";

const TodoContainer = () => {
  const { todos } = useAppSelector((state) => state.todos);
  return (
    <div>
      <div className="flex justify-between mb-5 px-1">
        <AddTodoModal />
        <TodoFilter />
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl p-[5px] ">
        {/* <div className="bg-white p-5 rounded-md text-2xl font-bold flex justify-center items-center">
          <p>There is no task pending</p>
        </div> */}
        <div className="bg-white p-5 w-full rounded-lg space-y-3">
          {todos.map((item) => (
            <TodoCard
              title={item.title}
              description={item.description}
            ></TodoCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
