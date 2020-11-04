import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplaterefComponent } from './templateref/templateref.component';
import { TdformComponent } from './tdform/tdform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdformComponent } from './mdform/mdform.component';
import { FakeApiComponent } from './fake-api/fake-api.component';
import { FakeService2 } from './fake.Service2';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TemplaterefComponent,
    TdformComponent,
    MdformComponent,
    FakeApiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule 

  ],
  providers: [FakeService2],
  bootstrap: [AppComponent]
})
export class AppModule { }
