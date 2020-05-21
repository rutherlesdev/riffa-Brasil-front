/* tslint:disable */
import {
  RaffleDraw,
  Account
} from '../index';

declare var Object: any;
export interface RaffleEntryInterface {
  "entryNumber": number;
  "isDeleted"?: boolean;
  "isLuckyDip"?: boolean;
  "isWinningEntry"?: boolean;
  "createdAt"?: Date;
  "updatedAt"?: Date;
  "id"?: any;
  "raffleDrawId"?: any;
  "accountId"?: any;
  "createdById"?: any;
  "updatedById"?: any;
  raffleDraw?: RaffleDraw;
  account?: Account;
  createdBy?: Account;
  updatedBy?: Account;
}

export class RaffleEntry implements RaffleEntryInterface {
  "entryNumber": number;
  "isDeleted": boolean;
  "isLuckyDip": boolean;
  "isWinningEntry": boolean;
  "createdAt": Date;
  "updatedAt": Date;
  "id": any;
  "raffleDrawId": any;
  "accountId": any;
  "createdById": any;
  "updatedById": any;
  raffleDraw: RaffleDraw;
  account: Account;
  createdBy: Account;
  updatedBy: Account;
  constructor(data?: RaffleEntryInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `RaffleEntry`.
   */
  public static getModelName() {
    return "RaffleEntry";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of RaffleEntry for dynamic purposes.
  **/
  public static factory(data: RaffleEntryInterface): RaffleEntry{
    return new RaffleEntry(data);
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
          // fields: ['accountId', 'createdById', 'invitivationCode', 'id', 'raffleDrawId'],
          
         // fields: {accountId: false, createdById: true },
      name: 'RaffleEntry',
      plural: 'RaffleEntries',
      path: 'RaffleEntries',
      idName: 'id',
      properties: {
        "entryNumber": {
          name: 'entryNumber',
          type: 'number'
        },
        "isDeleted": {
          name: 'isDeleted',
          type: 'boolean',
          default: false
        },
        "isLuckyDip": {
          name: 'isLuckyDip',
          type: 'boolean',
          default: false
        },
        "isWinningEntry": {
          name: 'isWinningEntry',
          type: 'boolean',
          default: false
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
        "raffleDrawId": {
          name: 'raffleDrawId',
          type: 'any'
        },
        "accountId": {
          name: 'accountId',
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
        raffleDraw: {
          name: 'raffleDraw',
          type: 'RaffleDraw',
          model: 'RaffleDraw',
          relationType: 'belongsTo',
                  keyFrom: 'raffleDrawId',
          keyTo: 'id'
        },
        account: {
          name: 'account',
          type: 'Account',
          model: 'Account',
          relationType: 'belongsTo',
                  keyFrom: 'accountId',
          keyTo: 'id'
        },
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
