/* tslint:disable */
import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { Email } from '../../models/Email';
import { Account } from '../../models/Account';
import { Contact } from '../../models/Contact';
import { Preference } from '../../models/Preference';
import { Product } from '../../models/Product';
import { RaffleDraw } from '../../models/RaffleDraw';
import { RaffleEntry } from '../../models/RaffleEntry';
import { Container } from '../../models/Container';
import { Payment } from '../../models/Payment';
import { RaffleWinner } from '../../models/RaffleWinner';
import { Content } from '../../models/Content';
import { ContactRaffle } from '../../models/ContactRaffle';
import { Invitation } from '../../models/Invitation';
import { UserInvitation } from '../../models/UserInvitation';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    User: User,
    Email: Email,
    Account: Account,
    Contact: Contact,
    Preference: Preference,
    Product: Product,
    RaffleDraw: RaffleDraw,
    RaffleEntry: RaffleEntry,
    Container: Container,
    Payment: Payment,
    RaffleWinner: RaffleWinner,
    Content: Content,
    ContactRaffle: ContactRaffle,
    Invitation: Invitation,
    UserInvitation: UserInvitation,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
