import React from 'react';
import { Form, Button, Input } from 'reactstrap';
import { addTodo } from './actions'
import { connect } from 'react-redux';

function AddTodo({ onAddTodo, allTodos }) {
  let inputText = React.createRef();
  return (
    <div>
      <Form
        inline
        onSubmit={(evt) => {
          evt.preventDefault();
          if (!inputText.current.value.trim()) {
            return;
          }
          //dispatch({ type: 'ADD_TODO', text: inputText.current.value });
          //dispatch(addTodo(inputText.current.value));
          onAddTodo(inputText.current.value);
          inputText.current.value = '';
          inputText.current.focus();
        }}
      >
        <Input innerRef={inputText} className='mr-2' autoFocus />
        <Button color='primary'>Add Todo</Button>
      </Form>
    </div>
  );
}

const mapDispatchToProps = dispatch =>
  ({ onAddTodo: (text) => { dispatch(addTodo(text)) } });

const mapStateToProps = state =>
  ({ allTodos: state.todos })

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
