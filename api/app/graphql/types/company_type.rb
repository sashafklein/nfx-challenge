Types::CompanyType = GraphQL::ObjectType.define do
  name 'Company'

  field :id, !types.ID
  field :name, !types.String
  field :industry, !types.String

  field :fundContacts, types[Types::FundContactType] do
    resolve -> (obj, args, ctx) { obj.fund_contacts }
  end

  field :investmentLowerBound, types.Int
  field :investmentUpperBound, types.Int
end