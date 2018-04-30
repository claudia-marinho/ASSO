import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { LoadingModule } from 'ngx-loading';

import { PatternService }          from './pattern.service';

import { AppComponent } from './app.component';
import { PatternSearchComponent } from './pattern-search/pattern-search.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PatternsComponent } from './patterns/patterns.component';
import { AppRoutingModule } from './/app-routing.module';
import { PatternDetailComponent } from './pattern-detail/pattern-detail.component';
import { AddPatternComponent } from './add-pattern/add-pattern.component';
import { PatternHistoryComponent } from './pattern-history/pattern-history.component';
import { EditPatternComponent } from './edit-pattern/edit-pattern.component';
import { PatternRevisionComponent } from './pattern-revision/pattern-revision.component';


@NgModule({
  declarations: [
    AppComponent,
    PatternSearchComponent,
    NavbarComponent,
    PatternsComponent,
    PatternDetailComponent,
    AddPatternComponent,
    PatternHistoryComponent,
    EditPatternComponent,
    PatternRevisionComponent
  ],
  imports: [
    AlertModule.forRoot(),
    LoadingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [PatternService],
  bootstrap: [AppComponent]
})
export class AppModule { }
