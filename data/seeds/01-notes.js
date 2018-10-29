
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('notes')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('notes').insert([
        {id: 1, title: 'test1', content: 'testContent'},
        {id: 2, title: 'test2', content: 'testContent'},
        {id: 3, title: 'test3', content: 'testContent'},
        {id: 4, title: 'greeting1', content: 'greetingContent'},
        {id: 5, title: 'greeting2', content: 'greetingContent'},
        {id: 6, title: 'greeting3', content: 'greetingContent'},
        {id: 7, title: 'meme1', content: 'memeContent'},
        {id: 8, title: 'meme2', content: 'memeContent'},
        {id: 9, title: 'meme3', content: 'memeContent'}
      ]);
    });
};
