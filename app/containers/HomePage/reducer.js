/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { produce } from 'immer';
import { CHANGE_USERNAME } from './constants';

// The initial state of the App
export const initialState = {
  username: '',
};

export default (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_USERNAME:
        // Delete prefixed '@' from the github username
        draft.username = action.name.replace(/@/gi, '');

        break;
      default:
        return state;
    }
  });
