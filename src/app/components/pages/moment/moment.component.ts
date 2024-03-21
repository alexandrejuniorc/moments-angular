import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Moment } from 'src/app/Moment';
import { MomentService } from 'src/app/services/moment.service';

@Component({
  selector: 'app-moment',
  templateUrl: './moment.component.html',
  styleUrls: ['./moment.component.css'],
})
export class MomentComponent implements OnInit {
  moment?: Moment;

  constructor(
    private momentService: MomentService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // id do momento que é passado na URL
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));

    // Busca o momento pelo id
    this.momentService
      .getMoment(id)
      .subscribe((item) => (this.moment = item.data));
  }
}
