Types::FundType = GraphQL::ObjectType.define do
  name 'Fund'

  field :id, !types.ID
  field :name, !types.String
  field :size, !types.String

  field :fundContacts, types[Types::FundContactType] do
    resolve -> (obj, args, ctx) { obj.fund_contacts }
  end
end