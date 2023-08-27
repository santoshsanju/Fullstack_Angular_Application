import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private activeRoute:ActivatedRoute) { }

  username:string=''
  ngOnInit(): void {
    this.username=this.activeRoute.snapshot.params['username']
    console.log(this.username)
  }

}
