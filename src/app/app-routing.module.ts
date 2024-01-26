import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodeCopyComponent } from './code-copy/code-copy.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: CodeCopyComponent },
  { path: 'about', component: CodeCopyComponent },
  { path: 'contact', component: CodeCopyComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
