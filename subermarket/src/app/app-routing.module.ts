import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductComponent } from './pages/product/product.component';
import { HelpsComponent } from './pages/helps/helps.component';
import { CartComponent } from './pages/cart/cart.component';
import { RegisterComponent } from './pages/register/register.component';
import { OrderComponent } from './pages/order/order.component';
import { PostsComponent } from './pages/posts/posts.component';
import { SingleProductComponent } from './pages/single-product/single-product.component';

const routes: Routes = [
{ path: '', component: PostsComponent },
{ path: 'login', component: LoginComponent },
{ path: 'product', component: ProductComponent },
{ path: 'product/single/:_id', component: SingleProductComponent},
{ path: 'helps', component: HelpsComponent },
{ path: 'cart', component: CartComponent },
{ path: 'register', component: RegisterComponent },
{ path: 'order', component: OrderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
