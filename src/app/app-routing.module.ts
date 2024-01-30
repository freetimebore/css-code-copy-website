import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodeCopyComponent } from './code-copy/code-copy.component';
import { HtmlHomePageComponent } from './html-home-page/html-home-page.component';
import { HomeComponent } from './home/home.component';
import { FormHtmlCopyCodeComponent } from './form-html-copy-code/form-html-copy-code.component'
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderHtmlCopyCodeComponent } from './header-html-copy-code/header-html-copy-code.component';
import { FooterHtmlCopyCodeComponent } from './footer-html-copy-code/footer-html-copy-code.component';
import { CardsHtmlCopyCodeComponent } from './cards-html-copy-code/cards-html-copy-code.component';
import { ButtonHtmlCopyCodeComponent } from './button-html-copy-code/button-html-copy-code.component';
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
          },
          {
            path: "header", component: HeaderHtmlCopyCodeComponent
          },
          {
            path: "footer", component: FooterHtmlCopyCodeComponent
          },
          {
            path: "cards", component: CardsHtmlCopyCodeComponent
          },
          {
            path: "buttons", component: ButtonHtmlCopyCodeComponent
          },


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
