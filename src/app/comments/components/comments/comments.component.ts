import { Component, Input, OnInit } from "@angular/core";
import { CommentsService } from "../../services/comments.service";
import { ActiveCommentInterface } from "../../types/activeComment.interface";
import { CommentInterface } from "../../types/comment.interface";

@Component({
    selector: 'comments',
    templateUrl: './comments.component.html'
})

export class CommentsComponent implements OnInit {
    @Input() currentUserId!: string; // 100% sure that will be provided
    comments: CommentInterface[] = [];
    activeComment: ActiveCommentInterface | null = null;

    constructor(private commentsService: CommentsService) {
    }

    ngOnInit(): void {
        this.commentsService.getComments().subscribe((comments) => this.comments = comments);
    }

    /**
     * Add Comment
     * @param param
     */
    addComment({ text, parentId }: { text: string, parentId: null | string }): void {
        this.commentsService.createComment(text, parentId).subscribe((createdComment) => {
            this.comments = [...this.comments, createdComment];
            this.activeComment = null;
        });
    }

    /**
     * Update Comment
     * @param 
     */
    updateComment({ text, commentId }: { text: string, commentId: string }) {
        this.commentsService.updateComment(commentId, text)
            .subscribe((updatedComment) => {
                this.comments = this.comments.map((comment) =>{
                    if(comment.id === commentId) return updatedComment;
                    return comment;
                })

                this.activeComment = null;
            });
    }

    /**
     * Delete Comment
     * @param commentId 
     */
    deleteComment(commentId: string) : void{
        this.commentsService.deleteComment(commentId).subscribe(() =>{
            this.comments = this.comments.filter((comment) => comment.id !== commentId);
        });
    }

    /**
     * Get Comment's Replies
     * @param commentId 
     * @returns 
     */
    getReplies(commentId: string): CommentInterface[] {
        return this.comments
            .filter(comment => comment.parentId == commentId)
            .sort((a, b) =>
                new Date(a.createdAt).getMilliseconds() -
                new Date(b.createdAt).getMilliseconds()
            );
    }

    /**
     * Set Active Comment
     */
    setActiveComment(activeComment: ActiveCommentInterface | null): void {
        this.activeComment = activeComment;
    }
}