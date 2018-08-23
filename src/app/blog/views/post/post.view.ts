import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'post-view',
  templateUrl: './post.view.html',
  styleUrls: ['./post.view.css']
})
export class PostView implements OnInit {
  title: string;
  private sub: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.title = params['title'];
    });
  }
}
