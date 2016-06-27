export class _Date {
  constructor(
    Day: string = '',
    Hour: string = ''
  ) { }
}
export class _Location {
  constructor(
    Address: string = '',
    Latitude: string = '',
    Longitude: string = ''
  ) { }
}
export class _Likes {
  constructor(
    Favorite_athletes: Array<string> = [],
    Favorite_teams: Array<string> = [],
    Games: Array<string> = [],
    Movies: Array<string> = [],
    Music: Array<string> = [],
    Television: Array<string> = []
  ) { }
}