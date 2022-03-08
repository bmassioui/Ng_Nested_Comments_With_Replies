import { Component, Input, OnInit } from "@angular/core";
import { CommentInterface } from "../../types/comment.interface";

@Component({
    selector: 'comment',
    templateUrl: './comment.component.html'
})

export class CommentComponent implements OnInit {
    @Input() comment!: CommentInterface;
    @Input() replies!: CommentInterface[];
    @Input() currentUserId!: string;

    public canReply: boolean = false;
    public canEdit: boolean = false;
    public canDelete: boolean = false;

    ngOnInit(): void {
        const fiveMinutes = 300000; // 5Mins
        const timePassed = new Date().getMilliseconds() - new Date(this.comment.createdAt).getMilliseconds() > fiveMinutes;
        this.canReply = Boolean(this.currentUserId); // If null or undefined, it will return false
        this.canEdit = this.currentUserId === this.comment.userId && !timePassed; // The comment is only editable(can be altered) in the 1st 5Mins by its author
        this.canDelete = this.currentUserId === this.comment.userId && this.replies.length === 0 && !timePassed; // The comment is only editable(Can be deleted) in the 1st 5Mins by its author
    }
}