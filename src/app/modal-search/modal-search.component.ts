import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppService } from '../app.service';
import { Scholarship } from '../models/scholarship.model';

@Component({
  selector: 'app-modal-search',
  templateUrl: './modal-search.component.html',
  styleUrls: ['./modal-search.component.scss']
})
export class ModalSearchComponent implements OnInit {

  scholarships: Scholarship[] = [];
  result: Scholarship[];
  dataFilter = {
    city: [],
    course: [],
    price: 0,
  };
  formIsValid = false;
  @Input() status = false;
  @Output() statusResponse = new EventEmitter();

  favScholarships = [];

  constructor(private service: AppService) { }

  ngOnInit() {

    this.service.getScholarships()
      .subscribe(data => this.scholarships = data);

    setTimeout(() => {
      this.result = this.scholarships.sort((a, b) => {
        if (a.university.name > b.university.name) {
          return 1;
        }
        if (a.university.name < b.university.name) {
          return -1;
        }

        return 0;
      });
      this.getAtrFilter();
    }, 500);
  }

  handlerFilter(cityName, course, price, pre, ead) {
    let kind: any = -1;
    if (pre.checked && ead.checked) {
      kind = '';
    } else if (pre.checked) {
      kind = 'Presencial';
    } else if (ead.checked) {
      kind = 'EaD';
    }
    console.log(kind);

    this.result =  this.scholarships.filter(item => {
      return item.campus.city.indexOf(cityName) !== -1 &&
        item.course.name.indexOf(course) !== -1 &&
        item.price_with_discount <= price &&
        (item.course.kind === kind || kind === '');
    });

    this.dataFilter.price = price;
  }

  getAtrFilter(): void {
    this.scholarships.forEach(item => {
      if (this.dataFilter.city.indexOf(item.campus.city) === -1) {
        this.dataFilter.city.push(item.campus.city);
      }

      if (this.dataFilter.city.indexOf(item.course.name) === -1) {
        this.dataFilter.course.push(item.course.name);
      }
    });
  }

  triggerModal(): void {
    this.status = !this.status;
    this.formIsValid = false;
    this.feedback();
  }

  feedback() {

    this.statusResponse.emit({
      status: this.status,
      favScholarships: this.favScholarships
    });
  }

  validateForm() {
    const checks = document.querySelectorAll('[name="scholarship"]');
    const checksL = checks.length;
    for (let i = 0; i < checksL; i++) {
      const cCheck = checks[i];
      if (cCheck['checked']) {
        this.formIsValid = true;
        return;
      }
    }

    this.formIsValid = false;
    return;
  }

  saveScholarShip(event: Event): void {
    event.preventDefault();
    const checks = event.target['scholarship'];
    this.favScholarships.length = 0;
    checks.forEach((item, i) => {
      if (item.checked) {
        this.favScholarships.push(i);
      }
    });
    this.triggerModal();
  }
}
