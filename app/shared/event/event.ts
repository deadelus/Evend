import {_Date,_Likes,_Location} from "../other/other";

export class Event {
  constructor(
    public id: number,
    public Guid: string = '',
    public Name: string = '',
    public Created: string = '',
    public IsActive: boolean = false,
    public Picture: string = '',
    public Style: string = '',
    public Food: boolean = false,
    public Drink: boolean = false,
    public Ticket: number = 0,
    public Ticket_link: number = 0,
    public Start: _Date = null,
    public End: _Date = null,
    public Location: _Location = null,
    public Likes: _Likes = null,
    public Description: string = '',
    public Going: Array<string> = [],
    public Interested: Array<string> = [],
    public Maybe: Array<string> = [],
    public Guestlist: Array<string> = [],
    public Owner: string = ''
  ) {}
}
