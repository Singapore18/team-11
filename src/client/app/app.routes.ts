import { Routes } from '@angular/router';

import { LoginRoutes } from './login/index';
//import { RegisterRoutes } from './register/index';
import { DashboardRoutes } from './dashboard/index';

import { LoginComponent } from './login/index';
//import { RegisterComponent } from './register/index';

export const routes: Routes = [
	...LoginRoutes,
	...DashboardRoutes,
//	...RegisterRoutes,
	{ path: '**', component: LoginComponent }
];
