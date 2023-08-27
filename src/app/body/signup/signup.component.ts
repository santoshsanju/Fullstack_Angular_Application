import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { UserserviceService } from 'src/app/userservice.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private builder:FormBuilder,private router:Router,private userService:UserserviceService) { }
  
  checkBox:string[]=[]

  ngOnInit(): void {
  }

  signup=this.builder.group({
    username:['',[Validators.required,Validators.minLength(3)]],
    email:[''],
    password:[''],
    retrypassword:[''],
    personal:this.builder.group({
      dob:[''],
      gender:[''],
      pic:[''],
      phoneno:[''],
    }),
    url:[''],
    stack:this.builder.array([
      ['']
    ]),
    experience:['']
  })

  onsignup(){
    this.signup.value.stack=this.checkBox
    console.log("value",this.signup.value)
    this.router.navigate([`/home/${this.signup.value.username}`])
    this.userService.usernamebh.next(this.signup.value.username)
    this.userService.statusbh.next(true)
  }

  addCheckBox(event:any){
    if(event.checked==true){
      this.checkBox.push(event.value)
    }
    else{
      this.checkBox.filter((value,index)=>{
        if(value==event.value){
          this.checkBox.splice(index,1)
        }
      })
    }
  }

}
