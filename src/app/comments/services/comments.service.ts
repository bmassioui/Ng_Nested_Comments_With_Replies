import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { CommentInterface } from "../types/comment.interface";

@Injectable()
export class CommentsService {
    constructor(private httpClient: HttpClient) {
    }

    /**
     * Get Comments (API)
     * @returns 
     */
    getComments(): Observable<CommentInterface[]> {
        return this.httpClient.get<CommentInterface[]>(environment.commentsAPI);
    }
}