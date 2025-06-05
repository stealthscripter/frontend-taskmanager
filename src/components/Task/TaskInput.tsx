import { CircleAlert } from "lucide-react";
import { useState } from "react";

interface TaskInputProps {
  onAdd: (title: string) => void;
}

export default function TaskInput({ onAdd }: TaskInputProps) {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleAdd = () => {
    if (!input.trim()) {
      setError("Task title cannot be empty");
      return;
    }

    onAdd(input.trim());
    setInput("");
    setError("");
  };

  return (
    <>
      <div className="flex gap-2 mb-2">
        <input
          type="text"
          className="flex-1 border border-zinc-300 focus:border-zinc-400 duration-300 px-3 py-2 rounded outline-none"
          placeholder="Enter a new task"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            if (error) setError("");
          }}
        />
        <button
          onClick={handleAdd}
          className="bg-kuraz hover:opacity-55 cursor-pointer duration-150 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>
      {error && (
        <p className="text-red-600 text-sm mb-4 lowercase inline-flex gap-x-2 items-center">
          <CircleAlert size={15} />
          {error}
        </p>
      )}
    </>
  );
}
