import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { ShareService } from 'src/app/services/share.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  restaurants:any = [];
  All_Restaurant:Boolean = true;
  My_Restaurants:Boolean = false;
  constructor(private restaurantService:RestaurantService ,
                     private router:Router,
                      private authService:AuthService,
                      private shareService:ShareService) { }

  ngOnInit(): void {
    this.showAllRestaurants();
  }

  showAllRestaurants(){
    this.All_Restaurant = true;
    this.My_Restaurants = false;
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

  showMyRestaurants(){
    this.All_Restaurant = false;
    this.My_Restaurants = true;
    const userId = this.authService.getUserid()
    this.restaurantService.readAll(userId).subscribe(
      res =>{
        console.log(res);
        this.restaurants = res
      },
      err =>{
        console.log(err)
      }
    )
  }

  add(){
    this.router.navigate(['/add'])
  }

  deleteRestaurant(restaurant:any){
    this.restaurantService.deleteOne(restaurant._id,restaurant.ownedBy).subscribe(
      res =>{
        this.showMyRestaurants();
      }
    )
  }

  editRestaurant(restaurant:any){
    this.shareService.changeMessage(restaurant);
    this.router.navigate(['/edit'])
  }

  Logout(){
    this.authService.logout();
    this.router.navigate([''])
  }

}
