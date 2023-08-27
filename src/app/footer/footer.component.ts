import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private userService:UserserviceService) { }
  
  username:string=''

  ngOnInit(): void {
    this.userService.usernamebh.subscribe(value=>{
      this.username=value
    })
  }

}
