import { Component, OnInit } from '@angular/core';

import { Project } from './project.model';

import { ProjectsService } from './projects.service';
import { markedTrigger, itemTrigger, slideTrigger } from './animations';
import { AnimationEvent } from '@angular/animations';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [markedTrigger, itemTrigger, slideTrigger],
})
export class ProjectsComponent implements OnInit {
  projects: Project[];
  displayedProjects: Project[] = [];
  markedPrjIndex = 0;
  progress = 'progressing';
  createNew = false;

  constructor(private prjService: ProjectsService) {}

  ngOnInit() {
    this.prjService.loadProjects().subscribe((prj: Project[]) => {
      this.progress = 'finished';
      this.projects = prj;
      if (this.projects.length) {
        this.displayedProjects.push(this.projects[0]);
      }
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
    this.projects.unshift(project);
  }

  onItemAnimated(event: AnimationEvent, lastProjectId: number) {
    if (event.fromState !== 'void') return;

    if (this.projects.length > lastProjectId + 1) {
      this.displayedProjects.push(this.projects[lastProjectId + 1]);
    } else {
      this.projects = this.displayedProjects;
    }
  }
}
