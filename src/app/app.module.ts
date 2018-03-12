import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { UserComponent } from './components/user.component';

@NgModule({
    imports: [NgbModule.forRoot(), BrowserModule, FormsModule, HttpModule ],
    declarations: [AppComponent, UserComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
