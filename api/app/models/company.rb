class Company < ApplicationRecord
  has_many :fund_contacts
  has_many :funds, through: :fund_contacts
end
