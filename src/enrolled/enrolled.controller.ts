import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { EnrolledService } from './enrolled.service';
import type { CreateEnrolledDto } from './dto/create-enrolled.dto';
import { CreateEnrolledSchema, CreateEnrolledDtoSwagger } from './dto/create-enrolled.dto';
import type { UpdateEnrolledDto } from './dto/update-enrolled.dto';
import { UpdateEnrolledSchema, UpdateEnrolledDtoSwagger } from './dto/update-enrolled.dto';
import { ZodValidationPipe } from 'src/shared/pipes/zod-validation.pipe';

@ApiTags('enrolled')
@Controller('enrolled')
export class EnrolledController {
  constructor(private readonly enrolledService: EnrolledService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new enrolled user' })
  @ApiBody({ type: CreateEnrolledDtoSwagger })
  @ApiResponse({ status: 201, description: 'User created successfully' })
  @UsePipes(new ZodValidationPipe(CreateEnrolledSchema))
  create(@Body() createEnrolledDto: CreateEnrolledDto) {
    return this.enrolledService.create(createEnrolledDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all enrolled users' })
  @ApiResponse({ status: 200, description: 'List of all enrolled users' })
  findAll() {
    return this.enrolledService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get an enrolled user by ID' })
  @ApiResponse({ status: 200, description: 'Enrolled user found' })
  findOne(@Param('id') id: string) {
    return this.enrolledService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update an enrolled user' })
  @ApiBody({ type: UpdateEnrolledDtoSwagger })
  @ApiResponse({ status: 200, description: 'Enrolled user updated successfully' })
  @UsePipes(new ZodValidationPipe(UpdateEnrolledSchema))
  update(@Param('id') id: string, @Body() updateEnrolledDto: UpdateEnrolledDto) {
    return this.enrolledService.update(+id, updateEnrolledDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete an enrolled user' })
  @ApiResponse({ status: 200, description: 'Enrolled user deleted successfully' })
  remove(@Param('id') id: string) {
    return this.enrolledService.remove(+id);
  }
}
