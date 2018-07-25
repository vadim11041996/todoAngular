import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { appRoutes} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    appRoutes,
    BrowserModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
