import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CommentComponent } from "./components/comment/comment.component";
import { CommentsComponent } from "./components/comments/comments.component";
import { CommentsService } from "./services/comments.service";

@NgModule({
    imports: [CommonModule],
    declarations: [CommentsComponent, CommentComponent],
    exports: [CommentsComponent],
    providers: [CommentsService]
})
export class CommentModule{}