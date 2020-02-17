import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';


import { AppComponent } from './app.component';
import { SomethingCoolComponent } from './something-cool/something-cool.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SomethingElseComponent } from './something-else/something-else.component';
import { MaterialModule } from './material.module';
import { LoginCompComponent } from './login-comp/login-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    SomethingCoolComponent,
    SomethingElseComponent,
    LoginCompComponent
  ],
  imports: [
    BrowserModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatSliderModule,
    MatToolbarModule,
    MatSidenavModule,
    MatBottomSheetModule,
    BrowserAnimationsModule,
    MatIconModule,

    MaterialModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

