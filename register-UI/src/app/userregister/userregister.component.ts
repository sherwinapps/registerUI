import { Component, OnInit } from '@angular/core';
import { UserRegister } from '../user';
import { RegisterService } from '../register.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.css']
})
export class UserRegisterComponent implements OnInit {

  user: UserRegister[];
  component_name: 'Registration Page';
  
  constructor(private registerService: RegisterService) { }

  ngOnInit() {
  }

  displaydetails(username,initialpassword,password){
    console.log(username,initialpassword,password);
  }

  add(username, password){
    console.log(username);
    this.registerService.addUser({username, password} as UserRegister).subscribe();
  }
}
