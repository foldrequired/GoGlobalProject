import { Component, OnInit } from '@angular/core';
import { Manager } from 'src/app/_models/manager';
import { ManagerService } from 'src/app/_services/manager.service';

@Component({
  selector: 'app-managers-list',
  templateUrl: './managers-list.component.html',
  styleUrls: ['./managers-list.component.css']
})
export class ManagersListComponent implements OnInit {
  managers: Manager[];

  constructor(private managerService: ManagerService) { }

  ngOnInit() {
    this.loadManagers();
  }

  loadManagers() {
    this.managerService.getManagers().subscribe((managers: Manager[]) => {
      this.managers = managers;
    }, err => {
      console.log(err);
    });
  }
}
