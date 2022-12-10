import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user!: User;
  constructor(activatedRoute: ActivatedRoute, userService: UserService) {
    activatedRoute.params.subscribe((params) => {
      if (params.id) {
        userService.getUserId(params.id).subscribe((serverUser) => {
          this.user = serverUser;
        });
        console.log('Producto..', this.user);
      }
    });
  }

  ngOnInit(): void {}
}
