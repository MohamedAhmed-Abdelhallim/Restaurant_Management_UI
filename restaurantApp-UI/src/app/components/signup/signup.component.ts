import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import {User} from '../../models/user'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  userModel = new User('','a@a.com','')
  constructor(private userService:UserService , private router:Router , private authService:AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.userService.create(this.userModel).subscribe(
      (res:any) =>{
        this.authService.storeJwtToken(res.accessToken);
        this.authService.storeUserId(res.id)
        this.router.navigate([`/home`])
      },
      err =>{
        console.log(err)
      }
    )
  }

}
