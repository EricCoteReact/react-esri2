//action creators
export function addTodo(text) {
  return { type: 'ADD_TODO', payload: text };
}

export function toggleTodo(id) {
  return { type: 'TOGGLE_TODO', payload: id };
}

export function editTodo(id, newText) {
  return { type: 'EDIT_TODO', payload: { id, text: newText } };
}

export function deleteTodo(id) {
  return { type: 'DELETE_TODO', payload: id };
}

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
};
