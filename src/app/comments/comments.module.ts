import { NgModule } from "@angular/core";
import { CommentsComponent } from "./components/comments.component";

@NgModule({
    declarations: [CommentsComponent],
    exports: [CommentsComponent]
})
export class CommentModule{}