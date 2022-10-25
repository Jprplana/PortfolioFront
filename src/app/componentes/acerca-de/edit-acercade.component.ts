import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AcercaDe } from 'src/app/model/acerca-de';
import { AcercaDeService } from 'src/app/service/acerca-de.service';

@Component({
  selector: 'app-edit-acercade',
  templateUrl: './edit-acercade.component.html',
  styleUrls: ['./edit-acercade.component.css']
})
export class EditAcercadeComponent implements OnInit {
  acercade: AcercaDe;

  constructor(private acercadeS: AcercaDeService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.acercadeS.detail(id).subscribe(data => {
      this.acercade = data;
    }, err => {
      alert("Error al editar");
      this.router.navigate(['']);
    })
  }

  onUpdate() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.acercadeS.update(id, this.acercade).subscribe(data => {
      this.router.navigate(['']);
    }, err => {
      alert("Error al editar la descripción");
      this.router.navigate(['']);
    }
    )
  }

}
