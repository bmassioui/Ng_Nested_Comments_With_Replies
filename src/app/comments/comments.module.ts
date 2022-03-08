import { NgModule } from "@angular/core";
import { CommentsComponent } from "./components/comments.component";
import { CommentsService } from "./components/services/comments.service";

@NgModule({
    declarations: [CommentsComponent],
    exports: [CommentsComponent],
    providers: [CommentsService]
})
export class CommentModule{}