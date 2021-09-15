import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  constructor(private http:HttpClient) { }

  getData(){
    let url = "https://jsonplaceholder.typicode.com/posts";
    return this.http.get(url);
  }
}
