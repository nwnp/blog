import * as http from "http";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app/app.module";
import { NextApiHandler } from "next";
import { INestApplication } from "@nestjs/common";

export module Main {
  export async function startServer() {
    const app: INestApplication = await NestFactory.create(AppModule, {
      bodyParser: false,
    });
    app.setGlobalPrefix("api");
    await app.init();

    return app;
  }
  export async function startServerWithNextJs() {
    const app = await startServer();
    const server: http.Server = app.getHttpServer();
    const [listener]: NextApiHandler[] = server.listeners(
      "request"
    ) as NextApiHandler[];

    return listener;
  }
}
