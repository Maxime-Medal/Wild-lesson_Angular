import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Ajout de cette ligne pour gérer les formulaires
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { HighlightDirective } from './highlight.directive';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    UserProfileComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule, // import du module Forms,
    CommonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
