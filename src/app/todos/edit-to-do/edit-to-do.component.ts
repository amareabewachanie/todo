import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-edit-to-do',
  standalone: false,
  templateUrl: './edit-to-do.component.html',
  styleUrl: './edit-to-do.component.css'
})
export class EditToDoComponent implements OnInit {

 @Input() todo: string = '';
 @Output() todoEdited = new EventEmitter<string>();
 editForm: FormGroup= new FormGroup({});

 constructor(private fb: FormBuilder,
   private httpClient: HttpClient,private router: ActivatedRoute) {

   this.editForm = fb.group({
    title:['', [Validators.required, Validators.min(10),Validators.pattern('(a-zA-Z)')]]
   });
 }
  ngOnInit(): void {
    var id = this.router.snapshot.params['id'];
    this.httpClient.get(`https://jsonplaceholder.typicode.com/todos/${id}`).subscribe((data: any)=>{
      this.editForm.patchValue({title: data.title})
    })
  }
 edit(){
  console.log(this.editForm.value);

  var id = this.router.snapshot.params['id'];
  console.log(id);

  this.httpClient.put(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    title: this.editForm.value?.title,
  })
 }
}
