/* tslint:disable */
import {
  Contact
} from '../index';

declare var Object: any;
export interface PreferenceInterface {
  "isDeleted"?: boolean;
  "createdAt"?: Date;
  "updatedAt"?: Date;
  "id"?: any;
  "contactId"?: any;
  "createdById"?: any;
  "updatedById"?: any;
  contact?: Contact;
  createdBy?: Contact;
  updatedBy?: Contact;
}

export class Preference implements PreferenceInterface {
  "isDeleted": boolean;
  "createdAt": Date;
  "updatedAt": Date;
  "id": any;
  "contactId": any;
  "createdById": any;
  "updatedById": any;
  contact: Contact;
  createdBy: Contact;
  updatedBy: Contact;
  constructor(data?: PreferenceInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Preference`.
   */
  public static getModelName() {
    return "Preference";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Preference for dynamic purposes.
  **/
  public static factory(data: PreferenceInterface): Preference{
    return new Preference(data);
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
      name: 'Preference',
      plural: 'Preferences',
      path: 'Preferences',
      idName: 'id',
      properties: {
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
        "contactId": {
          name: 'contactId',
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
        contact: {
          name: 'contact',
          type: 'Contact',
          model: 'Contact',
          relationType: 'belongsTo',
                  keyFrom: 'contactId',
          keyTo: 'id'
        },
        createdBy: {
          name: 'createdBy',
          type: 'Contact',
          model: 'Contact',
          relationType: 'belongsTo',
                  keyFrom: 'createdById',
          keyTo: 'id'
        },
        updatedBy: {
          name: 'updatedBy',
          type: 'Contact',
          model: 'Contact',
          relationType: 'belongsTo',
                  keyFrom: 'updatedById',
          keyTo: 'id'
        },
      }
    }
  }
}
