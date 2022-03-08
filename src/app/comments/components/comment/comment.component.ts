import { Component, Input } from "@angular/core";
import { CommentInterface } from "../../types/comment.interface";

@Component({
    selector: 'comment',
    templateUrl:'./comment.component.html'
})

export class CommentComponent{
    @Input() comment! : CommentInterface;
}