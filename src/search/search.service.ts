import { Injectable, NotFoundException } from '@nestjs/common';

const users = [
    { email: 'jim@gmail.com', number: '221122' },
    { email: 'jam@gmail.com', number: '830347' },
    { email: 'john@gmail.com', number: '221122' },
    { email: 'jams@gmail.com', number: '349425' },
    { email: 'jams@gmail.com', number: '141424' },
    { email: 'jill@gmail.com', number: '822287' },
    { email: 'jill@gmail.com', number: '822286' },
];

@Injectable()
export class SearchService {
    async search(email: string, number?: string): Promise<any> {
        await new Promise(resolve => setTimeout(resolve, 5000)); // Задержка 5 секунд
        const results = users.filter(user => user.email === email && (!number || user.number === number));
        if (results.length === 0) {
            throw new NotFoundException('Пользователь не найден в базе данных');
        }
        return results;
    }
}
