import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserserviceService } from 'src/app/userservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private activeRoute:ActivatedRoute,private userService:UserserviceService) { }

  username:string=''
  data:any
  ngOnInit(): void {
    this.username=this.activeRoute.snapshot.params['username']
    console.log(this.username)
    this.userService.databh.subscribe(value=>this.data=value)
  }

}
