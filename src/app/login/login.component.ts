import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpHandlerService } from '../shared/services/httphandler.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginFormobj : FormGroup | any=[];
  fetcheddata : any;
  arr : any;
  constructor(private httpserve : HttpHandlerService,private router : Router){}
  ngOnInit(): void {
    this.loginFormobj = new FormGroup({
      userName : new FormControl(''),
      password : new FormControl('')
    })
  }
  onSubmit(){
    console.log(this.loginFormobj.value.userName);
    this.httpserve.getpersondata().subscribe((resdata : any)=>{
      console.log(resdata);
      this.fetcheddata = resdata;
      this.arr = [];
      for(let user in this.fetcheddata){
          this.arr.push({...this.fetcheddata[user],dataid : user})
      }
     console.log(this.arr)
     let role : any;
     let userName : any;
     this.arr.filter((ele: any) => {
       if(ele.role === "hod"){
         role = ele.role;
         userName = ele.userName;
       }
     });
     let staffId : any;
     let department : any;
      this.arr.filter((ele : any)=>{
        if(ele.role === "staff"){
          staffId = ele.id;
          department = ele.department;
        }
      })

      if(this.loginFormobj.value.userName === userName && "hod" === role){
        this.router.navigate(['/hoddashbord'])
      }else{

        this.router.navigate(['/staffdasdhbord'])
      }

      localStorage.setItem("staffId",staffId)
      localStorage.setItem("department",department)

    })

  }
}
