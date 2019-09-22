
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('teams').del()
    .then(function () {
      // Inserts seed entries
      return knex('teams').insert([
        { name: 'Anaheim Ducks', shortname: 'ANA', league_id: 1 },
        { name: 'Boston Bruins', shortname: 'BOS', league_id: 1 },
        { name: 'Buffalo Sabres', shortname: 'BUF', league_id: 1 },
        { name: 'Calgary Flames', shortname: 'CGY', league_id: 1 },
        { name: 'Caroline Hurricanes', shortname: 'CAR', league_id: 1 },
        { name: 'Chicago Blackhawks', shortname: 'CHI', league_id: 1 },
        { name: 'Colorado Avalanche', shortname: 'COL', league_id: 1 },
        { name: 'Columbus Bluejackets', shortname: 'CBJ', league_id: 1 },
        { name: 'Dallas Stars', shortname: 'DAL', league_id: 1 },
        { name: 'Detroit Red Wings', shortname: 'DET', league_id: 1 },
        { name: 'Edmonton Oilers', shortname: 'EDM', league_id: 1 },
        { name: 'Florida Panthers', shortname: 'FLA', league_id: 1 },
        { name: 'Los Angeles Kings', shortname: 'LAK', league_id: 1 },
        { name: 'Minnesota Wild', shortname: 'MIN', league_id: 1 },
        { name: 'Montreal Canadiens', shortname: 'MTL', league_id: 1 },
        { name: 'Nashville Predators', shortname: 'NSH', league_id: 1 },
        { name: 'New Jersey Devils', shortname: 'NJD', league_id: 1 },
        { name: 'New York Islanders', shortname: 'NYI', league_id: 1 },
        { name: 'New York Rangers', shortname: 'NYR', league_id: 1 },
        { name: 'Ottawa Senators', shortname: 'OTT', league_id: 1 },
        { name: 'Philadelphia Flyers', shortname: 'PHI', league_id: 1 },
        { name: 'Phoenix Coyotes', shortname: 'PHX', league_id: 1 },
        { name: 'Pittsburgh Penguins', shortname: 'PIT', league_id: 1 },
        { name: 'San Jose Sharks', shortname: 'SJS', league_id: 1 },
        { name: 'St. Louis Blues', shortname: 'STL', league_id: 1 },
        { name: 'Tampa Bay Lightning', shortname: 'TBL', league_id: 1 },
        { name: 'Toronto Maple Leafs', shortname: 'TOR', league_id: 1 },
        { name: 'Vancouver Canuks', shortname: 'VAN', league_id: 1 },
        { name: 'Washington Capitals', shortname: 'WSH', league_id: 1 },
        { name: 'Winnipeg Jets', shortname: 'WPG', league_id: 1 },
        { name: 'All Stars (Red)', shortname: 'RED', league_id: 1 },
        { name: 'All Stars (Blue)', shortname: 'BLU', league_id: 1 },
        { name: 'Legends', shortname: 'LEG', league_id: 1 },
        
      ]);
    });
};
