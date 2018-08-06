import { Component, Input } from '@angular/core';

@Component({
  selector: 'vnx-post-time',
  templateUrl: './post-time.component.html',
  styleUrls: ['./post-time.component.css']
})
export class PostTimeComponent {
  @Input() date: string;
  @Input() duration: string;

  constructor() { }
}
