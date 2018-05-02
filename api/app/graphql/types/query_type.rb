Types::QueryType = GraphQL::ObjectType.define do
  name "Query"

  field :fundContacts, !types[Types::FundContactType] do
    description "Fetches a company by ID, along with its fund contacts"
    argument :companyID, types.ID, as: :company_id

    resolve -> (obj, args, ctx) {
      return [] unless args['company_id']

      FundContact.where(company_id: args['company_id'])
    }
  end

  field :companies, !types[Types::CompanyType] do
    description "Fetches a company by ID, along with its fund contacts"
    argument :id, !types.ID

    resolve -> (obj, args, ctx) {
      Company.where(id: args['id'])
    }
  end

  field :stages, types[types.String] do
    resolve -> (obj, args, ctx) {
      FundContact.stages.keys
    }
  end

  field :interests, types[types.String] do
    resolve -> (obj, args, ctx) {
      FundContact.interests.keys
    }
  end
end
