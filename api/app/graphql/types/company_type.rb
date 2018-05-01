Types::CompanyType = GraphQL::ObjectType.define do
  name 'Company'

  field :id, !types.ID
  field :name, !types.String
  field :industry, !types.String

  field :investmentLowerBound, types.Int
  field :investmentUpperBound, types.Int
end