import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-allbooks',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './allbooks.component.html',
  styleUrl: './allbooks.component.scss'
})
export class AllbooksComponent {

}
