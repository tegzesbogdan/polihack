import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ProfileComponent} from './components/profile/profile.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {DialogExampleComponent} from './components/dialog-example/dialog-example.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {RouterModule} from "@angular/router";
import {ResultsComponent} from './results/results.component';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';



// search module
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import { AddfoodComponent } from './addfood/addfood.component';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import {MatSliderModule} from "@angular/material/slider";

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    DialogExampleComponent,
    AppComponent,
    ResultsComponent,
    AddfoodComponent,
    DialogBoxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    Ng2SearchPipeModule,
    MatSliderModule,
    MatButtonModule,
    MatSelectModule
  ],
  providers: [DialogExampleComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
