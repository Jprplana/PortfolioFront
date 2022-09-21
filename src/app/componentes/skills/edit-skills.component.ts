import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/service/skills.service';

@Component({
  selector: 'app-edit-skills',
  templateUrl: './edit-skills.component.html',
  styleUrls: ['./edit-skills.component.css']
})
export class EditSkillsComponent implements OnInit {
  skill: Skills = null;

  constructor(private skillS: SkillsService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.skillS.details(id).subscribe(data => {
      this.skill = data;
    }, err => {
      alert("Error al editar");
      this.router.navigate(['']);
    }
    )
  }

  onUpdate() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.skillS.update(id, this.skill).subscribe(data => {
      this.router.navigate(['']);
    }, err => {
      alert("Error al editar la skill");
      this.router.navigate(['']);
    })
  }

}
