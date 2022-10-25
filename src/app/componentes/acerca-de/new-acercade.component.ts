import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AcercaDe } from 'src/app/model/acerca-de';
import { AcercaDeService } from 'src/app/service/acerca-de.service';

@Component({
  selector: 'app-new-acercade',
  templateUrl: './new-acercade.component.html',
  styleUrls: ['./new-acercade.component.css']
})
export class NewAcercadeComponent implements OnInit {
  descripcion: Text;

  constructor(private acercadeS: AcercaDeService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const acercade = new AcercaDe(this.descripcion);
    this.acercadeS.save(acercade).subscribe(data => {
      alert("Descripción creada correctamente");
      this.router.navigate(['']);
    }, err => {
      alert("Falló al añadir la descripción");
      this.router.navigate(['']);
    })
  }

}
