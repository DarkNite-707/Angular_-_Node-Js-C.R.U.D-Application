import { NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import { LoginComponent} from './auth/login/login/login.component';
import { FruitCreateComponent} from "./fruit/fruit-create/fruit-create.component";
import { FruitDisplayComponent} from "./fruit/fruit-display/fruit-display.component";
import { PostCreateComponent} from "./post/post-create/post-create.component";
import { PostDisplayComponent} from "./post/post-display/post-display.component";

const routes: Routes = [
  { path: '', component: FruitDisplayComponent },
  { path: 'view', component: PostDisplayComponent },
  { path: 'add', component: FruitCreateComponent },
  { path: 'createpost', component:PostCreateComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
