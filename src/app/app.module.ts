import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShopComponent } from './shop/shop.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path: '', component: HeaderComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'test', component: TestComponent }
];

@NgModule({
  declarations: [AppComponent, HeaderComponent, ShopComponent, TestComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
