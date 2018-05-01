Types::FundContactType = GraphQL::ObjectType.define do
  name 'FundContact'

  field :id, !types.ID
  field :fundID, !types.ID
  field :companyID, !types.ID
  field :name, !types.String
  field :interest, !types.String
  field :stage, !types.String
  field :location, !types.String

  field :whyWereInterested, types.String
  field :whyTheyreInterested, types.String
  field :investedAmount, types.Int

  field :company, Types::CompanyType do
    resolve -> (obj, args, ctx) { obj.company }
  end

  field :fund, Types::FundType do
    resolve -> (obj, args, ctx) { obj.fund }
  end
end