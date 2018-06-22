import { Component, OnInit } from '@angular/core';

import { Education } from '../../models/education';
import { EducationService } from '../../services/education.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  codeschool: Education[];
  egghead: Education[];

  constructor(private edService: EducationService) { }

  ngOnInit() {
    this.getEds();
  }

  getEds(): void {
    this.edService.getEds()
      .subscribe((eds: any) => {
        this.codeschool = eds.educationData[0].codeschool;
        this.egghead = eds.educationData[0].egghead;
      });
  }
}
