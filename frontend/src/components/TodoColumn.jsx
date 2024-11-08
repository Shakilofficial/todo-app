import { useGetTodosQuery } from "@/features/api/apiSlice";
import PropTypes from "prop-types";
import Error from "./Error";
import Loader from "./Loader";
import TodoCard from "./TodoCard";

const TodoColumn = ({ status }) => {
  const { title, color } = status;

  const { data: todos = [], isLoading, isError } = useGetTodosQuery(); // Default todos to an empty array to avoid undefined errors
  console.log(todos);

  let content = null;
  if (isLoading) {
    content = (
      <>
        <Loader /> <Loader />
        <Loader />
      </>
    );
  } else if (isError) {
    content = <Error />;
  } else if (todos.length === 0) {
    content = <Error />;
  } else {
    content = todos.map((todo) => <TodoCard key={todo.id} todo={todo} />);
  }

  return (
    <div className="flex-shrink-0 w-[350px] bg-gray-100 rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className={`w-6 h-6 rounded-l-xl ${color}`}></div>
          <h3 className="font-semibold">{title}</h3>
        </div>
        <span className="text-gray-500 text-sm">{todos.length}</span>
      </div>
      <div className="overflow-y-auto h-[calc(100vh-180px)] space-y-2">{content}</div>
    </div>
  );
};

export default TodoColumn;

TodoColumn.propTypes = {
  status: PropTypes.shape({
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
  }).isRequired,
};
