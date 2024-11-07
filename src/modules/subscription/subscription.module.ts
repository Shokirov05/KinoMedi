import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SubscriptionsService } from './subscription.service';
import { SubscriptionsController } from './subscription.controller';
import { Subscription, SubscriptionSchema } from './schema/sub.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Subscription', schema: SubscriptionSchema }])],
  controllers: [SubscriptionsController],
  providers: [SubscriptionsService],
})
export class SubscriptionModule {}
