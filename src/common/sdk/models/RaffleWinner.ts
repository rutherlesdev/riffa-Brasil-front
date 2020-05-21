/* tslint:disable */
import {
  Account,
  RaffleDraw
} from '../index';

declare var Object: any;
export interface RaffleWinnerInterface {
  "winningNumber": number;
  "isDeleted"?: boolean;
  "createdAt"?: Date;
  "updatedAt"?: Date;
  "id"?: any;
  "createdById"?: any;
  "updatedById"?: any;
  "raffleDrawId"?: any;
  createdBy?: Account;
  updatedBy?: Account;
  raffleDraw?: RaffleDraw;
}

export class RaffleWinner implements RaffleWinnerInterface {
  "winningNumber": number;
  "isDeleted": boolean;
  "createdAt": Date;
  "updatedAt": Date;
  "id": any;
  "createdById": any;
  "updatedById": any;
  "raffleDrawId": any;
  createdBy: Account;
  updatedBy: Account;
  raffleDraw: RaffleDraw;
  constructor(data?: RaffleWinnerInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `RaffleWinner`.
   */
  public static getModelName() {
    return "RaffleWinner";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of RaffleWinner for dynamic purposes.
  **/
  public static factory(data: RaffleWinnerInterface): RaffleWinner{
    return new RaffleWinner(data);
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
      name: 'RaffleWinner',
      plural: 'RaffleWinners',
      path: 'RaffleWinners',
      idName: 'id',
      properties: {
        "winningNumber": {
          name: 'winningNumber',
          type: 'number'
        },
        "isDeleted": {
          name: 'isDeleted',
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
        "createdById": {
          name: 'createdById',
          type: 'any'
        },
        "updatedById": {
          name: 'updatedById',
          type: 'any'
        },
        "raffleDrawId": {
          name: 'raffleDrawId',
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
        raffleDraw: {
          name: 'raffleDraw',
          type: 'RaffleDraw',
          model: 'RaffleDraw',
          relationType: 'belongsTo',
                  keyFrom: 'raffleDrawId',
          keyTo: 'id'
        },
      }
    }
  }
}
