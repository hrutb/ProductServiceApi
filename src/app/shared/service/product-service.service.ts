import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Iproduct } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private _httpService:HttpClient) { }

private readonly  PRODUCT_BASE =environment.product_base;
private readonly product_url = `${this.PRODUCT_BASE}/products.json`


  fetchProduct(){
      return this._httpService.get<Iproduct[]>(this.product_url);
   }


  createProduct(newObj:Iproduct){
             return this._httpService.post<Iproduct>(this.product_url,newObj);

    }


  updateProduct(updateObj:Iproduct){
      return this._httpService.put<Iproduct>(`${this.product_url}/${updateObj.name}`,updateObj);
  }


  getProductById(getId:string){
      return this._httpService.get<Iproduct>(`${this.product_url}/${getId}`);
  }


  deleteProduct(removeId:string){
       return this._httpService.delete<Iproduct>(`${this.product_url}/${removeId}`);
  }

}
