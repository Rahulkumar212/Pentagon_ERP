import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { PipelineBoardComponent } from '../components/pipeline-board/pipeline-board.component';

@Component({
  selector: 'app-pipeline',
  standalone: true,
  imports: [
    CommonModule,
    PipelineBoardComponent
  ],
  templateUrl: './pipeline.component.html'
})
export class PipelineComponent {}