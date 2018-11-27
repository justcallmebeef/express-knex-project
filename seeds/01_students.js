exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {
          name: 'Grant Fogle',
          fave_animal: 'https://media.mnn.com/assets/images/2017/01/sleeping-bear-log.jpg.838x0_q80.jpg',
          previous_occupation: 'SEO Account Dude',
          hometown_lat: 39.5186,
          hometown_long: 104.7614,
          useless_superpower: 'always 5 minutes late'
        },
        {
          name: "Kate",
          fave_animal: "https://images.pexels.com/photos/53001/cougar-mountain-lion-puma-concolor-big-cat-53001.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          previous_occupation: "Event Manager",
          hometown_lat: 35.0844,
          hometown_long: 106.6504,
          useless_superpower: "Can read the minds of houseflies"
        }
      ]);
    });
};
