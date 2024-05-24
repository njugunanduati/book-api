import * as db from './database.js';

console.log('****', db.default.books);
const resolvers = {
    Query: {
      book: async (parent, args) => db.default.books.findByPk(args.id),
      books: async () => db.default.books.findAll(),
    },
    Mutation: {
        add_book: async (parent, args) => db.default.books.create({
            title: args.title,
            author: args.author
        }),
        update_book: async (parent, args) => db.default.books.create({
            id: args.id,
            title: args.title,
            author: args.author
        }),
        delete_book: async (parent, args) => db.default.books.delete({
            id: args.id,
        })
    }
}

export default resolvers