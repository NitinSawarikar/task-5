import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PersonregistrationComponent } from './personregistration/personregistration.component';
import { HoddashbordComponent } from './hoddashbord/hoddashbord.component';
import { StaffdashbordComponent } from './staffdashbord/staffdashbord.component';
import { StaffleaveformComponent } from './staffleaveform/staffleaveform.component';

const routes: Routes = [
  {path : 'login', component : LoginComponent},
  {path : 'personregistration', component : PersonregistrationComponent},
  {path : 'hoddashbord',component : HoddashbordComponent},
  {path : 'staffdasdhbord', component : StaffdashbordComponent},
  {path : 'staffleaveform', component : StaffleaveformComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
