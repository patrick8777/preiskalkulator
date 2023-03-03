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

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    NavbarComponent,
    LandingPageComponent,
    OfferCalculatorComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [
    AppComponent,
    TodoListComponent,
    NavbarComponent,
    OfferCalculatorComponent,
    LandingPageComponent,
  ],
})
export class AppModule {}
