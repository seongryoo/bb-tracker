import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimelineComponent } from './modules/tracker/components/timeline/timeline.component';
import { NotebudComponent } from './modules/tracker/components/notebud/notebud.component';

@NgModule({
  declarations: [
    AppComponent,
    TimelineComponent,
    NotebudComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
