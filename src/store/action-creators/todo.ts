import {Dispatch} from "redux";
import {TodoAction, TodoActionTypes} from "../../@TS-TYPES/ReduxTypes/Todo/ReduxTodoInterfaces";
import PostService from "../../API/PostService"


export const fetchTodos = () => {
    return async (dispatch: Dispatch<TodoAction>) => {
        try {
            dispatch({type: TodoActionTypes.FETCH_TODOS});
            const response = await PostService.getTodos();
            setTimeout(() => {
                dispatch({type: TodoActionTypes.FETCH_TODOS_SUCCESS, payload: response.data});
            }, 500)
        } catch (e) {
            dispatch({
                type: TodoActionTypes.FETCH_TODOS_ERROR,
                payload: 'Произошла ошибка при загрузке списка дел'
            });
        }
    }
}


