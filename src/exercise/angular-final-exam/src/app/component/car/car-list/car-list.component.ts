import {Component, OnInit} from '@angular/core';
import {CarService} from '../../../service/car.service';
import {Car} from '../../../model/car';
import Swal from "sweetalert2";

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  cars: Car[] = [];

  constructor(private carService: CarService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.carService.getAll().subscribe(cars => {
      this.cars = cars;
    });
  }

  getInfo(name: string, id: number) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    });

    swalWithBootstrapButtons.fire({
      title: 'Bạn có chắc chắn muốn xóa ' + id + '?',
      text: 'Bạn không thể hoàn tác điều này!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Đồng ý!',
      cancelButtonText: 'Thoát!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.carService.deleteById(id).subscribe(next => {
          swalWithBootstrapButtons.fire(
            'Xóa thành công!',
            'Bạn đã xóa 1 xe.',
            'success'
          );
          this.getAll();
        }, error => {
          swalWithBootstrapButtons.fire({
              title: 'Xóa không thành công!',
              text: 'Đã có lỗi xảy ra, không thể xóa được!!',
              icon: 'error'
            }
          );
          console.log(error);
        });
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
      }
    });
  }
}
