import { Action, createReducer, on } from "@ngrx/store";
// import { CounterActions, INCREMENT, IncrementAction } from "./counter.actions";
import { decrement, increment } from "./counter.actions";

const initialState = 0;

export const counterReducer = createReducer(
    initialState,
    on(increment, (state, action) => state + action.value),     // puntiamo alla action, dichiarata in counter.action e implementata qui
    on(decrement, (state, action) => state - action.value)
);

// Un approccio alternativo utilizzato nelle versioni più vecchie di NgRx per dichiarare un reducer, che non prevede l'uso del 
// metodo counterReducer è il seguente:

// export function counterReducer(state = initialState, action: CounterActions | Action) {
//     if(action.type === INCREMENT) {
//         return state + (action as IncrementAction).value;
//     }
//     return state;
// }