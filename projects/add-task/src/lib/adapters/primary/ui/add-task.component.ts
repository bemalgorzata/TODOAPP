import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({ selector: 'lib-add-task', templateUrl: './add-task.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })

export class AddTaskComponent {
  readonly createTask: FormGroup = new FormGroup({
    task: new FormControl()
  });

  Submit(createTask: FormGroup) {
    if (createTask.invalid) {
      return;
    }
  }
}
