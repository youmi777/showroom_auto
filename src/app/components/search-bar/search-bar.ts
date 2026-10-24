import { Component ,EventEmitter,Input,OnInit, Output} from '@angular/core';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import { Auto } from '../../interfaces/auto';
@Component({
  imports: [FontAwesomeModule],
  selector: 'app-search-bar',
  styleUrl: './search-bar.css',
  templateUrl: './search-bar.html',
})
export class SearchBar implements OnInit {
   faMagnifyingGlass = faMagnifyingGlass;

   @Input() autos: Auto[] = []; 
   @Output() onselectcar = new EventEmitter<Auto>();
   selectedautos: Auto[] = [];
   @Input() comparelist: Auto[] = [];
   @Output() oncompare = new EventEmitter<Auto>();

   ngOnInit() {
    this.selectedautos = this.autos;
   }


   selectAutos(selectedBrand: string) {
    if(selectedBrand){
      this.selectedautos=this.autos.filter(auto => auto.brand.toLowerCase().startsWith(selectedBrand.toLowerCase()));
    }
    else
      this.selectedautos = this.autos;
   }
   selectcar(auto: Auto) {
    this.onselectcar.emit(auto);
   }

    compare(auto: Auto) {
    this.oncompare.emit(auto);
  }

  isCompared(auto: Auto): boolean {
    return this.comparelist.includes(auto);
  }


}
