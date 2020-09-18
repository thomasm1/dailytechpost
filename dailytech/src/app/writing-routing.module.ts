import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
import { WritingComponent } from './components/writing/writing.component'; 

const routes: Routes = [
  { path: '', component: WritingComponent } 
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class WritingRoutingModule {}
