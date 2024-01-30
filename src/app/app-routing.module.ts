import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodeCopyComponent } from './code-copy/code-copy.component';
import { HtmlHomePageComponent } from './html-home-page/html-home-page.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'html',
        component: HtmlHomePageComponent,
      },
    ],
  },
  { path: 'about', component: CodeCopyComponent },
  { path: 'contact', component: CodeCopyComponent },
  { path: 'html', component: HtmlHomePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
