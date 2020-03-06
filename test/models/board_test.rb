# == Schema Information
#
# Table name: boards
#
#  id         :bigint           not null, primary key
#  title      :string
#  boday      :string
#  visibility :boolean
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
require 'test_helper'

class BoardTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
