import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PlanService } from 'src/app/services/plan.service';
import { Plan } from 'src/app/shared/models/plan';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss'],
})
export class PlansComponent implements OnInit {
  plans: Plan[] = [];
  constructor(
    private planService: PlanService,
    activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    let planObservable: Observable<Plan[]>;
    planObservable = this.planService.getAll();

    planObservable.subscribe((serverPlans) => {
      this.plans = serverPlans;
    });

    console.log(this.plans);
  }

  ngOnInit(): void {}

  addPlan() {
    this.router.navigateByUrl('/login');
  }
}
