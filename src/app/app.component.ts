import { Component, OnInit } from '@angular/core';
import { LaunchProgramService } from './service/launch-program.service';
import { LaunchProgram } from './entity/launch-program';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  launchProgram: LaunchProgram[] = [];
  years: number[] = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];
  isDataLoading = false;

  constructor(private launchProgramService: LaunchProgramService) { }

  ngOnInit() {
    this.getLaunchProgram();
  }

  getLaunchProgram(): void {
    this.isDataLoading = true;
    this.launchProgramService.getLaunchProgram().subscribe((resp: LaunchProgram[]) => {
      this.launchProgram = resp;
      this.isDataLoading = false;
    });
  }

}
