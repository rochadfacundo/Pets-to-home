import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiPetServiceService } from '../services/api-pet-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router,private apiPet_S: ApiPetServiceService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

  }

  login() {


    if (this.loginForm.valid) {


    this.apiPet_S.getMascotas().subscribe(mascotas => {
      console.log(mascotas);
    }, error => {
      console.error('Error fetching mascotas:', error);
    });
      const email = this.loginForm.get('email')?.value;
      const password = this.loginForm.get('password')?.value;

      // Aquí deberías llamar a tu API para verificar las credenciales
      // y manejar la respuesta, por ejemplo:

      // this.authService.login(email, password).subscribe(response => {
      //   if (response.success) {
      //     this.router.navigate(['/home']);
      //   } else {
      //     // manejar error
      //   }
      // });

      // Por ahora, simplemente navegamos a la página principal

    }
  }

  goToRegister()
  {
    this.router.navigateByUrl('register');
  }
}
