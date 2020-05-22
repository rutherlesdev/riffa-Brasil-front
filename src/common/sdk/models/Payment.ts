/* tslint:disable */
import {
  Account
} from '../index';

declare var Object: any;
export interface PaymentInterface {
  "amount": number;
  "currency": string;
  "createdAt"?: Date;
  "updatedAt"?: Date;
  "id"?: any;
  "createdById"?: any;
  "updatedById"?: any;
  createdBy?: Account;
  updatedBy?: Account;
}

export class Payment implements PaymentInterface {
  "amount": number;
  "currency": string;
  "createdAt": Date;
  "updatedAt": Date;
  "id": any;
  "createdById": any;
  "updatedById": any;
  createdBy: Account;
  updatedBy: Account;
  constructor(data?: PaymentInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Payment`.
   */
  public static getModelName() {
    return "Payment";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Payment for dynamic purposes.
  **/
  public static factory(data: PaymentInterface): Payment{
    return new Payment(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Payment',
      plural: 'Payments',
      path: 'Payments',
      idName: 'id',
      properties: {
        "amount": {
          name: 'amount',
          type: 'number'
        },
        "currency": {
          name: 'currency',
          type: 'string',
          default: 'brl'
        },
        "createdAt": {
          name: 'createdAt',
          type: 'Date'
        },
        "updatedAt": {
          name: 'updatedAt',
          type: 'Date'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "createdById": {
          name: 'createdById',
          type: 'any'
        },
        "updatedById": {
          name: 'updatedById',
          type: 'any'
        },
      },
      relations: {
        createdBy: {
          name: 'createdBy',
          type: 'Account',
          model: 'Account',
          relationType: 'belongsTo',
                  keyFrom: 'createdById',
          keyTo: 'id'
        },
        updatedBy: {
          name: 'updatedBy',
          type: 'Account',
          model: 'Account',
          relationType: 'belongsTo',
                  keyFrom: 'updatedById',
          keyTo: 'id'
        },
      }
    }
  }
}
