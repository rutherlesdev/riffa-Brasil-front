/* tslint:disable */
import {
  Contact,
  RaffleDraw
} from '../index';

declare var Object: any;
export interface ContactRaffleInterface {
  "isDeleted": boolean;
  "createdAt": Date;
  "updatedAt": Date;
  "id"?: any;
  "contactId"?: any;
  "raffleDrawId"?: any;
  "createdById"?: any;
  "updatedById"?: any;
  contact?: Contact;
  raffleDraw?: RaffleDraw;
  createdBy?: Contact;
  updatedBy?: Contact;
}

export class ContactRaffle implements ContactRaffleInterface {
  "isDeleted": boolean;
  "createdAt": Date;
  "updatedAt": Date;
  "id": any;
  "contactId": any;
  "raffleDrawId": any;
  "createdById": any;
  "updatedById": any;
  contact: Contact;
  raffleDraw: RaffleDraw;
  createdBy: Contact;
  updatedBy: Contact;
  constructor(data?: ContactRaffleInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ContactRaffle`.
   */
  public static getModelName() {
    return "ContactRaffle";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ContactRaffle for dynamic purposes.
  **/
  public static factory(data: ContactRaffleInterface): ContactRaffle{
    return new ContactRaffle(data);
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
      name: 'ContactRaffle',
      plural: 'ContactRaffles',
      path: 'ContactRaffles',
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
        "raffleDrawId": {
          name: 'raffleDrawId',
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
        raffleDraw: {
          name: 'raffleDraw',
          type: 'RaffleDraw',
          model: 'RaffleDraw',
          relationType: 'belongsTo',
                  keyFrom: 'raffleDrawId',
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
