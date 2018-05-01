class FundContact < ApplicationRecord
  belongs_to :company
  belongs_to :fund

  enum stage: [:researching, :contacted, :negotiating, :invested, :rejected]
  enum interest: [:low, :medium, :high, :very_high]
end
