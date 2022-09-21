import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgCircleProgressModule } from 'ng-circle-progress';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { PrimaryCardComponent } from './componentes/primary-card/primary-card.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { RedesComponent } from './componentes/header/redes/redes.component';
import { LogosAPComponent } from './componentes/header/logos-ap/logos-ap.component';
import { LoginComponent } from './componentes/login/login.component';
import { LoginbuttonComponent } from './componentes/header/loginbutton/loginbutton.component';
import { NavRightComponent } from './componentes/header/nav-right/nav-right.component';
import { BannerComponent } from './componentes/primary-card/banner/banner.component';
import { PriCardFootComponent } from './componentes/primary-card/pri-card-foot/pri-card-foot.component';
import { PriCardLeftComponent } from './componentes/primary-card/pri-card-foot/pri-card-left/pri-card-left.component';
import { PriCardRightComponent } from './componentes/primary-card/pri-card-foot/pri-card-right/pri-card-right.component';
import { ProfileComponent } from './componentes/primary-card/pri-card-foot/pri-card-left/profile/profile.component';
import { AddSectionsComponent } from './componentes/primary-card/pri-card-foot/pri-card-left/add-sections/add-sections.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './componentes/home/home.component';
import { FormsModule } from '@angular/forms';
import { interceptorProvider } from './service/interceptor-service';
import { NewExperienciaComponent } from './componentes/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { NeweducacionComponent } from './componentes/educacion/neweducacion.component';
import { EditEducacionComponent } from './componentes/educacion/edit-educacion.component';
import { EditBannerComponent } from './componentes/primary-card/banner/edit-banner.component';
import { EditSkillsComponent } from './componentes/skills/edit-skills.component';
import { NewSkillsComponent } from './componentes/skills/new-skills.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PrimaryCardComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    SkillsComponent,
    ProyectosComponent,
    FooterComponent,
    RedesComponent,
    LogosAPComponent,
    LoginComponent,
    LoginbuttonComponent,
    NavRightComponent,
    BannerComponent,
    PriCardFootComponent,
    PriCardLeftComponent,
    PriCardRightComponent,
    ProfileComponent,
    AddSectionsComponent,
    HomeComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    EducacionComponent,
    NeweducacionComponent,
    EditEducacionComponent,
    EditBannerComponent,
    EditSkillsComponent,
    NewSkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
