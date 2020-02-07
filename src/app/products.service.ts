import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  uri = 'http://localhost:4000/products';
  product_added = 0;

  constructor(private http: HttpClient) { }

  addProduct(ProductName, ProductDescription, ProductPrice) {
    const obj = {
      ProductName,
      ProductDescription,
      ProductPrice
    };

    this.http.post(`${this.uri}/add`, obj, { responseType: "json"})
        .subscribe(res => { 
          if (res.save)  
            this.product_added = 1; 
        });
  }

  getProducts() {
    return this
           .http
           .get(`${this.uri}`);
  }
}
