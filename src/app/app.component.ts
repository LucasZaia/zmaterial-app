import { Component } from '@angular/core';
import { ZMenuProfile, ZModalService, ZMenuItems,ZMenuBootstrapItens, ZMenuProfileBootstrap} from 'zmaterial';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public currentProfile: ZMenuProfile = {
    descriptions: [
      {icon: 'email', text: 'ivanantnes75@gmail.com'},
    ]
  };

  public currentProfileBootstrap: ZMenuProfileBootstrap = {  
    img:'https://instagram.fsod8-1.fna.fbcdn.net/v/t51.2885-19/s150x150/155286890_286674549544222_4007179158159824399_n.jpg?tp=1&_nc_ht=instagram.fsod8-1.fna.fbcdn.net&_nc_ohc=IOeJO6hdY8oAX8eMrXt&edm=ABfd0MgAAAAA&ccb=7-4&oh=6e87b0b6245ef13675f09bc7f8273c96&oe=609B0898&_nc_sid=7bff83',
    descriptions: [
        {icon: 'fa-envelope', text: 'Lucas.zaia30@gmail.com'},
        {icon: 'fa-phone', text: 'Lucas.zaia30@gmail.com'},
      ]
    };


  public currentMenus: ZMenuItems[] = [
    {
      category: 'Cadastro',
      icon: 'add',
      itens: [
        { label: 'Usuário', link: 'register/user' },
        { label: 'Curso', link: 'register/course' }
      ]
    }
  ];

  public currentBootstrapMenus: ZMenuBootstrapItens[] = [
    {
      category: 'Cadastro',
      icon: 'fa-user-plus',
      itens: [
        {label:'User',link:'register/user'},
      ]
    },
    {
      category: 'Curso',
      icon: 'fa-graduation-cap',
      itens: [
        {label:'Course',link:'register/course'},
      ]
    },
  ];

  constructor(private zModal: ZModalService) {


  }

  public logout(event: boolean): void {
    console.log(event);
  }
}
