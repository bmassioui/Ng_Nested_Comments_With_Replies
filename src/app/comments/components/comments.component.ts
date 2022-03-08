import { Component, Input } from "@angular/core";

@Component({
    selector: 'comments',
    templateUrl: './comments.component.html'
})

export class CommentsComponent {
    @Input() currentUserId!: string; // 100% sure that will be provided
}