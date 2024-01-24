import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IncrementAction, /*increment*/ } from '../store/counter.actions';


@Component({
  selector: 'app-counter-controls',
  templateUrl: './counter-controls.component.html',
  styleUrls: ['./counter-controls.component.css'],
})
export class CounterControlsComponent {
  // Injecting NgRx store instead of service
  constructor(private store: Store) {}

  increment() {
    // Calling the action from reducer and passing the value of the action
    // this.store.dispatch(increment({value: 2}));

    this.store.dispatch(new IncrementAction(2));
  }

  decrement() {
    
  }
}
