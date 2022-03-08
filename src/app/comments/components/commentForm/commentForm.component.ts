import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: 'commentForm',
    templateUrl: './commentForm.component.html'
})

export class CommentFormComponent implements OnInit {
    @Input() submitLabel!: string;
    @Input() hasCancelButton: boolean = false;
    @Input() initialText: string = '';

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
        console.log(this.form.value);
    }
}