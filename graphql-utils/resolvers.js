const resolvers = {
  hello: async (obj, args, context, info) => {
    return `Hello ${obj.name}`
  },
  insertCity: async (obj, args, context, info) => {
    const collection = args.client.collection("names")
    return await collection.insertOne({
      name: obj.name
    })
  }
}

module.exports.resolvers = resolvers
