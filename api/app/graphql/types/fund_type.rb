Types::FundType = GraphQL::ObjectType.define do
  name 'Fund'

  field :id, !types.ID
  field :name, !types.String
  field :size, !types.String
end