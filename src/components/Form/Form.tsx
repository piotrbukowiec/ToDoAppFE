import { useState, MouseEvent } from 'react';
import './Form.css';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { Todo } from '../../types/todo';
import { Todos } from '../Todos/Todos';

export const Form = () => {
	const [todos, setTodos] = useState<Todo[]>([{ name: 'todo1' }, { name: 'todo2' }, { name: 'todo3' }]);
	const [tmpText, setTmpText] = useState('');
	const handleTextChange = (text: string) => {
		setTmpText(text);
	};
	const handleButtonSubmit = (event: MouseEvent) => {
		event.preventDefault();
		const newTodo = { name: tmpText };
		setTodos(prevState => [...prevState, newTodo]);
	};
	return (
		<>
			<div className='form-container'>
				<form className='todo-form'>
					<Input onTextChange={handleTextChange} />
					<Button handleSubmit={handleButtonSubmit} />
					<Todos todos={todos} />
				</form>
			</div>
		</>
	);
};
