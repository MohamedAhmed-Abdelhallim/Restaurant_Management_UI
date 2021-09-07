import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.css']
})
export class RestaurantDetailsComponent implements OnInit {

  userId:any
  constructor(private authService:AuthService , private restaurantService:RestaurantService , private router:Router) { }

  ngOnInit(): void {
   this.userId =  this.authService.getUserid()
  }

  add(restaurant:any){
    console.log(restaurant);
    this.restaurantService.create(restaurant,this.userId).subscribe(
      res => {
        this.router.navigate(['home'])
      }
    )
  }
}
