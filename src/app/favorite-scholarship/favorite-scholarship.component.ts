import { Component, OnInit } from '@angular/core';

import { AppService } from '../app.service';
import { Scholarship } from '../models/scholarship.model';

@Component({
  selector: 'app-favorite-scholarship',
  templateUrl: './favorite-scholarship.component.html',
  styleUrls: ['./favorite-scholarship.component.scss']
})
export class FavoriteScholarshipComponent implements OnInit {

  TITLE = 'Bolsas favoritas';
  DESC = 'Adicione os cursos e faculdades de seu interesse e receba atualizações com as melhores ofertas.';

  data: Scholarship[];
  isModalVisible = false;
  favScholarships = [];
  result = [];

  constructor(private service: AppService) { }

  ngOnInit() {
    this.service.getScholarships()
      .subscribe(data => this.data = data);
  }

  filterHalf(sem) {
    if (sem) {
      this.result = this.favScholarships.filter(item => {
        return item.enrollment_semester === sem;
      });
    } else {
      this.result = this.favScholarships;
    }
  }

  triggerModal(): void {

    this.isModalVisible = !this.isModalVisible;
  }

  deleteScholarShip(id: number): void {

    this.favScholarships.splice(id, 1);
  }

  reciverFeedback(data: any): void {

    this.isModalVisible = data.status;

    this.favScholarships.length = 0;

    data.favScholarships.forEach(item => {
      this.favScholarships.push(
        this.data[item]
      );
    });

    this.result = this.favScholarships.sort((a, b) => {
      if (a.university.name > b.university.name) {
        return 1;
      }

      if (a.university.name < b.university.name) {
        return -1;
      }

      return 0;
    });
  }

}
