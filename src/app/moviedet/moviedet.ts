import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Service } from '../service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-moviedet',
      schemas: [CUSTOM_ELEMENTS_SCHEMA], 

  imports: [RouterLink, CommonModule],
  templateUrl: './moviedet.html',
  styleUrl: './moviedet.css',
})
export class Moviedet implements OnInit {
  popularpage:number=1;

  @ViewChild('movieSwiper', { static: false })
  movieSwiper!: ElementRef;
  movieId:number=0;
  movieDetails:any;
  similarMovies:any[]=[];
constructor(private route:ActivatedRoute, private router:Router, private service:Service) {}
ngOnInit() {
  this.route.paramMap.subscribe(params => {
      this.movieId = Number(params.get('id'));
      this.getMovieDetails();
      this.getsimilarMovies();
    });
}
getMovieDetails() {
    this.service.getmoviedetails(this.movieId).subscribe(async data => {
      this.movieDetails = await data;
          
    });
  }
  getsimilarMovies() {
    this.service.getsimilarMovies(this.movieId,1).subscribe(async data => {
      this.similarMovies = await data.results;
      console.log(this.similarMovies, 'similar');
    });
  } 
   loadmore() {
  this.service.getsimilarMovies(this.movieId, this.popularpage + 1).subscribe((data) => {
    this.popularpage++;

    const previousLength = this.similarMovies.length;

    this.similarMovies.push(...data.results);

    const swiperEl = this.movieSwiper.nativeElement;

    setTimeout(() => {
      swiperEl.swiper.slideTo(previousLength, 500);
    }, 500);
  });
}

  tomovie(  id:string){
  this.router.navigate(['/movie', id]);
  scroll(0,10);
}
  }