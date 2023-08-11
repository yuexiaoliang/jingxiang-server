import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ResponseInterceptor } from './interceptors/transform.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');

  // 响应拦截器
  app.useGlobalInterceptors(new ResponseInterceptor());

  // swagger
  const config = new DocumentBuilder()
    .setTitle('静享 API')
    .setDescription('静享 API 文档：http://localhost:3000/api-json')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3200);
}
bootstrap();
