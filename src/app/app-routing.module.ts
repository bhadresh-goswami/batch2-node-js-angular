import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { InfolistComponent } from './info/infolist/infolist.component';
import { AddinfoComponent } from './info/addinfo/addinfo.component';
import { MaininfoComponent } from './info/maininfo/maininfo.component';

const routes: Routes = [
  {
    path:'home',component:HomeComponent
  },
  {
    path:'about-us',component:AboutusComponent
  },
  {
    path:'contact-us',component:ContactusComponent
  },
  {
    path: 'info', component: MaininfoComponent, children: [
      {
        path:'index',component:InfolistComponent
      },
      {
        path:'add',component:AddinfoComponent
      }
    ]
  },
  {
    path:'',redirectTo:'/home',pathMatch:'full'
  },
  {
    path:'**',component:NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
