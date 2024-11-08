import { Users } from "lucide-react";
import "./App.css";
import Footer from "./components/Footer";
import TodoColumn from "./components/TodoColumn";
const statuses = [
  { title: "Incomplete", color: "bg-red-500", count: 6 },
  { title: "To Do", color: "bg-blue-500", count: 6 },
  { title: "Doing", color: "bg-yellow-500", count: 6 },
  { title: "Under Review", color: "bg-purple-500", count: 6 },
  { title: "Completed", color: "bg-green-500", count: 6 },
  { title: "Overdue", color: "bg-orange-500", count: 6 },
];
function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Project Tasks</h1>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Users size={18} />
              <span>Team</span>
            </button>
          </div>
        </div>

        <div className="overflow-x-auto pb-4">
          <div className="flex gap-6 min-w-max">
            {statuses.map((status, idx) => (
              <TodoColumn key={idx} status={status} />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
