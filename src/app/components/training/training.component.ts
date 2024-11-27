import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { Training } from 'src/app/model/training.models';
import { CartService } from 'src/app/services/cart.service';
import { ApiService } from 'src/app/services/api.service';
import { Trainings } from '../trainings/trainings.component';


@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {

  training!: Training;
  myForm : FormGroup | any; 
  constructor( private formBuilder: FormBuilder, private router: Router, private apiService: ApiService) {

   }

  ngOnInit(): void {
    
    this.myForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      quantity:[1]
      

  })
  console.log(this.myForm, "myform")
  }
  submitTraining(data : Training){
    this.apiService.addTraining(data).subscribe((res => {
      //this.myForm.reset();
      alert("Formation ajouté avec succes!")
      this.router.navigateByUrl('trainings');
    }))
    console.log(this.myForm.value)
   
  }

}
