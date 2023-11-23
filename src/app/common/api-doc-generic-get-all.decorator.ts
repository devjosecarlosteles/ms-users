import { applyDecorators } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiForbiddenResponse,
  ApiOkResponse,
  ApiOperation,
} from '@nestjs/swagger';

export function ApiDocGenericGetAll(value: string, modelType: any) {
  return applyDecorators(
    ApiOkResponse({
      description: `Returns all data from ${value}`,
      type: modelType,
      isArray: true,
    }),
    ApiForbiddenResponse({ description: 'Access Denied' }),
    ApiOperation({ summary: `Return all from ${value}` }),
    ApiBearerAuth('JWT'),
  );
}
