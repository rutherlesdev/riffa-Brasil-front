/* tslint:disable */

declare var Object: any;
export interface UserInvitationInterface {
  "isClaimed": boolean;
  "id"?: any;
}

export class UserInvitation implements UserInvitationInterface {
  "isClaimed": boolean;
  "id": any;
  constructor(data?: UserInvitationInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `UserInvitation`.
   */
  public static getModelName() {
    return "UserInvitation";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of UserInvitation for dynamic purposes.
  **/
  public static factory(data: UserInvitationInterface): UserInvitation{
    return new UserInvitation(data);
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
      name: 'UserInvitation',
      plural: 'UserInvitations',
      path: 'UserInvitations',
      idName: 'id',
      properties: {
        "isClaimed": {
          name: 'isClaimed',
          type: 'boolean',
          default: false
        },
        "id": {
          name: 'id',
          type: 'any'
        },
      },
      relations: {
      }
    }
  }
}
