import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./views/pages/guess/guess.module').then((m) => m.GuessModule),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./views/pages/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'traveler',
    loadChildren: () =>
      import('./views/pages/traveler/traveler.module').then(
        (m) => m.TravelerModule
      ),
  },
  {
    path: 'writer',
    loadChildren: () =>
      import('./views/pages/writter/writter.module').then(
        (m) => m.WritterModule
      ),
  },
];
const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
};
@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
