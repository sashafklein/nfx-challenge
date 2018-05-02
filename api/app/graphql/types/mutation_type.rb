Types::MutationType = GraphQL::ObjectType.define do
  name "Mutation"

  field :fundContact, Types::FundContactType do
    description "Updates a fund contact"

    argument :fundContactID, !types.ID, as: :fund_contact_id
    argument :companyID, !types.ID, as: :company_id
    argument :stage, types.String
    argument :interest, types.String
    argument :whyWereInterested, types.String, as: :why_were_interested
    argument :whyTheyreInterested,  types.String, as: :why_theyre_interested
    argument :name, types.String

    resolve ->(obj, args, ctx) {
      contact = FundContact.find_by(id: args['fund_contact_id'], company_id: args['company_id'])
      contact.update_attributes!(args.to_h.slice('stage', 'interest', 'why_were_interested', 'why_theyre_interested', 'name'))
      contact
    }
  end
end
