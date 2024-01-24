import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';
import { selectCount, selectDoubleCount } from '../store/counter.selector';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
})
export class CounterOutputComponent {
  count$: Observable<number>;
  doubleCount$: Observable<number>;

  // Injecting NgRx store instead of service
  constructor(private store: Store<{counter: number}>) {
    // Select the reducer key from our general store, it's an observable
    this.count$ = store.select(selectCount);
    this.doubleCount$ = store.select(selectDoubleCount);
  }
}
