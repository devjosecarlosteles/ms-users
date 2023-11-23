import { applyDecorators } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiOperation,
} from '@nestjs/swagger';

export function ApiDocGenericPost(value: string, modelType: any) {
  return applyDecorators(
    ApiCreatedResponse({
      description: `The ${value} successfully created`,
      type: modelType,
    }),
    ApiBadRequestResponse({ description: 'Bad Request' }),
    ApiForbiddenResponse({ description: 'Access Denied' }),
    ApiOperation({ summary: `Create a new ${value}` }),
  );
}
