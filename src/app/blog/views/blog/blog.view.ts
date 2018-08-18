import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'blog-view',
  templateUrl: './blog.view.html',
  styleUrls: ['./blog.view.css']
})
export class BlogView implements OnInit {
  posts;
  constructor() { }

  ngOnInit() {
    this.posts = [
      {
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
          "email": "brian@visualnovelx.com",
          "twitter": "https://twitter.com/jemiloii",
          "instagram": "https://www.instagram.com/jemiloii",
          "linkedin": "https://www.linkedin.com/in/jemiloii"
        },
        "content": "Riko Yamane, third grade junior high school student who is confined to the obsession of \"It might hurt people\". She had a trauma of \"being killed\" in front of her classmate Kanako when he was in elementary school sixth grade. Kanako's younger brother / Yujin appeared one day before Riko who managed to calm herself by spelling it on a note named \"Night's Diary\" for \"Familiar Human Murder Plan\" and Riko who was sending school life somehow. Threatened to reveal the secret of Riko related to \"death of Kanako\", Riko will help plan to kill Hideo 's father. Riko who is attracted to the honor who can share the \"night diary\" who could not tell anyone, unavoidably thinking of the murder plan. Soon they will put the murder plan into action."
      },
      {
        "date": "2018-06-17T06:21:52.505Z",
        "duration": "15 min",
        "image": {
          "artist": "Linfi-MUU",
          "pixiv": "https://www.pixiv.net/member.php?id=6327914",
          "twitter": "https://twitter.com/LinfiMuu",
          "title": "————",
          "url": "/assets/66772012_p0.jpg",
          "link": "https://www.pixiv.net/member_illust.php?mode=medium&illust_id=66772012"
        },
        "categories": ["vnxspotlight"],
        "title": "Cooking in the Kitchen",
        "author": {
          "email": "brian@visualnovelx.com",
          "twitter": "https://twitter.com/jemiloii",
          "instagram": "https://www.instagram.com/jemiloii",
          "linkedin": "https://www.linkedin.com/in/jemiloii"
        },
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      }
    ];
  }

}
