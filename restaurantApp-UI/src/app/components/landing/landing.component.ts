import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private restaurantService:RestaurantService , private router:Router) { }
  restaurants:any = [];
  ngOnInit(): void {
    console.log("laaaaaaaaaaaaaaaaaaaanding")
    this.restaurantService.readAll().subscribe(
      res =>{
        console.log(res)
        this.restaurants = res
      },
      err =>{
        console.log(err)
      }
    )
  }

  goToSignup(){
    this.router.navigate(["/signup"])
  }

  goToLogin(){
    this.router.navigate(["/login"])
  }

}
