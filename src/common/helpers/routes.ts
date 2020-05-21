export class Routes {
  public static ROUTES: IRoutes = {
    admin: '/admin',
    adminProducts: '/admin/products',
    adminRaffles: '/admin/raffles',
    adminContent: '/admin/content',
    home: '/',
    invitations: '/invitations',
    live: '/live',
    profile: '/profile',
    winners: '/winners',
    upcoming: '/upcoming',
  };
}
export interface IRoutes {
  admin: string;
  adminProducts: string;
  adminRaffles: string;
  adminContent: string;
  home: string;
  invitations: string;
  profile: string;
  live: string;
  winners: string;
  upcoming: string;
}
