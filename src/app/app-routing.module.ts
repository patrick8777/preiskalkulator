import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { DialogWindowComponent } from './dialog-window/dialog-window.component';
import { ExamplePdfViewerComponent } from './example-pdf-viewer/example-pdf-viewer.component';
import { FooterComponent } from './footer/footer.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OfferCalculatorComponent } from './offer-calculator/offer-calculator.component';
import { TodoListComponent } from './todo-list/todo-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing-page',
    pathMatch: 'full',
  },
  {
    path: 'landing-page',
    component: LandingPageComponent,
  },
  {
    path: 'todo-list',
    component: TodoListComponent,
  },
  {
    path: 'navbar',
    component: NavbarComponent,
  },
  {
    path: 'footer',
    component: FooterComponent,
  },
  {
    path: 'offer-calculator',
    component: OfferCalculatorComponent,
  },
  {
    path: 'dialog-window',
    component: DialogWindowComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'example-pdf-viewer',
    component: ExamplePdfViewerComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
