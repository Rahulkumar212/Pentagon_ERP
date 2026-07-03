import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Candidate {
  name: string;
  designation: string;
  experience: string;
  score: number;
}

interface PipelineColumn {
  title: string;
  candidates: Candidate[];
}

@Component({
  selector: 'app-hiring-pipeline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hiring-pipeline.component.html'
})
export class HiringPipelineComponent {

  // 👉 SIGNAL STATE
  pipeline = signal<PipelineColumn[]>([
    {
      title: 'SCREENED',
      candidates: [
        {
          name: 'Rajesh Nair',
          designation: 'Senior React Developer',
          experience: '6 Years Exp',
          score: 88
        }
      ]
    },
    {
      title: 'INTERVIEW',
      candidates: [
        {
          name: 'Neha Kapoor',
          designation: 'Senior React Developer',
          experience: '8 Years Exp',
          score: 94
        }
      ]
    },
    {
      title: 'OFFER',
      candidates: [
        {
          name: 'Arjun Mehta',
          designation: 'Senior React Developer',
          experience: '4 Years Exp',
          score: 72
        }
      ]
    },
    {
      title: 'BACKGROUND CHECK',
      candidates: [
        {
          name: 'Simran Chawla',
          designation: 'Product Designer (UX/UI)',
          experience: '5 Years Exp',
          score: 85
        }
      ]
    }
  ]);

  // 👉 Advance (move forward)
  moveForward(columnIndex: number, candidateIndex: number) {
    this.pipeline.update((cols) => {
      const newCols = structuredClone(cols);

      if (columnIndex >= newCols.length - 1) return newCols;

      const candidate = newCols[columnIndex].candidates.splice(candidateIndex, 1)[0];
      newCols[columnIndex + 1].candidates.push(candidate);

      return newCols;
    });
  }

  // 👈 Reject (move backward)
  moveBackward(columnIndex: number, candidateIndex: number) {
    this.pipeline.update((cols) => {
      const newCols = structuredClone(cols);

      if (columnIndex <= 0) return newCols;

      const candidate = newCols[columnIndex].candidates.splice(candidateIndex, 1)[0];
      newCols[columnIndex - 1].candidates.push(candidate);

      return newCols;
    });
  }
}