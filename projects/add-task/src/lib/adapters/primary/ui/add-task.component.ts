import { FormGroup, FormControl } from '@angular/forms';
import { Component, ViewEncapsulation, ChangeDetectionStrategy, Inject } from '@angular/core';
import { ADDS_TASK_DTO, AddsTaskDtoPort } from '../../../application/ports/secondary/adds-task.dto-port';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-add-task',
  templateUrl: './add-task.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AddTaskComponent {
  readonly createTask: FormGroup = new FormGroup({
    task: new FormControl(),
    id: new FormControl(),
  });

  constructor(@Inject(ADDS_TASK_DTO) private _addsTaskDto: AddsTaskDtoPort, private router: Router) {
  }

  onCreateTaskSubmited(createTask: FormGroup): void {
    if (createTask.invalid) {
      return
    }

    this._addsTaskDto.add({
      task: createTask.get('task')?.value,
      done: false,
      id: createTask.get("id")?.value,
      created: Date.now(),
    });
    this.createTask.reset();
    this.router.navigate(['/tasks']);

  }
}
