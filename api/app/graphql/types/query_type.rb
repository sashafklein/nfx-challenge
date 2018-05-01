Types::QueryType = GraphQL::ObjectType.define do
  name "Query"

  field :fundContacts, !types[Types::FundContactType] do
    argument :companyID, types.ID, as: :company_id
    resolve -> (obj, args, ctx) {
      return [] unless args['company_id']

      FundContact.where(company_id: args['company_id'])
    }
  end
end
