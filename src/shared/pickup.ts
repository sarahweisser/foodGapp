import { SiteUser } from './siteUser';
import { Location } from './location';


export class Pickup {

  donorLocation:Location;
  dropoffLocation:Location;

  volunteer:SiteUser;
  donor:SiteUser;
  destination:SiteUser;

  status:string;
  quantity:string;
  additionalInstructions:string;
  isPerishable:boolean;
}
