import { Controller, Get, Query } from '@nestjs/common';
import { SearchService } from './search.service';

@Controller('search')
export class SearchController {
    constructor(private readonly searchService: SearchService) { }

    @Get()
    async search(@Query('email') email: string, @Query('number') number?: string) {
        return this.searchService.search(email, number);
    }
}
