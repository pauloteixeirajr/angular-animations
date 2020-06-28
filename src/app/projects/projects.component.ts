import { Component, OnInit, HostBinding } from '@angular/core';

import { Project } from './project.model';

import { ProjectsService } from './projects.service';
import {
  markedTrigger,
  itemTrigger,
  slideTrigger,
  listTrigger,
} from './animations';
import {
  routeFadeTrigger,
  routeSlideTrigger,
} from '../shared/route-animations';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [
    markedTrigger,
    itemTrigger,
    slideTrigger,
    routeFadeTrigger,
    routeSlideTrigger,
    listTrigger,
  ],
})
export class ProjectsComponent implements OnInit {
  // @HostBinding('@routeFade') routeAnimation = true;
  @HostBinding('@routeSlide') routeAnimation = true;

  projects: Project[];
  markedPrjIndex = 0;
  progress = 'progressing';
  createNew = false;

  constructor(private prjService: ProjectsService) {}

  ngOnInit() {
    this.prjService.loadProjects().subscribe((prj: Project[]) => {
      this.progress = 'finished';
      this.projects = prj;
    });
  }

  onStatusUpdated(newStatus: string, id: number) {
    this.projects[id].status = newStatus;
  }

  onProjectDeleted(index: number) {
    this.projects.splice(index, 1);
  }

  onProjectCreated(project: Project) {
    this.createNew = false;
    // Wait for the slide anitmation to finish to add the project to the array
    setTimeout(() => {
      this.projects.unshift(project);
    }, 500);
  }
}
