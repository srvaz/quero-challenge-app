import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite-scholarship',
  templateUrl: './favorite-scholarship.component.html',
  styleUrls: ['./favorite-scholarship.component.scss']
})
export class FavoriteScholarshipComponent implements OnInit {

  title = 'Bolsas favoritas';
  description = 'Adicione os cursos e faculdades de seu interesse e receba atualizações com as melhores ofertas.';

  constructor() { }

  ngOnInit() {
  }

}
