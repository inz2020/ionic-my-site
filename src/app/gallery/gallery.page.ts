import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {
  public keyword: string;

  public currentPage: number=1;
  public  size:number=10;
  private dataImages= [];
  private totalPages: number;

  constructor(private httpClient:HttpClient ){ }

  ngOnInit() {
  }

  doSearch(){
    this.httpClient.get('https://pixabay.com/api/?key=21188057-c9c4d5022d25eb7c2bf09d819&q='+this.keyword+'&per_page='+this.size+'&page='+this.currentPage)
      .subscribe(
        data=>{
          console.log(data);
          data['hits'].forEach(
            image=>{
              /A chaque fois que je recupére une image, je l'ajoute à la liste/
              this.dataImages.push(image);
            });
          //Calculer le total de pages
          this.totalPages=data ['totalHits']/this.size;
        },
        error => {
          console.log(error);
        }
      );


  }

  onLoadImages() {
   this.dataImages=[];
   this.currentPage=1;
   this.totalPages=0;
   this.doSearch();
  }
//Le event represente Infinite Scroll. Il est important de lui dire que les data sont chargées à chaque fois qu'on scrolle. D'où l'appel à la fonction complete()
  loadData(event) {
    if(this.currentPage<this.totalPages){
      console.log(this.currentPage+ "/"+this.totalPages);
    ++this.currentPage;
    this.doSearch();
    event.target.complete();
    }

    if(this.currentPage>this.totalPages){
      event.target.disabled=true;
    }
  }
}
