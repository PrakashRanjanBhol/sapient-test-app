import { Component, OnInit } from '@angular/core';
import { LaunchProgram } from 'src/app/entity/launch-program';
import { LaunchProgramService } from 'src/app/service/launch-program.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  launchProgram: LaunchProgram[] = [];
  years: number[] = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];
  launchLanding: any[] = [{ key: true, value: 'True' }, { key: false, value: 'False' }];
  isDataLoading = false;
  filterYear: number;
  filterSuccessLaunch: boolean;
  filterSuccessLanding: boolean;

  constructor(private launchProgramService: LaunchProgramService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }


  filterLaunchProgram(filterType, filterVal) {

    switch (filterType) {
      case ('Y'): {
        this.filterYear = filterVal;
        break;
      }
      case ('LH'): {
        this.filterSuccessLaunch = filterVal;
        break;
      }
      case ('LN'): {
        this.filterSuccessLanding = filterVal;
        break;
      }
    }
    this.router.navigate(['/landing-page/all-launch-program', (this.filterYear === undefined || this.filterYear === null) ?
      0 : this.filterYear,
      (this.filterSuccessLaunch === undefined || this.filterSuccessLaunch === null) ? 0 : this.filterSuccessLaunch ? 1 : 2,
      (this.filterSuccessLanding === undefined || this.filterSuccessLanding === null) ? 0 : this.filterSuccessLanding ? 1 : 2
    ]);
  }

}
