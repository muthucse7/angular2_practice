import { Component } from '@angular/core';
import { PostService } from '../services/post.services';

@Component({
    moduleId: module.id,
    selector: 'user',
    templateUrl: 'user.component.html',
    providers: [PostService]
})
export class UserComponent {

    name: String;
    email: String;
    address: address;
    hoppies: String[];
    showHoppies: Boolean;
    posts: Post[];
    comments: Comment[];
    users: User[];

    constructor(private postService: PostService) {
        this.postService.getPost().subscribe(posts => {
            this.posts = posts;
        });

        this.postService.getComments().subscribe(response => {
            this.comments = response;
        });

        this.postService.getUsers().subscribe(response => {
            this.users = response;
        });

        /*this.name = 'Muthu Selvam';
        this.email = 'muthu.softwar@gmail.com';
        this.address = {
            street: '7515 Marchand Ln APt 602',
            city: 'charlotte',
            state: 'North Carolina',
            country: 'United State of America'
        }*/
        this.hoppies = ['watching TV', 'Listening Music', 'YMCA GYM'];
        this.showHoppies = false;

    }

    toggleHoppies() {
        if (this.showHoppies == true) {
            this.showHoppies = false;
        } else {
            this.showHoppies = true;
        }
    }
    addHoppies(value: String) {
        this.hoppies.push(value);
        console.log("test");

    }

    deleteHoppy(i: number) {
        this.hoppies.splice(i, 1);
    }
}

interface address {
    street: String;
    city: String;
    state: String;
    country: String;
}

interface Post {
    id: Number;
    title: String;
    body: String;
}

/*
 {
    "postId": 1,
    "id": 3,
    "name": "odio adipisci rerum aut animi",
    "email": "Nikita@garfield.biz",
    "body": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
  } */
interface Comment {
    id: Number;
    name: String;
    email: String;
    body: String;

}

// User JSON Objects
/*
 {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  } */
interface User {
    id: Number;
    name: String;
    username: String;
    email: String;
    userAddress: UserAddress;
    phone: String;
    website: String;
    company: Company;

}

interface UserAddress {
    street: String;
    suite: String;
    city: String;
    zipcode: String;
    geo: Geo;
}

interface Geo {
    lat: String;
    lng: String;
}

interface Company {
    name: String;
    catchPhrase: String;
    bs: String;
}
