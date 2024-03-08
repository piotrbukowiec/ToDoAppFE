import { Todo } from '../../types/todo.ts';
interface Props {
	todo: Todo;
}
export const TodoElement = ({ todo }: Props) => {
	const { name } = todo;
	return <p key={name}>{name}</p>;
};
