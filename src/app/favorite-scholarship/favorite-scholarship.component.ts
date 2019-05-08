import { Component, OnInit } from '@angular/core';

import { AppService } from '../app.service';

@Component({
  selector: 'app-favorite-scholarship',
  templateUrl: './favorite-scholarship.component.html',
  styleUrls: ['./favorite-scholarship.component.scss']
})
export class FavoriteScholarshipComponent implements OnInit {

  title = 'Bolsas favoritas';
  description = 'Adicione os cursos e faculdades de seu interesse e receba atualizações com as melhores ofertas.';

  data: any;

  constructor(private service: AppService) { }

  ngOnInit() {
    this.service.getScholarships()
      .subscribe(data => this.data = data);

    setTimeout(() => {
      console.log(this.data);
    }, 300);
  }

}
