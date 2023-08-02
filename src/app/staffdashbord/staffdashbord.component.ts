import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpHandlerService } from '../shared/services/httphandler.service';
import { LeaveForm } from '../shared/model/leaveobj.model';

@Component({
  selector: 'app-staffdashbord',
  templateUrl: './staffdashbord.component.html',
  styleUrls: ['./staffdashbord.component.css']
})
export class StaffdashbordComponent implements OnInit{
  totalleaves : any = 20;
  approved :any = 0;
  rejected : any = 0;
  pending : any = 0;

  staffleaveobj : FormGroup | any = [];
  leaveobj : any=[];
  staffobj : any=[];
  staffarr : any=[];
  fromdate : any;
  noofdays : any;
  reason : any;
  status : any;

  lid : any;
  ldepartment : any;
  constructor(private httpserve : HttpHandlerService){}
  ngOnInit(): void {
    this.staffleaveobj = new FormGroup({
      fromdate : new FormControl(''),
      todate : new FormControl(''),
      reason : new FormControl(''),
    })
   
    this.lid = localStorage.getItem("staffId")
    console.log(this.lid);
    // this.httpserve.getpersondata().subscribe((resdata :any)=>{
    //   console.log(resdata)
    //   for(let user of resdata){
    //     console.log(user.id)
    //     if(user.id === staffid){
    //       this.leaveobj.push(user)
    //     }
    //   }
    // console.log(this.leaveobj);
      
    // })
   this.httpserve.getLeavedata().subscribe((resdata : any)=>{
    this.leaveobj = Object.values(resdata)
    console.log(this.leaveobj)
    for(let data of this.leaveobj){
      

      if(data.status === 'approve'){
        this.approved++
        this.totalleaves = this.totalleaves - data.noofdays;
      }else if(data.status ==='reject'){
        this.rejected++
      }
    }
   },
   (error) => {
    console.error('Error fetching leave data:', error);
  }
   )
  
    
    

  }
  onSubmit(){

   console.log(this.staffleaveobj.value)
   let date1 = new Date(this.staffleaveobj.value.fromdate) ;
   let date2 = new Date(this.staffleaveobj.value.todate) ;
   let time_difference = date2.getTime() - date1.getTime();  
   this.noofdays = time_difference / (1000 * 60 * 60 * 24); 
   this.noofdays = this.noofdays + 1;
   this.fromdate = this.staffleaveobj.value.fromdate;
  //  console.log(this.fromdate)
   this.reason = this.staffleaveobj.value.reason;
  //  console.log(this.noofdays)
  this.status = 'pending'
  this.pending = 1
  console.log(this.leaveobj)
  let data = {fromdate : this.fromdate,noofdays : this.noofdays,reason : this.reason,  status : this.status}
  // localStorage.clear();
  this.leaveobj.push(data)
  
    this.httpserve.postLeave(data).subscribe((resdata:any)=>{
      console.log(Object.values(resdata));
   this.staffleaveobj.reset();

  })

 
  }
}