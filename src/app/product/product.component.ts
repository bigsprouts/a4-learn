import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private products: Array<Product>;//存储页面上将要展示的数据

  private imgUrl = 'http://placehold.it/320x150'

  constructor() { }

  ngOnInit() {

    this.products = [
      new Product(1,"第一个商品", 9.9, 3.5, "详细描述", ["电子","硬件"]),
      new Product(2,"第二个商品", 9.9, 2.5, "详细描述", ["电子","硬件"]),
      new Product(3,"第三个商品", 9.9, 4, "详细描述", ["手机","硬件"]),
      new Product(4,"第四个商品", 9.9, 3.5, "详细描述", ["电子","硬件"]),
      new Product(5,"第五个商品", 9.9, 0.5, "详细描述", ["电子","硬件"]),
      new Product(6,"第六个商品", 9.9, 3.5, "详细描述", ["电话","硬件"]),
      new Product(7,"第七个商品", 9.9, 3.5, "详细描述", ["电子","硬件"]),
      new Product(8,"第八个商品", 9.9, 3.5, "详细描述", ["电子","硬件"])
    ]

  }//初始化存储的数组，其中一个钩子(组件生命周期其中的一个)，ngOnInit实例化之后会被调用一次

}

export class Product {

  constructor(
    public id:number,
    public title:string,
    public price:number,
    public rating:number,
    public desc:string,
    public categories:Array<string>
  ){

  }
}
