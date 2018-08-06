import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'vnx-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post: object;
  title: string;
  private sub: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.sub = this.route.paramMap.pipe(
      switchMap(params => {
        this.title = params.get('title');
        // request data for post by title, using stub for now
        return [{
          "date": "2018-06-14T06:06:21.105Z",
          "duration": "1 min",
          "image": {
            "artist": "loundraw",
            "pixiv": "https://www.pixiv.net/member.php?id=772547",
            "twitter": "https://twitter.com/loundraw",
            "title": "少女は夜を綴らない",
            "url": "/assets/63967458_p0_master1200.jpg"
          },
          "categories": ["vnxspotlight"],
          "title": "A young mystery impossible to read ahead, drawing a girl who plunges into a \"murder plan\"!",
          "author": {
            "name": "Sumi-chan",
            "image": "/assets/authors/sumi.jpg",
            "email": "brian@visualnovelx.com",
            "twitter": "visualnovelx",
            "instagram": "visualnovelx"
          },
          "content": "Riko Yamane, third grade junior high school student who is confined to the obsession of \"It might hurt people\". She had a trauma of \"being killed\" in front of her classmate Kanako when he was in elementary school sixth grade. Kanako's younger brother / Yujin appeared one day before Riko who managed to calm herself by spelling it on a note named \"Night's Diary\" for \"Familiar Human Murder Plan\" and Riko who was sending school life somehow. Threatened to reveal the secret of Riko related to \"death of Kanako\", Riko will help plan to kill Hideo 's father. Riko who is attracted to the honor who can share the \"night diary\" who could not tell anyone, unavoidably thinking of the murder plan. Soon they will put the murder plan into action."
        }];
      })
    ).subscribe(post => {
      this.post = post;
    });
  }

  trackScroll(p1, p2, p3) {
    console.log('p1', p1);
    console.log('p2', p2);
    console.log('p3', p3);
  }
}
