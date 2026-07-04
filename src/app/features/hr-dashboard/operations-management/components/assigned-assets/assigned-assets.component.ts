import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ASSET_DATA } from '../../utils/asset-data';

@Component({
  selector: 'app-assigned-assets',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './assigned-assets.component.html'
})
export class AssignedAssetsComponent {

  assets = ASSET_DATA;

}