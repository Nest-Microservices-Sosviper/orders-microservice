/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsEnum, IsUUID } from 'class-validator';
import { OrderStatus } from 'generated/prisma';
import { OrderStatusList } from '../enum/order.enum';

export class ChangeOrdersStatusDto {
  @IsUUID(4)
  id: string;

  @IsEnum(OrderStatusList, {
    message: `Valid status are ${OrderStatusList}`,
  })
  status: OrderStatus;
}
