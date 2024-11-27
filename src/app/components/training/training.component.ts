import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Training } from 'src/app/model/training.models';
import { ApiService } from 'src/app/services/api.service';



@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {

  tariningId!: number;
  training!: Training;
  traningData: Training = {} as Training;
  myForm: FormGroup | any;
  constructor(private formBuilder: FormBuilder, private router: Router, private apiService: ApiService, private activateRoute: ActivatedRoute) {

  }

  ngOnInit(): void {


    this.activateRoute.params.subscribe((param: Params) => {
      this.tariningId = Number(param["id"])
      console.log(typeof this.tariningId)
      if (this.tariningId) {
        this.apiService.fetchData(this.tariningId).subscribe((data: Training) => {
          this.traningData = data;
          console.log(data, "string data");
        })
      }

    })
    this.myForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      quantity: [1]

    })
    console.log(this.myForm, "myform")
  }

  submitTraining(data: Training) {
    this.apiService.addTraining(data).subscribe((res => {
      //this.myForm.reset();
      alert("Formation ajouté avec succes!")
      this.router.navigateByUrl("trainings")

    }))
    console.log(this.myForm.value)

  }
  upDate() {
    this.apiService.upDateTraining(this.traningData, this.tariningId).subscribe((res: Training) => {
      alert("Data update Successfully!")
      this.router.navigateByUrl("trainings");
    })
  }

}
