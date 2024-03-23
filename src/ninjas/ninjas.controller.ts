import { Controller, Get, Post, Put, Delete, Param, Query, Body } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';

@Controller('ninjas')
export class NinjasController {

    //GET
    // @Get()
    // getNinjas(){
    //     return ['swords', 'start']
    // }

    // Querys Get
    @Get()
    getNinjasQuery(@Query('type') type : string){
        return {type}
    }

    @Get(':id')
    getOneNinja(@Param('id') id: string) {
        return {id}
    }
    
    //>POST
    @Post()
    createNinja(@Body() createNinjaDto: CreateNinjaDto ) {
        return {name: createNinjaDto.name}
    }


    // PUT
    @Put(':id')
    updateNinja(@Param('id') id: string, @Body() updateNinjaDto: UpdateNinjaDto) {
        return {id, name: updateNinjaDto}
    }

    // Delete
    @Delete(':id')
    deleteNinja() {
        return {play: 'animal'}
    }

}
