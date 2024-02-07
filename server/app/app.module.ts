import { Module } from "@nestjs/common";
import { AppService } from "./app.service";
import { PostsService } from "../posts/posts.service";
import { AppController } from "./app.controller";
import { PostsController } from "../posts/posts.controller";

@Module({
  controllers: [AppController, PostsController],
  providers: [AppService, PostsService],
})
export class AppModule {}
