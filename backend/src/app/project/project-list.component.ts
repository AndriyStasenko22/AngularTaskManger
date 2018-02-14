import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import swal, {SweetAlertOptions} from 'sweetalert2';
import {MatTableDataSource} from '@angular/material';

import {Project} from "../model/project";
import {ProjectDataService} from "../model/project-data.service";
import {StaffService} from "../model/staff.service";


@Component({
    templateUrl: './project-list.component.html',
})

export class ProjectListComponent implements OnInit {

    private _projects: Project[];
    private _errorMessage: string;
    private dataSource;
    private displayedColumns = ['title', 'short_title', 'description', 'options'];
    constructor(private _projectsDataService: ProjectDataService,
                private _staffService: StaffService,
                private _router: Router) {
    }

    ngOnInit() {
        this.getProjects();
    }

    public getProjects() {
        this._projects = null;
        this._projectsDataService.getAllProjects()
            .subscribe(
                projects => {
                    this._projects = projects;
                    this.dataSource = new MatTableDataSource(this._projects);
                    console.log(this._projects);
                },
                error => {
                    // unauthorized access
                    if (error.status == 401 || error.status == 403) {
                        this._staffService.unauthorizedAccess(error);
                    } else {
                        this._errorMessage = error.data.message;
                    }
                }
            );
    }

    public viewProject(project: Project): void {
        this._router.navigate(['/project', project.id]);
    }


    public confirmDeleteProject(project:Project):void {
        // Due to sweet alert scope issue, define as function variable and pass to swal

        let parent = this;
        this._errorMessage = '';

        swal({
            title: 'Are you sure?',
            text: "Once delete, you won't be able to revert this!",
            type: 'question',
            showLoaderOnConfirm: true,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
            preConfirm: function () {
                return new Promise(function (resolve, reject) {
                    parent._projectsDataService.deleteProjectById(project.id)
                        .subscribe(
                            result => {
                                parent.getProjects();
                                resolve();
                            },
                            error =>  {
                                // unauthorized access
                                if(error.status == 401 || error.status == 403) {
                                    parent._staffService.unauthorizedAccess(error);
                                } else {
                                    parent._errorMessage = error.data.message;
                                }
                                resolve();

                            }
                        );
                })
            }
        }).then(function(result) {
            // handle confirm, result is needed for modals with input

        }, function(dismiss) {
            // dismiss can be "cancel" | "close" | "outside"
        });
    }
}