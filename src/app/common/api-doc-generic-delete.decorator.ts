import { applyDecorators } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiForbiddenResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiBearerAuth,
} from '@nestjs/swagger';

export function ApiDocGenericDelete(value: string) {
  return applyDecorators(
    ApiOperation({
      summary: `Remove the ${value} by id`,
    }),
    ApiOkResponse({ description: `The ${value}, Was successfully deleted` }),
    ApiBadRequestResponse({ description: 'Bad Request' }),
    ApiForbiddenResponse({ description: 'Access Denied' }),
    ApiNotFoundResponse({
      description: `The ${value} not found`,
    }),
    ApiBearerAuth('JWT'),
  );
}
