import { Component } from '@angular/core';
import {Http} from '@angular/http';
@Component({
	moduleId: module.id,
    selector: 'resume',
    templateUrl: './resume.component.html'
})

export class ResumeComponent {
    name: string;
    motto: string;
    email: string;
    personal_interest: string;
    work_strength: string;
    work_experience: string;
    work_skills: string;
    job_interests: string;
    how_to_support: string;
    job_requests: string;
    interested_industries: string;

    

    constructor(){
        /*
        this.name = "";
        this.motto = "";
        this.email= "";
        this.personal_interest= "";
        this.work_strength = "";
        this.work_experience = "";
        this.work_skills = "";
        this.job_interests = "";
        this.how_to_support = "";
        this.job_requests = "";
        this.interest_industries = "";
        */
        this.name = "Tim";
        this.motto = "I will work hard for you";
        this.email = "timlovesyou@abc.com";
        this.personal_interest = "I like to read books, sing, spend time with my family and go shopping.";
        this.work_strength = "I am helpful, a fast learner and take initiative.";
        this.work_experience = "I worked in retail as a stocktaker before. I also worked at my mother's florist.";
        this.work_skills = "I was trained in customer service before.";
        this.job_interests = "I am interested in supermarket assistant jobs.";
        this.how_to_support = "Please be patient with me and let me follow you at the start. Once I get used to it, I will be a fast worker.";
        this.job_requests = "I stay near Yishun MRT. I prefer working in the North. I can work for 6 hours. I can work on weekdays.";
        this.interested_industries = "Retail, F&B";
    }
    /*
    constructor(http: Http){
        http.get("", )
        this.name = "hello";
    }
    */
}
