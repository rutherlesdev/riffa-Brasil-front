/* tslint:disable */
import {
  Account
} from '../index';

declare var Object: any;
export interface InvitationInterface {
  "accepted"?: boolean;
  "senderClaimed"?: boolean;
  "receiverClaimed"?: boolean;
  "content"?: string;
  "link"?: string;
  "code"?: string;
  "receiverEmail"?: string;
  "hasSignedUp"?: boolean;
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
}

export class Invitation implements InvitationInterface {
  "accepted": boolean;
  "senderClaimed": boolean;
  "receiverClaimed": boolean;
  "content": string;
  "link": string;
  "code": string;
  "receiverEmail": string;
  "hasSignedUp": boolean;
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
  constructor(data?: InvitationInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Invitation`.
   */
  public static getModelName() {
    return "Invitation";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Invitation for dynamic purposes.
  **/
  public static factory(data: InvitationInterface): Invitation{
    return new Invitation(data);
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
      name: 'Invitation',
      plural: 'Invitations',
      path: 'Invitations',
      idName: 'id',
      properties: {
        "accepted": {
          name: 'accepted',
          type: 'boolean'
        },
        "senderClaimed": {
          name: 'senderClaimed',
          type: 'boolean',
          default: false
        },
        "receiverClaimed": {
          name: 'receiverClaimed',
          type: 'boolean',
          default: false
        },
        "content": {
          name: 'content',
          type: 'string'
        },
        "link": {
          name: 'link',
          type: 'string'
        },
        "code": {
          name: 'code',
          type: 'string'
        },
        "receiverEmail": {
          name: 'receiverEmail',
          type: 'string'
        },
        "hasSignedUp": {
          name: 'hasSignedUp',
          type: 'boolean',
          default: false
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
      }
    }
  }
}
