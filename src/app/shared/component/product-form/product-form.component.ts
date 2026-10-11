import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
// import { Iproduct } from '../../model/product.model';
import { NgForm } from '@angular/forms';
import { Ipost } from '../../model/post.model';
import { PostService } from '../../service/post.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  constructor(private _postServ:PostService){}
        IsInEditMode:boolean = false;
       @Output()  newProdObj  = new EventEmitter<Ipost>()
       @ViewChild('postForm') postForm!:NgForm;

       ngOnInit(): void {
              this._postServ.editOBj$.subscribe({
                   next:res=>{
                        this.postForm.form.patchValue(res);
                   },
                    error:err=>{
                                console.log(err);
                    }
              })

       }



     onAdd(){
          if(this.postForm.valid){

            let newObj={
                     ...this.postForm.form.value,
                     id:Date.now()
                  }
               console.log(newObj);
               this.newProdObj.emit(newObj);
                  this.postForm.reset();
          }
      }


}
