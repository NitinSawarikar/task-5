import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModulesModule } from './modules/modules.module';
import { HeaderComponent } from './header/header.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonregistrationComponent } from './personregistration/personregistration.component';
import { HttpHandlerService } from './shared/services/httphandler.service';
import { HttpClientModule } from '@angular/common/http';
import { HoddashbordComponent } from './hoddashbord/hoddashbord.component';
import { StaffdashbordComponent } from './staffdashbord/staffdashbord.component';
import { StaffleaveformComponent } from './staffleaveform/staffleaveform.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    PersonregistrationComponent,
    HoddashbordComponent,
    StaffdashbordComponent,
    StaffleaveformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ModulesModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
   

  ],
  providers: [
    HttpHandlerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
