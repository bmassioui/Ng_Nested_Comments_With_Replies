import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CommentComponent } from "../comment/comment.component";
import { CommentsComponent } from "./components/comments.component";
import { CommentsService } from "./components/services/comments.service";

@NgModule({
    imports: [CommonModule],
    declarations: [CommentsComponent, CommentComponent],
    exports: [CommentsComponent],
    providers: [CommentsService]
})
export class CommentModule{}