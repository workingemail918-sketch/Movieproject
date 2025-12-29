import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Service } from '../service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorites',
  imports: [CommonModule],
  templateUrl: './favorites.html',
  styleUrl: './favorites.css',
})
export class Favorites implements OnInit{
  favorites:any = []
constructor(private service:Service, private router:Router){

}
  ngOnInit(): void {
    this.service.user$.subscribe((user)=>{
      this.service.getdoc(user?.uid).subscribe(async (res)=>{
       await console.log(res);
       if (res) {
                this.favorites = res['favorites']
       }
       console.log(this.favorites);
       
      })
    })
  }

    tomovie(  id:string){
  this.router.navigate(['/movie', id]);}
}
