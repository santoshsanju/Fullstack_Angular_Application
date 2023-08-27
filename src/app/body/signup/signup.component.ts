import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private builder:FormBuilder) { }
  
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
