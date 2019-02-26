import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { InputNameComponent } from "./components/input-name/input-name.component";
import { FormsModule } from "@angular/forms";
import { PiechartComponent } from "./components/piechart/piechart.component";
import { LanguageListComponent } from "./components/language-list/language-list.component";
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    InputNameComponent,
    PiechartComponent,
    LanguageListComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
