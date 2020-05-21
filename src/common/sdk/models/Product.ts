/* tslint:disable */
import {
  Account
} from '../index';

declare var Object: any;
export interface ProductInterface {
  "name": string;
  "description"?: string;
  "images"?: Array<any>;
  "isDeleted"?: boolean;
  "createdAt"?: Date;
  "updatedAt"?: Date;
  "id"?: any;
  "createdById"?: any;
  "updatedById"?: any;
  createdBy?: Account;
  updatedBy?: Account;
}

export class Product implements ProductInterface {
  "name": string;
  "description": string;
  "images": Array<any>;
  "isDeleted": boolean;
  "createdAt": Date;
  "updatedAt": Date;
  "id": any;
  "createdById": any;
  "updatedById": any;
  createdBy: Account;
  updatedBy: Account;
  constructor(data?: ProductInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Product`.
   */
  public static getModelName() {
    return "Product";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Product for dynamic purposes.
  **/
  public static factory(data: ProductInterface): Product{
    return new Product(data);
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
      name: 'Product',
      plural: 'Products',
      path: 'Products',
      idName: 'id',
      properties: {
        "name": {
          name: 'name',
          type: 'string'
        },
        "description": {
          name: 'description',
          type: 'string'
        },
        "images": {
          name: 'images',
          type: 'Array&lt;any&gt;'
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
