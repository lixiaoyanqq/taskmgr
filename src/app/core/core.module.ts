import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MdSidenavContainer,
  MdSidenav,
} from '@angular/material';
import { SharedModule } from "../shared";
import { AppRoutingModule } from "./app-routing.module";
import { AppEffectsModule } from "../effects";
import { ServicesModule } from '../services';
import { AppStoreModule } from '../reducers';
import { HeaderComponent } from './header';
import { FooterComponent } from './footer';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PageNotFoundComponent } from './page-not-found';
import 'hammerjs';

@NgModule({
  imports: [
    HttpModule,
    SharedModule,
    AppEffectsModule,
    ServicesModule.forRoot(),
    AppStoreModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  exports: [
    MdSidenavContainer,
    MdSidenav,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AppRoutingModule,
    ],
  providers: [
    {
      provide: 'BASE_CONFIG',
      useValue: {
        uri: 'http://localhost:3000',
      }
    }
    ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    PageNotFoundComponent,
    ]
})
export class CoreModule {
  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
