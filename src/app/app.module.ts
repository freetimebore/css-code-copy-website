import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CodeCopyComponent } from './code-copy/code-copy.component';
import { HeaderComponent } from './header/header.component';
import { SuccessMessageComponent } from './success-message/success-message.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HomeCardsComponent } from './home-cards/home-cards.component';
import { HtmlHomePageComponent } from './html-home-page/html-home-page.component';
import { FormHtmlCopyCodeComponent } from './form-html-copy-code/form-html-copy-code.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    CodeCopyComponent,
    HeaderComponent,
    SuccessMessageComponent,
    FooterComponent,
    HomeComponent,
    HomeCardsComponent,
    HtmlHomePageComponent,
    FormHtmlCopyCodeComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
