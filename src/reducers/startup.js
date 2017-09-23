import {
  createActions,
  handleActions,
  combineActions
} from 'redux-actions'

const defaultState = { counter: 10 };

export const { increment, decrement,startup } = createActions({
  INCREMENT: amount => ({ amount }),
  DECREMENT: amount => ({ amount: -amount }),
  STARTUP  : () => ({})
});

// export default handleActions({
//   [combineActions(increment, decrement,startup)](state, { payload: { amount } }) {
//     return {
//       ...state,
//       counter: state.counter + amount
//     };
//   }
// }, defaultState);

