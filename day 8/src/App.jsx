import { useState } from 'react';

export default function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', done: false },
    { id: 2, text: 'Build a To-Do app', done: false },
  ]);
  const [input, setInput] = useState('');

  function addTodo() {
    if (input.trim()) {
      setTodos([...todos, { id: Date.now(), text: input.trim(), done: false }]);
      setInput('');
    }
  }

  return (
    <div style={{ maxWidth: '400px', margin: '60px auto', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>To-Do List</h1>

      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          value={input}
          placeholder="Add a task..."
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && addTodo()}
          style={{ width: '75%', padding: '8px', fontSize: '15px', border: '1px solid #ccc', borderRadius: '4px' }}
        />
        <button onClick={addTodo} style={{ marginLeft: '8px', padding: '8px 14px', background: '#4f5bd5', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Add
        </button>
      </div>

      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {todos.length === 0 && <p style={{ color: '#aaa' }}>No tasks yet!</p>}
        {todos.map(todo => (
          <li key={todo.id} style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}>
            <input type="checkbox" checked={todo.done} onChange={() => setTodos(todos.map(t => t.id === todo.id ? { ...t, done: !t.done } : t))} />
            <span style={{ marginLeft: '8px', textDecoration: todo.done ? 'line-through' : 'none', color: todo.done ? '#aaa' : '#333' }}>
              {todo.text}
            </span>
            <button onClick={() => setTodos(todos.filter(t => t.id !== todo.id))} style={{ float: 'right', background: 'none', border: 'none', color: 'red', cursor: 'pointer', fontSize: '16px' }}>
              ✕
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
