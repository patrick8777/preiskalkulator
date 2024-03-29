import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { OfferCalculatorComponent } from './offer-calculator/offer-calculator.component';
import { FooterComponent } from './footer/footer.component';
import { DialogWindowComponent } from './dialog-window/dialog-window.component';
import { ContactComponent } from './contact/contact.component';

import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { ExamplePdfViewerComponent } from './example-pdf-viewer/example-pdf-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    NavbarComponent,
    LandingPageComponent,
    OfferCalculatorComponent,
    FooterComponent,
    DialogWindowComponent,
    ContactComponent,
    ExamplePdfViewerComponent
   
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule, NgxExtendedPdfViewerModule],
  providers: [],
  bootstrap: [
    AppComponent,
    TodoListComponent,
    NavbarComponent,
    OfferCalculatorComponent,
    LandingPageComponent,
    NgxExtendedPdfViewerModule,
  ],
})
export class AppModule {}
