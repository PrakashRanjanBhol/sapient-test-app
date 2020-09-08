import { Component, OnInit } from '@angular/core';
import { LaunchProgram } from 'src/app/entity/launch-program';
import { LaunchProgramService } from 'src/app/service/launch-program.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-all-launch-program',
  templateUrl: './all-launch-program.component.html',
  styleUrls: ['./all-launch-program.component.scss']
})
export class AllLaunchProgramComponent implements OnInit {

  launchProgram: LaunchProgram[] = [];
  isDataLoading = false;
  filterYear: number;
  filterSuccessLaunch: boolean;
  filterSuccessLanding: boolean;
  filterQueryParam: ParamMap;

  constructor(private launchProgramService: LaunchProgramService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((paramMap: ParamMap) => {
      this.filterQueryParam = paramMap;
      this.getLaunchProgram();
    });
  }

  getLaunchProgram(): void {
    this.isDataLoading = true;
    this.launchProgramService.getLaunchProgram(this.filterQueryParam).subscribe((resp: LaunchProgram[]) => {
      this.launchProgram = resp;
      this.isDataLoading = false;
    });
  }
}
