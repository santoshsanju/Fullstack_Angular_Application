import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,FormArray, Validators } from '@angular/forms'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }
  
  checkBox:string[]=[]

  ngOnInit(): void {
  }

  signup=new FormGroup({
    username:new FormControl('',[Validators.required,Validators.minLength(3)]),
    email:new FormControl(''),
    password:new FormControl(''),
    retrypassword:new FormControl(''),
    personal:new FormGroup({
      dob:new FormControl(''),
      gender:new FormControl(''),
      pic:new FormControl(''),
      phoneno:new FormControl(''),
    }),
    url:new FormControl(''),
    stack:new FormArray([
      new FormControl('')
    ]),
    experience:new FormControl('')
  })

  onsignup(){
    this.signup.value.stack=this.checkBox
    console.log("value",this.signup.value)
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
