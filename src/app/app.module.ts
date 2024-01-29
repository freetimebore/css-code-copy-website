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

@NgModule({
  declarations: [
    AppComponent,
    CodeCopyComponent,
    HeaderComponent,
    SuccessMessageComponent,
    FooterComponent,
    HomeComponent,
    HomeCardsComponent
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
