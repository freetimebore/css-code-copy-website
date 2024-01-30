import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodeCopyComponent } from './code-copy/code-copy.component';
import { HtmlHomePageComponent } from './html-home-page/html-home-page.component';
import { HomeComponent } from './home/home.component';
import { FormHtmlCopyCodeComponent } from './form-html-copy-code/form-html-copy-code.component'
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    children: [
      {
        path: '', component: HomeComponent,
      },
      {
        path: 'html', children: [
          {
            path: '', component: HtmlHomePageComponent,
          },
          {
            path: 'form', component: FormHtmlCopyCodeComponent
          },
          {
            path: "box-shadow", component: CodeCopyComponent
          }
        ]
      },
    ],
  },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  // {
  //   path: 'html', children: [
  //     {
  //       path: '', component: HtmlHomePageComponent,
  //     },
  //     {
  //       path: 'form', component: FormHtmlCopyCodeComponent
  //     },

  //   ]
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
