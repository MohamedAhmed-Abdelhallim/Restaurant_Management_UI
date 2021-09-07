import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http:HttpClient) { }

  create(restaurant:any,userId?:any){
    restaurant = {...restaurant,ownedBy:userId}
    console.log(restaurant)
    return this.http.post(`${environment.apiUrl}/restaurant`,restaurant)
  }
  readAll(userId?:any){
    return this.http.get(`${environment.apiUrl}/restaurant?id=${userId}`)
  }
  deleteOne(restaurantId:any,userId:any){
    return this.http.delete(`${environment.apiUrl}/restaurant/${restaurantId}?id=${userId}`)
  }

  updateOne(restaurantId:any,updates:any,userId:any){
    console.log(restaurantId,updates,userId)
    return this.http.patch(`${environment.apiUrl}/restaurant/${restaurantId}?id=${userId}`,updates)
  }
}
