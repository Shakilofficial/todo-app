import PropTypes from "prop-types";

const TodoColumn = ({ status }) => {
  const { title, color, count } = status;
  return (
    <div className="flex-shrink-0 w-80 bg-gray-100 rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className={`w-6 h-6 rounded-l-xl ${color}`}></div>
          <h3 className="font-semibold">{title}</h3>
        </div>
        <span className="text-gray-500 text-sm">{count}</span>
      </div>
      <div className="overflow-y-auto h-[calc(100vh-180px)]">
        {/* todoCard component */}
      </div>
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
