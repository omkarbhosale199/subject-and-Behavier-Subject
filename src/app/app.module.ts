import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';
import { YoutubecommentComponent } from './youtubecomment/youtubecomment.component';
import { Compforbehaviorsub5Component } from './compforbehaviorsub5/compforbehaviorsub5.component';
import { Compforbehaviorsub6Component } from './compforbehaviorsub6/compforbehaviorsub6.component';
import { Compforbehaviorsub7Component } from './compforbehaviorsub7/compforbehaviorsub7.component';
import { Compforbehaviorsub8Component } from './compforbehaviorsub8/compforbehaviorsub8.component';

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    YoutubecommentComponent,
    Compforbehaviorsub5Component,
    Compforbehaviorsub6Component,
    Compforbehaviorsub7Component,
    Compforbehaviorsub8Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
