import { Routes } from '@angular/router';
import { ObservableDemoComponent } from './observable-demo/observable-demo.component';
import { ObservableMapComponent } from './observable-map/observable-map.component';
import { ObservableTapComponent } from './observable-tap/observable-tap.component';
import { ObservableFilterComponent } from './observable-filter/observable-filter.component';
import { ObservableTakeComponent } from './observable-take/observable-take.component';


export const observableRoutes: Routes = [
    { path: 'base', component: ObservableDemoComponent },
    { path: 'map', component: ObservableMapComponent },
    { path: 'tap', component: ObservableTapComponent },
    { path: 'filter', component: ObservableFilterComponent },
    { path: 'take', component: ObservableTakeComponent }
];
