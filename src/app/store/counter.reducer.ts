import { createReducer } from "@ngrx/store";

const initialState = 0;

export const counterReducer = createReducer(
    initialState
);

// Una approccio alternativo ulizzato nelle versioni più vecchie di NgRx per dichiarare un reducer è il seguente:

// export function counterReducer(state = initialState) {
//     return state;
// }