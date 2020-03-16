import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import {ActivatedRoute} from '@angular/router';
import {WelcomeDataService} from "../service/data/welcome-data.service";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  message = 'Some Welcome Message';
  welcomeMessageFromService: String
  name = ' '

  constructor(private route: ActivatedRoute,
              private service:WelcomeDataService) { }

  ngOnInit() {
    console.log(this.message);
    // console.log(this.route.snapshot.params [name]);
    this.name = this.route.snapshot.params['name'];
  }
  getWelcomeMessage(){
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error=> this.handleErrorResponse(error)
    )
  }
getWelcomeMessageWithParameter(){
   //.console.log (this.service.executeHelloWoldServiceWithPathVariable(this.name));
   this.service.executeHelloWoldServiceWithPathVariable(this.name).subscribe(
response =>this.handleSuccessfulResponse(response),
     error =>this.handleErrorResponse(error)
   );
   console.log('last line of getWelcomeMessage');
    //  console.log("Get Welcome Message")
}
handleSuccessfulResponse(response){
    this.welcomeMessageFromService = response.message;
    //console.log(response);
    //console.log(response.message)
    // response is coming from the hello world bean from local host 8080 Spring
    // respons e should bring Hello world bean message
}
handleErrorResponse(error){
    console.log(error);
    console.log(error.error);
    console.log(error.message);
    this.welcomeMessageFromService = error.error.message;
}
}
