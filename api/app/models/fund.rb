class Fund < ApplicationRecord
  has_many :fund_contacts
  has_many :companies, through: :fund_contacts
end
