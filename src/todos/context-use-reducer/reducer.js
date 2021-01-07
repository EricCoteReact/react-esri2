let currentId = 4;

export default function reducer(todos, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...todos,
        {
          id: currentId++,
          text: action.payload,
          completed: false,
        },
      ];
    case 'TOGGLE_TODO':
      return todos.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case 'EDIT_TODO':
      return todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo
      );
    case 'DELETE_TODO':
      return todos.filter((todo) => todo.id !== action.payload);
    default:
      return todos;
  }
}
