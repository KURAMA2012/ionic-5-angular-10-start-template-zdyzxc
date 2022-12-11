import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      nome: ['', [Validators.required]],
      endereco: ['', [Validators.required]],
    });
  }

  whats() {
    this.abrirURL(
      'https://api.whatsapp.com/send?phone=5511984679629&text=Oi%20Davy%20gostaria%20de%20doar?'
    );
  }

  abrirURL(url: string) {
    window.open(url, '_blank').focus();
  }

  enviar() {
    //Pegando os dados do usuario
    let nome = this.form.get('nome').value;
    let endereco = this.form.get('endereco').value;

    console.log('Enviando');
    console.log('Nome: ' + nome, ',' + 'Endereço: ' + endereco);

    this.abrirURL(
      `https://api.whatsapp.com/send?phone=5511984679629&text=
       Oi%20Davy%20me%20chamo%20${nome}%20gostaria%20de%20doar?%20enredeco%20para%20doações%20${endereco}`
    );
  }
}
