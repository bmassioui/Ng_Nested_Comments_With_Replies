import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: 'commentForm',
    templateUrl: './commentForm.component.html'
})

export class CommentFormComponent implements OnInit {
    @Input() submitLabel!: string;
    @Input() hasCancelButton: boolean = false;
    @Input() initialText: string = '';

    @Output() handleSubmit = new EventEmitter<string>();
    @Output() handleCancel = new EventEmitter<void>();

    public form! : FormGroup;

    constructor(private formBuilder : FormBuilder) {
    }

    ngOnInit(): void {
        this.form = this.formBuilder.group({
           title: [this.initialText, Validators.required],
        });
    }

    /**
     * On Submit form
     */
    onSubmit(): void{
        this.handleSubmit.emit(this.form.value.title);
    }
}