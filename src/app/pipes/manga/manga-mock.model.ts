import { MangaModel } from './manga.model';

export const MangaMock: Array<MangaModel> = [
    { titulo: 'btooom dark', volume: 26, rating: 4.3456, numeroPaginas: 304, preco: 12.90, dataLancamento: new Date(2019, 3, 2),
        url: 'https://www.amazon.com.br/Btooom-Dark-26-Junya-Inoue/dp/8545707843/?tag=jbsi-20' },
    { titulo: 'Fairy Tail', volume: 62, rating: 4.2145, numeroPaginas: 201, preco: 9.40, dataLancamento: new Date(2018, 1, 28),
        url: 'https://www.amazon.com.br/Fairy-Tail-62-Hiro-Mashima/dp/854570691X/' },
    { titulo: 'ataque dos titãs', volume: 27, rating: 5, numeroPaginas: 192, preco: 15.92, dataLancamento: new Date(2019, 6, 2),
        url: 'https://www.amazon.com.br/Ataque-Tit%C3%A3s-Vol-27-Hajime-Isayama/dp/8542622634/' },
    { titulo: 'One Punch man', volume: 18, rating: 4.54321, numeroPaginas: 200, preco: 21.10, dataLancamento: new Date(2019, 6, 24),
        url: 'https://www.amazon.com.br/One-Punch-Man-18-V%C3%A1rios-Autores/dp/8542620526/' },
    { titulo: 'One Piece', volume: 89, rating: 4.3456, numeroPaginas: 216, preco: 17.00, dataLancamento: new Date(2019, 7, 2),
        url: 'https://www.amazon.com.br/One-Piece-Ed-Eiichiro-Oda/dp/8542620534/' },
    { titulo: 'Os Sete Pecados Capitais', volume: 34, rating: 4.87654, numeroPaginas: 200, preco: 12.80,
        dataLancamento: new Date(2019, 2, 1),
        url: 'https://www.amazon.com.br/Seven-Deadly-Sins-34/dp/8545709889/' },
    { titulo: 'Dragon Ball Super', volume: 6, rating: 4.7654, numeroPaginas: 192, preco: 18.60, dataLancamento: new Date(2019, 7, 2),
        url: 'https://www.amazon.com.br/Dragon-Ball-Super-Vol-6/dp/8542615549/' },
];
