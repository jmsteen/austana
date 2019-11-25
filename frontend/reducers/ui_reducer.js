import { combineReducers } from 'redux';
import modalReducer from './modal_reducer';
import popupReducer from './popup_reducer';
import currentTaskReducer from './current_task_reducer';

export default combineReducers({
    modal: modalReducer,
    popup: popupReducer,
    currentTaskId: currentTaskReducer
});