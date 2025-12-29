import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { Router, RouterLink } from '@angular/router';
import { Service } from '../service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms'; 


@Component({
  selector: 'app-sign',
  imports: [MatTabsModule, RouterLink, FormsModule, ReactiveFormsModule],
  templateUrl: './sign.html',
  styleUrl: './sign.css',
})
export class Sign {
  signinform:FormGroup;
    signupform:FormGroup;

  constructor( private service:Service, private fb:FormBuilder, private router:Router){
  this.signinform = fb.group({
    email: [''],
    password:['']
  })
   this.signupform = fb.group({
    name:[''],
    email: [''],
    password:['']
  })
  }
tabIndex = 0;

selectTab(index: number) {
  this.tabIndex = index;
}
login(){
  this.service.login(this.signinform.value.email, this.signinform.value.password).then(()=>{    
    this.router.navigate(['/home'])
  })

}
signup(){

  this.service.signupuser(this.signupform.value.email,this.signupform.value.password).then((res)=>{
   this.service.adduser(res.user.uid, {
    name:this.signupform.value.name,
    uid:res.user.uid,
    favorite:[]
   })
    this.router.navigate(['/home'])
  })
  
}

}
