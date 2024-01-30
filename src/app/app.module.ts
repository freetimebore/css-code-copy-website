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
import { HeaderHtmlCopyCodeComponent } from './header-html-copy-code/header-html-copy-code.component';
import { FooterHtmlCopyCodeComponent } from './footer-html-copy-code/footer-html-copy-code.component';
import { CardsHtmlCopyCodeComponent } from './cards-html-copy-code/cards-html-copy-code.component';
import { ButtonHtmlCopyCodeComponent } from './button-html-copy-code/button-html-copy-code.component';

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
    ContactComponent,
    HeaderHtmlCopyCodeComponent,
    FooterHtmlCopyCodeComponent,
    CardsHtmlCopyCodeComponent,
    ButtonHtmlCopyCodeComponent
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
