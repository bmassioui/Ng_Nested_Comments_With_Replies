import { Component, Input, OnInit } from "@angular/core";
import { CommentsService } from "./services/comments.service";

@Component({
    selector: 'comments',
    templateUrl: './comments.component.html'
})

export class CommentsComponent implements OnInit {
    @Input() currentUserId!: string; // 100% sure that will be provided
    
    constructor(private commentsService : CommentsService) {
    }

    ngOnInit(): void {
        this.commentsService.getComments().subscribe((comments) => console.log(comments));
    }
}