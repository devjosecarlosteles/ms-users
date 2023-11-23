import { applyDecorators } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiForbiddenResponse,
  ApiOkResponse,
  ApiOperation,
} from '@nestjs/swagger';

export function ApiDocGenericGetOne(value: string, modelType: any) {
  return applyDecorators(
    ApiOkResponse({
      description: `Data from ${value} requested`,
      type: modelType,
    }),
    ApiForbiddenResponse({ description: 'Access Denied' }),
    ApiOperation({ summary: `Return the ${value} by id` }),
    ApiBearerAuth('JWT'),
  );
}
