/* tslint:disable */
import {
  Contact,
  Invitation
} from '../index';

declare var Object: any;
export interface AccountInterface {
  "firstName"?: string;
  "lastName"?: string;
  "email": string;
  "passcode"?: string;
  "invitivationCode"?: string;
  "accountVerified": boolean;
  "realm"?: string;
  "username"?: string;
  "emailVerified"?: boolean;
  "id"?: any;
  "password"?: string;
  accessTokens?: any[];
  roles?: any[];
  contact?: Contact;
  invites?: Invitation[];
}

export class Account implements AccountInterface {
  "firstName": string;
  "lastName": string;
  "email": string;
  "passcode": string;
  "invitivationCode": string;
  "accountVerified": boolean;
  "realm": string;
  "username": string;
  "emailVerified": boolean;
  "id": any;
  "password": string;
  accessTokens: any[];
  roles: any[];
  contact: Contact;
  invites: Invitation[];
  constructor(data?: AccountInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Account`.
   */
  public static getModelName() {
    return "Account";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Account for dynamic purposes.
  **/
  public static factory(data: AccountInterface): Account{
    return new Account(data);
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
      name: 'Account',
      plural: 'Accounts',
      path: 'Accounts',
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
        "email": {
          name: 'email',
          type: 'string'
        },
        "passcode": {
          name: 'passcode',
          type: 'string'
        },
        "invitivationCode": {
          name: 'invitivationCode',
          type: 'string'
        },
        "accountVerified": {
          name: 'accountVerified',
          type: 'boolean',
          default: false
        },
        "realm": {
          name: 'realm',
          type: 'string'
        },
        "username": {
          name: 'username',
          type: 'string'
        },
        "emailVerified": {
          name: 'emailVerified',
          type: 'boolean'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "password": {
          name: 'password',
          type: 'string'
        },
      },
      relations: {
        accessTokens: {
          name: 'accessTokens',
          type: 'any[]',
          model: '',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'userId'
        },
        roles: {
          name: 'roles',
          type: 'any[]',
          model: '',
          relationType: 'hasMany',
          modelThrough: 'RoleMapping',
          keyThrough: 'roleId',
          keyFrom: 'id',
          keyTo: 'principalId'
        },
        contact: {
          name: 'contact',
          type: 'Contact',
          model: 'Contact',
          relationType: 'hasOne',
                  keyFrom: 'id',
          keyTo: 'accountId'
        },
        invites: {
          name: 'invites',
          type: 'Invitation[]',
          model: 'Invitation',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'accountId'
        },
      }
    }
  }
}
