import TodoList from "./components/TodoList"; // ✅ required import

export default function App() {
  return (
    <div>
      <h1>My Todo App</h1>
      <TodoList /> {/* ✅ render TodoList */}
    </div>
  );
}