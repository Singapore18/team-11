import { Route } from '@angular/router';

import { HomeRoutes } from './home/index';
import { BlankPageRoutes } from './blank-page/index';
import { ResumeRoutes } from './resume/index';
import { BSComponentRoutes } from './bs-component/index';

import { DashboardComponent } from './index';

export const DashboardRoutes: Route[] = [
  	{
    	path: 'dashboard',
    	component: DashboardComponent,
    	children: [
	    	...HomeRoutes,
	    	...BSComponentRoutes,
			...BlankPageRoutes,
			...ResumeRoutes
    	]
  	}
];
