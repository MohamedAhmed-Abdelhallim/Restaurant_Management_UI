import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import {User} from '../../models/user'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  userModel = new User('','a@a.com','')
  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.userService.create(this.userModel).subscribe(
      res =>{
        console.log(res);
      },
      err =>{
        console.log(err)
      }
    )
  }

}
