import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarPage } from './editar.page';

const routes: Routes = [
  {
    path: '',
    component: EditarPage
  }
];

<<<<<<< HEAD


=======
>>>>>>> c321230f924e535e19615842903f2a8302512c7b
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarPageRoutingModule {}
