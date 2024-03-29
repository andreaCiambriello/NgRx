import { Action, createAction, props } from "@ngrx/store";

export const init = createAction(
    '[Counter] Init'
);

export const set = createAction(
    '[Counter] Set',
    props<{value: number}>(),
);

export const increment = createAction(
    '[Counter] Increment',              // action's key identifier
    props<{value: number}>()            // attaching data to actions
);

export const decrement = createAction(
    '[Conter] decrement',
    props<{value: number}>()
);

// Un approccio alternativo utilizzato nelle versioni più vecchie di NgRx per dichiarare una action, che non prevede l'uso del 
// metodo createAction è il seguente:

// export const INCREMENT = '[Counter] Increment'

// export class IncrementAction implements Action {
//     readonly type: string = INCREMENT;

//     constructor(public value: number) {}
// }

// export type CounterActions = IncrementAction;