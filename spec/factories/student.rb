FactoryBot.define do
  factory :student do
    first_name { 'John' }
    last_name { 'Doe' }
    check_in_time { Time.now }
  end
end
