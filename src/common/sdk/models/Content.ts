/* tslint:disable */
import {
  Account
} from '../index';

declare var Object: any;
export interface ContentInterface {
  "type": string;
  "title"?: string;
  "subtitle"?: string;
  "content"?: string;
  "href"?: string;
  "isDeleted"?: boolean;
  "createdAt"?: Date;
  "updatedAt"?: Date;
  "id"?: any;
  "createdById"?: any;
  "updatedById"?: any;
  createdBy?: Account;
  updatedBy?: Account;
}

export class Content implements ContentInterface {
  "type": string;
  "title": string;
  "subtitle": string;
  "content": string;
  "href": string;
  "isDeleted": boolean;
  "createdAt": Date;
  "updatedAt": Date;
  "id": any;
  "createdById": any;
  "updatedById": any;
  createdBy: Account;
  updatedBy: Account;
  constructor(data?: ContentInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Content`.
   */
  public static getModelName() {
    return "Content";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Content for dynamic purposes.
  **/
  public static factory(data: ContentInterface): Content{
    return new Content(data);
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
      name: 'Content',
      plural: 'Contents',
      path: 'Contents',
      idName: 'id',
      properties: {
        "type": {
          name: 'type',
          type: 'string'
        },
        "title": {
          name: 'title',
          type: 'string'
        },
        "subtitle": {
          name: 'subtitle',
          type: 'string'
        },
        "content": {
          name: 'content',
          type: 'string'
        },
        "href": {
          name: 'href',
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
