import { Routes } from '@angular/router';

export const demosRoutes: Routes = [
    {
        path: 'observable',
        loadChildren: () =>
            import('./observables/observable.routes')
                .then(m => m.observableRoutes)
    },
    {
        path: 'signals',
        loadChildren: () =>
            import('./signals/signals.routes')
                .then(m => m.signalsRoutes)
    }
];
