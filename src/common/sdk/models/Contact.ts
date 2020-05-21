/* tslint:disable */
import {
  Account,
  Preference,
  RaffleDraw
} from '../index';

declare var Object: any;
export interface ContactInterface {
  "firstName"?: string;
  "lastName"?: string;
  "otherNames"?: string;
  "title"?: string;
  "bio"?: string;
  "picture"?: string;
  "gender"?: string;
  "address"?: string;
  "town"?: string;
  "country"?: string;
  "postalCode"?: string;
  "email"?: string;
  "phone"?: string;
  "isDeleted"?: boolean;
  "createdAt"?: Date;
  "updatedAt"?: Date;
  "id"?: any;
  "accountId"?: any;
  "createdById"?: any;
  "updatedById"?: any;
  account?: Account;
  createdBy?: Account;
  updatedBy?: Account;
  preference?: Preference;
  raffleDraws?: RaffleDraw[];
}

export class Contact implements ContactInterface {
  "firstName": string;
  "lastName": string;
  "otherNames": string;
  "title": string;
  "bio": string;
  "picture": string;
  "gender": string;
  "address": string;
  "town": string;
  "country": string;
  "postalCode": string;
  "email": string;
  "phone": string;
  "isDeleted": boolean;
  "createdAt": Date;
  "updatedAt": Date;
  "id": any;
  "accountId": any;
  "createdById": any;
  "updatedById": any;
  account: Account;
  createdBy: Account;
  updatedBy: Account;
  preference: Preference;
  raffleDraws: RaffleDraw[];
  constructor(data?: ContactInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Contact`.
   */
  public static getModelName() {
    return "Contact";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Contact for dynamic purposes.
  **/
  public static factory(data: ContactInterface): Contact{
    return new Contact(data);
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
      name: 'Contact',
      plural: 'Contacts',
      path: 'Contacts',
      idName: 'id',
      properties: {
        "firstName": {
          name: 'firstName',
          type: 'string'
        },
        "lastName": {
          name: 'lastName',
          type: 'string'
        },
        "otherNames": {
          name: 'otherNames',
          type: 'string'
        },
        "title": {
          name: 'title',
          type: 'string'
        },
        "bio": {
          name: 'bio',
          type: 'string'
        },
        "picture": {
          name: 'picture',
          type: 'string'
        },
        "gender": {
          name: 'gender',
          type: 'string'
        },
        "address": {
          name: 'address',
          type: 'string'
        },
        "town": {
          name: 'town',
          type: 'string'
        },
        "country": {
          name: 'country',
          type: 'string'
        },
        "postalCode": {
          name: 'postalCode',
          type: 'string'
        },
        "email": {
          name: 'email',
          type: 'string'
        },
        "phone": {
          name: 'phone',
          type: 'string'
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
        preference: {
          name: 'preference',
          type: 'Preference',
          model: 'Preference',
          relationType: 'hasOne',
                  keyFrom: 'id',
          keyTo: 'contactId'
        },
        raffleDraws: {
          name: 'raffleDraws',
          type: 'RaffleDraw[]',
          model: 'RaffleDraw',
          relationType: 'hasMany',
          modelThrough: 'ContactRaffle',
          keyThrough: 'raffleDrawId',
          keyFrom: 'id',
          keyTo: 'contactId'
        },
      }
    }
  }
}
