import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { MatButtonToggleModule } from "@angular/material/button-toggle"

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { OverviewComponent } from './presentation/component/recipe/overview/overview.component';
import { GridComponent } from './presentation/page/recipes/grid/grid.component';
import { ListComponent } from './presentation/page/recipes/list/list.component';
import { TabsComponent } from './presentation/page/recipes/tabs/tabs.component';
import { SvgComponent } from './presentation/page/recipes/svg/svg.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    ListComponent,
    GridComponent,
    OverviewComponent,
    SvgComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // MatButtonToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
