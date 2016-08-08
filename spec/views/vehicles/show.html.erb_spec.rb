require 'rails_helper'

RSpec.describe "vehicles/show", type: :view do
  before(:each) do
    @vehicle = assign(:vehicle, Vehicle.create!())
  end

  it "renders attributes in <p>" do
    render
  end
end
