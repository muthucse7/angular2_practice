import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostService {

    constructor(private http: Http) {
        console.log('Post Service initialized!!!');
    }

    getPost() {
        return this.http.get('https://jsonplaceholder.typicode.com/posts').map(res => res.json());
    }

    getComments() {
        return this.http.get('https://jsonplaceholder.typicode.com/comments').map(response => response.json());
    }

    getUsers() {
        return this.http.get('https://jsonplaceholder.typicode.com/users').map(reponse => reponse.json());
    }
}
