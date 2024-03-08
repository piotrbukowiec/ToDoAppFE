import { Todo } from '../../types/todo';
import { TodoElement } from '../TodoElement/TodoElement';

interface Props {
	todos: Todo[];
}
export const Todos = ({ todos }: Props) => {
	return todos.map(todo => <TodoElement todo={todo} key={todo.name} />);
};
