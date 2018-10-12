import { Component } from '@angular/core';
//import {Http} from '@angular/http';
//import { setValueOnPath } from '../../../../../node_modules/@angular/core/src/facade/lang';
/**
*	This class represents the lazy loaded HomeComponent.
*/

@Component({
	moduleId: module.id,
	selector: 'home-cmp',
	templateUrl: 'home.component.html'
})

export class HomeComponent {
	names:string[];
	profiles:string[];
	

	constructor(){
		this.names = ["Tim", "Amanda", "Martin"];
		this.profiles = ["Hello, I am Tim and I want to help out at a supermarket. I have done stocktaking before. I hope I can be of help to you!",
		"Hello, I am Amanda! If you choose me, I will make sure to do my very best for the company. I might be slow at first, but I am very dedicated and will not easily give up.",
		"Hello I am Martin! I am a hardworking person and althought I have a hearing disability, I will do my best to perform my job scope and exceed beyond!"];
	}
	
	
}
