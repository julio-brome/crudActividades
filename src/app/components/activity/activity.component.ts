import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivityModel } from 'src/app/model/activity-model';
import { EmployeeModel } from 'src/app/model/employee-model';
import { ActivityService } from 'src/app/service/activity.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.sass']
})
export class ActivityComponent implements OnInit {

    ListActivity: ActivityModel [] = [];
    ListEmployee: EmployeeModel [] = [];
    formActivity: FormGroup = new FormGroup({});
    isUpdate: boolean = false;

    constructor(private activitySerice: ActivityService){}

    ngOnInit(): void {
      this.list();
      this.listEmployee();
      this.formActivity = new FormGroup({
        idActividades: new FormControl(''),
        idEmpleado: new FormControl(''),
        nombreEmpleado: new FormControl(''),
        descripcion: new FormControl(''),
        fechaRegistro: new FormControl(''),
        fechaEjecucion: new FormControl(''),
        estado: new FormControl(''),
        dias: new FormControl('')
      });
    }

    list(){
      this.activitySerice.getActivitys().subscribe(res => {
        if(res){
          this.ListActivity = res;
        }
      })
    }

    listEmployee(){
      this.activitySerice.getEmpleados().subscribe(res => {
        if(res){
          this.ListEmployee = res;
        }
      })
    }

    save(){
      this.activitySerice.saveActivity(this.formActivity.value).subscribe(res => {
        if(res){
          this.list();
          this.formActivity.reset();        
        }
      });
    }

    update(){
      this.activitySerice.updateActivity(this.formActivity.value).subscribe(res => {
        if(res){
          this.list();
          this.formActivity.reset();
        }
      });
    }

    delete(id: any){
      this.activitySerice.deleteActivity(id).subscribe(res => {
        if(res){
          this.list();
        }
      });
    }

    newActivity(){
      this.formActivity.reset();
      this.isUpdate = false;
    }

    selectItem(item: any){
      this.isUpdate = true;
      this.formActivity.controls['idActividades'].setValue(item.idActividades);
      this.formActivity.controls['idEmpleado'].setValue(item.idEmpleado);
      this.formActivity.controls['nombreEmpleado'].setValue(item.nombreEmpleado);
      this.formActivity.controls['descripcion'].setValue(item.descripcion);
      this.formActivity.controls['estado'].setValue(item.estado);
    }

}
