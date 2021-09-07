import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { ShareService } from 'src/app/services/share.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  restaurant:any
  constructor(private authService:AuthService ,
                     private restaurantService:RestaurantService,
                     private shareService:ShareService,
                     private router:Router) { }

  ngOnInit(): void {
    this.shareService.currentMessage.subscribe(
          res => {
            this.restaurant = res;
        }
      )
  }

  update(restaurant:any){
    console.log(restaurant)
    const userId = this.authService.getUserid()
    this.restaurantService.updateOne(this.restaurant,restaurant,userId).subscribe(
      res => {
        this.router.navigate(['home'])
      }
    )
  }

}
