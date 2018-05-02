require 'faker'

ventures = Fund.create(name: '645 Ventures', size: 30_000_000)
angels = Fund.create(name: 'SV Angels', size: 100_000_000)
prove = Fund.create(name: 'Prove Equity', size: 3_000_000)
essential = Fund.create(name: 'Essential Capital', size: 60_000_000)

vcs = [ventures, angels, prove, essential]

us = Company.create(name: 'Biotechifyly', industry: 'Biotech', investment_upper_bound: 3_000_000, investment_lower_bound: 1_000_000)
competition = Company.create(name: 'Other Biotech', industry: 'Biotech')
more = Company.create(name: 'More Biotech', industry: 'Biotech')
teach = Company.create(name: 'Teach.me', industry: 'Education')
saas = Company.create(name: 'Something.io', industry: 'SAAS')
edu = Company.create(name: 'Educatly', industry: 'Education')
app = Company.create(name: 'Applify', industry: 'Dev Tools')

biotech = [competition, more]
other = [teach, saas, edu, app]

cities = ['San Francisco, CA', 'New York, NY', 'Denver, CO', 'Salt Lake City, UT']

# Create some specific fundraising data
biotech.concat(other).each do |company|
  vcs.sample(2).each_with_index do |vc, vc_index|
    name = Faker::Name.name;
    FundContact.create(
      fund: vc,
      company: company,
      name: "#{name} <#{name.split(' ').map(&:downcase).join('-')}@#{vc.name.split(' ').map(&:downcase).join('')}.com>",
      location: cities.sample,
      stage: :invested,
      invested_amount: (vc_index + 1) * 1_000_000
    )
  end
end

# Add a contact for each fund for our company
vcs.each do |vc|
  name = Faker::Name.name;
  contact = FundContact.create(
    fund: vc,
    company: us,
    name: "#{name} <#{name.split(' ').map(&:downcase).join('-')}@#{vc.name.split(' ').map(&:downcase).join('')}.com>",
    location: cities.sample,
    stage: :researching,
  )
  puts contact.inspect
end