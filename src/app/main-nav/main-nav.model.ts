export class MainNavModel {
    textMenu: string;
    routerLink: string;
}

export const Menus: MainNavModel[] = [
    { routerLink: '/introducao', textMenu: 'Introducao' },
    { routerLink: '/diretivas', textMenu: 'Diretivas' },
    { routerLink: '/data-binding-events', textMenu: 'Data Binding Events' },
    { routerLink: '/servicos', textMenu: 'Servicos' },
    { routerLink: '/pipes', textMenu: 'Pipes' },
];
