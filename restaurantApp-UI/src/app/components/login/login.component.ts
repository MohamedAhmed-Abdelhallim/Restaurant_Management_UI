import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  

  constructor(private authService:AuthService,private router:Router) { }

  authenticated:boolean = true
  ngOnInit(): void {
  }

  logIn(userCred:NgForm){
    this.authService.login(userCred).subscribe((success:Boolean)=>{
        success ? this.router.navigate([""]) : this.authenticated = false
    })
  }

}
