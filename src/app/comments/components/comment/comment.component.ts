import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { ActiveCommentInterface } from "../../types/activeComment.interface";
import { ActiveCommentTypeEnum } from "../../types/activeCommentType.enum";
import { CommentInterface } from "../../types/comment.interface";

@Component({
    selector: 'comment',
    templateUrl: './comment.component.html'
})

export class CommentComponent implements OnInit {
    @Input() comment!: CommentInterface;
    @Input() replies!: CommentInterface[];
    @Input() currentUserId!: string;
    @Input() activeComment!: ActiveCommentInterface | null;
    @Input() parentId: string | null = null;

    @Output() setActiveComment = new EventEmitter<ActiveCommentInterface | null>();
    @Output() addComment = new EventEmitter<{
        text: string;
        parentId: string | null;
    }>();
    @Output() updateComment = new EventEmitter<{
        text: string;
        commentId: string;
    }>();
    

    public canReply: boolean = false;
    public canEdit: boolean = false;
    public canDelete: boolean = false;
    public replyId: string | null = null;

    public activeCommentType = ActiveCommentTypeEnum;

    ngOnInit(): void {
        const fiveMinutes = 300000; // 5Mins
        const timePassed = new Date().getMilliseconds() - new Date(this.comment.createdAt).getMilliseconds() > fiveMinutes;
        this.canReply = Boolean(this.currentUserId); // If null or undefined, it will return false
        this.canEdit = this.currentUserId === this.comment.userId && !timePassed; // The comment is only editable(can be altered) in the 1st 5Mins by its author
        this.canDelete = this.currentUserId === this.comment.userId && this.replies.length === 0 && !timePassed; // The comment is only editable(Can be deleted) in the 1st 5Mins by its author
        this.replyId = this.parentId ? this.parentId : this.comment.id;
    }

    /**
     * Is Replying
     * @returns 
     */
    isReplying(): boolean {
        if (!this.activeComment) return false;

        return this.activeComment.id === this.comment.id &&
            this.activeComment.type === this.activeCommentType.replying;
    }

    /**
     * Is Editing
     * @returns 
     */
    isEditing(): boolean {
        if (!this.activeComment) return false;

        return this.activeComment.id === this.comment.id &&
            this.activeComment.type === this.activeCommentType.editing;
    }
}