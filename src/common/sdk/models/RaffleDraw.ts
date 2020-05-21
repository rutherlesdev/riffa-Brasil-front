/* tslint:disable */
import {
  Product,
  Account,
  RaffleEntry,
  RaffleWinner,
  Contact
} from '../index';

declare var Object: any;
export interface RaffleDrawInterface {
  "name": string;
  "category": string;
  "description"?: string;
  "price": number;
  "retailPrice"?: number;
  "startDate": Date;
  "endDate": Date;
  "maxWinners": number;
  "maxOptions": number;
  "maxUserSelection": number;
  "terms"?: string;
  "isDeleted"?: boolean;
  "isCompleted"?: boolean;
  "isFeatured"?: boolean;
  "createdAt"?: Date;
  "updatedAt"?: Date;
  "id"?: any;
  "productId"?: any;
  "createdById"?: any;
  "updatedById"?: any;
  product?: Product;
  createdBy?: Account;
  updatedBy?: Account;
  raffleEntries?: RaffleEntry[];
  raffleWinners?: RaffleWinner[];
  contacts?: Contact[];
}

export class RaffleDraw implements RaffleDrawInterface {
  "name": string;
  "category": string;
  "description": string;
  "price": number;
  "retailPrice": number;
  "startDate": Date;
  "endDate": Date;
  "maxWinners": number;
  "maxOptions": number;
  "maxUserSelection": number;
  "terms": string;
  "isDeleted": boolean;
  "isCompleted": boolean;
  "isFeatured": boolean;
  "createdAt": Date;
  "updatedAt": Date;
  "id": any;
  "productId": any;
  "createdById": any;
  "updatedById": any;
  product: Product;
  createdBy: Account;
  updatedBy: Account;
  raffleEntries: RaffleEntry[];
  raffleWinners: RaffleWinner[];
  contacts: Contact[];
  constructor(data?: RaffleDrawInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `RaffleDraw`.
   */
  public static getModelName() {
    return "RaffleDraw";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of RaffleDraw for dynamic purposes.
  **/
  public static factory(data: RaffleDrawInterface): RaffleDraw{
    return new RaffleDraw(data);
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
      name: 'RaffleDraw',
      plural: 'RaffleDraws',
      path: 'RaffleDraws',
      idName: 'id',
      properties: {
        "name": {
          name: 'name',
          type: 'string'
        },
        "category": {
          name: 'category',
          type: 'string'
        },
        "description": {
          name: 'description',
          type: 'string'
        },
        "price": {
          name: 'price',
          type: 'number'
        },
        "retailPrice": {
          name: 'retailPrice',
          type: 'number'
        },
        "startDate": {
          name: 'startDate',
          type: 'Date'
        },
        "endDate": {
          name: 'endDate',
          type: 'Date'
        },
        "maxWinners": {
          name: 'maxWinners',
          type: 'number'
        },
        "maxOptions": {
          name: 'maxOptions',
          type: 'number',
          default: 100
        },
        "maxUserSelection": {
          name: 'maxUserSelection',
          type: 'number',
          default: 1
        },
        "terms": {
          name: 'terms',
          type: 'string'
        },
        "isDeleted": {
          name: 'isDeleted',
          type: 'boolean',
          default: false
        },
        "isCompleted": {
          name: 'isCompleted',
          type: 'boolean',
          default: false
        },
        "isFeatured": {
          name: 'isFeatured',
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
        "productId": {
          name: 'productId',
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
        product: {
          name: 'product',
          type: 'Product',
          model: 'Product',
          relationType: 'belongsTo',
                  keyFrom: 'productId',
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
        raffleEntries: {
          name: 'raffleEntries',
          type: 'RaffleEntry[]',
          model: 'RaffleEntry',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'raffleDrawId'
        },
        raffleWinners: {
          name: 'raffleWinners',
          type: 'RaffleWinner[]',
          model: 'RaffleWinner',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'raffleDrawId'
        },
        contacts: {
          name: 'contacts',
          type: 'Contact[]',
          model: 'Contact',
          relationType: 'hasMany',
          modelThrough: 'ContactRaffle',
          keyThrough: 'contactId',
          keyFrom: 'id',
          keyTo: 'raffleDrawId'
        },
      }
    }
  }
}
