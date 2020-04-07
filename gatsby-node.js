exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    interface Codelang {
      codelang: String!
      code: String!
      lang: String!
    }
    type AffectationYaml implements Node & Codelang @infer {
      codelang: String!
      code: String!
      lang: String!
      depart: Date! @dateformat
      length: Date! @dateformat
    }
    type CatalogueYaml implements Node & Codelang {
      codelang: String!
      code: String!
      lang: String!
      cityvisionlink: String!
      denomination: String!
    }
  `
  
  createTypes(typeDefs)
}
exports.createResolvers = ({ createResolvers }) => {
  const codelang = {
    type: "String!",
    resolve(source, args, context, info) {
      return source.code + " " + source.lang
    },
  }
  const resolvers = {
    Query: {
      allCodelangs: {
        type: ["Codelang"],
        resolve(source, args, context, info) {
          return context.nodeModel.getAllNodes({ type: "Codelang" })
        },
      },
    },
    AffectationYaml: {
      codelang,
    },
    CatalogueYaml: {
      codelang,
    },
  }
  createResolvers(resolvers)
}