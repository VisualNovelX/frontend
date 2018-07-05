import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'vnx-post-preview',
  templateUrl: './post-preview.component.html',
  styleUrls: ['./post-preview.component.css']
})
export class PostPreviewComponent implements OnInit {
  @Input() post: object;

  constructor() {}

  ngOnInit() {
    console.log('posts:', this.post);
  }

}
