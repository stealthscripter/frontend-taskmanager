import type { Task } from "../../types/Task";

interface TaskItemProps {
  task: Task;
  onToggle: () => void;
  onDelete: () => void;
}

export default function TaskItem({ task, onToggle, onDelete }: TaskItemProps) {
  return (
    <li className="flex justify-between items-center bg-gray-50 p-2 rounded">
      <span
        onClick={onToggle}
        className={`flex-1 cursor-pointer ${task.completed ? "line-through text-gray-400" : ""}`}
      >
        {task.title}
      </span>
      <button onClick={onDelete} className="text-red-500 hover:text-red-700 ml-4">
        ❌
      </button>
    </li>
  );
}
