import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterLinkActive, RouterLinkWithHref } from '@angular/router';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [BrowserModule, RouterLinkWithHref, RouterLinkActive, FormsModule, ReactiveFormsModule],
  exports: [
    HomeComponent,
  ],
  providers: [],
})
export class AppCommonModule {
}
