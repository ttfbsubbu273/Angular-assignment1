import { Component, OnInit } from '@angular/core';
import { PostServiceService} from './post-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'assignment1';

  postData:any = [];
  p: number = 1;

  constructor(private post: PostServiceService){
    
    }
    ngOnInit(): void {
      this.post.getData().subscribe((data) => {
        this.postData = data;
    })
  }
}