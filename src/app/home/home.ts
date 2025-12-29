import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from '@angular/core';
import { Service } from '../service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
    schemas: [CUSTOM_ELEMENTS_SCHEMA], 

})
export class Home {
  uid:string|undefined =''
  @ViewChild('movieSwiper', { static: false })
  movieSwiper!: ElementRef;
   @ViewChild('movieSwiperr', { static: false })
  movieSwiperr!: ElementRef;

constructor( private service: Service, private router:Router) {
 

}
popularpage:number=1;
upcomingpage:number=1;
movieData:any[]=[]
moviestoprated:any[]=[]
movieupcoming:any[]=[]
movienowplaying:any[]=[]
  getallmovies(){
    this.service.getPopularMovies(this.popularpage).subscribe((data) => {
      this.movieData = data.results;
      console.log(this.movieData);
      
    });
    this.service.gettopratedMovies().subscribe((data) => {
      this.moviestoprated = data.results.slice(0,10);
      console.log(this.moviestoprated, 'top');
      
    });
    this.service.getupcomingMovies(this.upcomingpage).subscribe((data) => {
      this.movieupcoming = data.results;
            console.log(this.movieupcoming);

    });
    this.service.getnowplayingMovies().subscribe((data) => {
      this.movienowplaying = data.results;
                  console.log(this.movienowplaying);

    });
  }

  ngOnInit() {
    this.getallmovies();
    this.service.user$.subscribe(user => {
      this.uid = user?.uid
    });    
  }
  scrollto(){
    const element = document.getElementById('movies');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });}
      
  }
  loadmore() {
  this.service.getPopularMovies(this.popularpage + 1).subscribe((data) => {
    this.popularpage++;

    const previousLength = this.movieData.length;

    this.movieData.push(...data.results);

    const swiperEl = this.movieSwiper.nativeElement;

    setTimeout(() => {
      swiperEl.swiper.slideTo(previousLength, 500);
    }, 500);
  });
}

 loadmoree() {
  this.service.getupcomingMovies(this.upcomingpage + 1).subscribe((data) => {
    this.upcomingpage++;

    const previousLength = this.movieupcoming.length;

    this.movieupcoming.push(...data.results);

    const swiperEl = this.movieSwiperr.nativeElement;

    setTimeout(() => {
      swiperEl.swiper.slideTo(previousLength, 500);
    }, 500);
  });
}

tomovie(  id:string){
  this.router.navigate(['/movie', id]);
}


 menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  isfavorite=false
  addfavorite(){
    this.isfavorite = true
  }
  removefavorite(){
        this.isfavorite = false

  }
  test(){
 
  }
  logout(){
    this.service.signout().then(()=>{
alert('Succesfully Logged out')
      
    })
  }
}
