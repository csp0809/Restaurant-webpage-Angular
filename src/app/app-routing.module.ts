import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import the components that we have created
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component'; 
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { LoginComponent } from './login/login.component';
// import { Dashbo}
import { AuthGuard } from './auth.guard';


const routes: Routes = [{ path: 'home', component:HomeComponent},
  { path: 'about', component:AboutComponent, canActivate: [AuthGuard]},
  { path: 'contact', component:ContactComponent},
  { path: 'create', component:CreateComponent},
  { path: 'edit/:id', component:EditComponent},
  { path: 'login', component: LoginComponent},

  { path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
