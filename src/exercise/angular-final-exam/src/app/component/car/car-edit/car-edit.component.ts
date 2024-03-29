import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CityService} from '../../../service/city.service';
import {City} from '../../../model/city';
import {ActivatedRoute, Router} from '@angular/router';
import {CarService} from '../../../service/car.service';
import {Car} from '../../../model/car';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.css']
})
export class CarEditComponent implements OnInit {
  formEdit: FormGroup;
  cities: City[];
  idEdit: number;
  carEdit?: Car;
  id = 0;
  constructor(private cityService: CityService,
              private activatedRoute: ActivatedRoute,
              private carService: CarService,
              private route: Router) {
  }

  ngOnInit(): void {
    this.getAll();
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.idEdit = +paramMap.get('id');
      this.carService.findById(this.idEdit).subscribe(car => {
        this.carEdit = car;
        this.formEdit = new FormGroup({
          id: new FormControl(this.carEdit.id),
          type: new FormControl(this.carEdit.type, Validators.required),
          name: new FormControl(this.carEdit.name),
          startCity: new FormControl(this.cities.find(i => i.id === car.startCity.id), Validators.required),
          endCity: new FormControl(this.cities.find(i => i.id === car.startCity.id), Validators.required),
          phoneNumber: new FormControl(this.carEdit.phoneNumber, [Validators.required, Validators.pattern('^(0)(9[0137]\\d{7})$')]),
          email: new FormControl(this.carEdit.email, [Validators.required, Validators.pattern('^[\\w._%+-]+@[\\w.-]+\\.[A-Za-z]{2,}$')]),
          startHour: new FormControl(this.carEdit.startHour, Validators.required),
          endHour: new FormControl(this.carEdit.endHour, Validators.required)
        });
      });
    });
  }

  getAll() {
    this.cityService.getAll().subscribe(cities => {
      this.cities = cities;
    });
  }

  onSubmit() {
    const car = this.formEdit.value;
    this.carService.editById(car.id, car).subscribe(next => {
      console.log('Thành công');
      this.route.navigateByUrl('/cars/list');
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Chỉnh sửa thành công',
        showConfirmButton: false,
        timer: 1500
      });
    }, error => {
      console.log('Thất bại');
    });
  }
}
