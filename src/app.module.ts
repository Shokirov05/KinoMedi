import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './modules/users/users.module';
import { ActorModule } from './modules/actor/actor.module';
import { CardModule } from './modules/card/card.module';
import { GenreModule } from './modules/genre/genre.module';
import { SubscriptionModule } from './modules/subscription/subscription.module';  
import { MovieModule } from './modules/movie/movie.module';
import { OrderModule } from './modules/order/order.module';
import { PaymentModule } from './modules/payment/payment.module';
import { PromocodeModule } from './modules/promocode/promocode.module';
import { SerialModule } from './modules/serial/serial.module';
import { SerialVidModule } from './modules/serial_vid/serial_vid.module';
import { TrailerModule } from './modules/trailer/trailer.module'
import { TrailerCommentModule } from './modules/trailer_comments/trailer_comments.module';
import { TrailerLikeModule } from './modules/trailer_likes/trailer_likes.module';
import { ViewModule } from './modules/view/view.module';
import { SeedsModule } from './seeds/seeds.module';
import { AuthModule } from './modules/auth';

@Module({
  imports: [
    MongooseModule.forRoot(`mongodb://localhost/Movie`),
    UsersModule,
    SubscriptionModule,
    ActorModule,
    CardModule,
    GenreModule,
    MovieModule,
    OrderModule,
    PaymentModule,
    PromocodeModule,
    SerialModule,
    SerialVidModule,
    TrailerModule,
    TrailerCommentModule,
    TrailerLikeModule,
    ViewModule,
    SeedsModule,
    AuthModule,
    ],
})
export class AppModule {}
