// Player titles are assigned in order: logins, nations, privileges
export const titles = {
  /** Pairs of login and title where the title is assigned to the specified login */
  logins: {
    'login': 'title',
    /**'crabcrabcam': 'Strimmer',*/
    'ca1ebyt': '4x Winner',
    'smxkxr': '2x Winner', /**Hydra*/
    'thewinthinger': '6x Winner', /**Dark*/
    'alzimo.rtg': '1x Winner',
    'kstar11ftw': '1x Winner',

    'raceninja1': 'Mapper',
    'inlead': 'Mapper',
    'kolynoais': 'Mapper',
    'opp8': 'Mapper',
    'flannelbutter': 'Mapper',

    'michaelwave360': 'Organiser',
    },
  /** Pairs of country and title where the title is assigned to every player from the specified country (country codes work too) */
  countries: {
    'country': 'title',
    'CODE': 'title' // country code
  },
  /** Pairs of privilege and title where the title is assigned to every player with the specified privilege level */
  privileges: {
    0: 'Player',
    1: 'Op',
    2: 'Admin',
    3: 'Madmin',
    4: 'Server Pet'
  }
}
