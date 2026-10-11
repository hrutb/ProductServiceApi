import { Component, OnInit } from '@angular/core';
// import { ProductServiceService } from '../../service/product-service.service';
import { Ipost } from '../../model/post.model';
import { PostService } from '../../service/post.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  constructor(private _postService:PostService, private _matDialog:MatDialog){}

 postArr:Ipost[] =[];
  ngOnInit(): void {
        this.getPosts();
  }

trackPost(index:number, post:Ipost){
     return post.id;
}
  getPosts(){
         this._postService.fetchPost()
           .subscribe({
              next:res=>{
                     this.postArr=res ;
              },
              error:err=>{
                      console.log(err);
              }
           })
   }



 getNewPost(newObj:Ipost){
      this.postArr.unshift(newObj);
    }

    // onRemove(removeId:number) {





    // }

}
