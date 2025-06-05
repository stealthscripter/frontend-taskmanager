import { useState } from "react";

import TaskInput from "./components/Task/TaskInput";
import TaskList from "./components/Task/TaskList";
import type { Task } from "./types/Task";
import Header from "./components/Header";
import Footer from "./components/Footer";

type Filter = "all" | "completed" | "pending";

const initialTasks: Task[] = [
  { id: 1, title: "Buy groceries", completed: false },
  { id: 2, title: "Read a book", completed: true },
  { id: 3, title: "Complete Kuraz Internship assesment", completed: true },
];

export default function App() {
  const [filter, setFilter] = useState<Filter>("all");
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const addTask = (title: string) => {
    const newTask: Task = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  return (
    <div className="relative bg-gray-100 min-h-screen flex flex-col  font-poppins overflow-hidden">
      <Header />

      <div className="w-3xl mx-auto mt-10">
        <TaskInput onAdd={addTask} />
        <div className="flex justify-center gap-2 my-4">
          <button
            onClick={() => setFilter("all")}
            className={`px-3 py-1 rounded ${
              filter === "all" ? "bg-kuraz text-white" : "bg-gray-200"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("pending")}
            className={`px-3 py-1 rounded ${
              filter === "pending" ? "bg-yellow-500 text-white" : "bg-gray-200"
            }`}
          >
            Pending
          </button>
          <button
            onClick={() => setFilter("completed")}
            className={`px-3 py-1 rounded ${
              filter === "completed" ? "bg-kuraz text-white" : "bg-gray-200"
            }`}
          >
            Completed
          </button>
        </div>

        {/* Task list */}
        <TaskList
          tasks={filteredTasks}
          onToggle={toggleTask}
          onDelete={deleteTask}
        />
      </div>
      <Footer />
      <div className="bg-kuraz w-[800px] h-[200px] absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-[100px] "></div>
      <div className="bg-kuraz w-[200px] h-[1500px] absolute top-0 -left-20 rounded-full -translate-x-1/2 -translate-y-1/2 blur-[0px]"></div>
      <div className="bg-kuraz w-[200px] h-[1500px] absolute top-0 -right-[17.5rem] rounded-full -translate-x-1/2 -translate-y-1/2 blur-[0px]"></div>
    </div>
  );
}
