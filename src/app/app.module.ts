import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigatorComponent } from './common/navigator/navigator.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { FooterComponent } from './common/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { InfolistComponent } from './info/infolist/infolist.component';
import { AddinfoComponent } from './info/addinfo/addinfo.component';
import { MaininfoComponent } from './info/maininfo/maininfo.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    SidebarComponent,
    FooterComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    NotfoundComponent,
    InfolistComponent,
    AddinfoComponent,
    MaininfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
