require 'rails_helper'

RSpec.describe "vehicles/index", type: :view do
  before(:each) do
    assign(:vehicles, [
      Vehicle.create!(),
      Vehicle.create!()
    ])
  end

  it "renders a list of vehicles" do
    render
  end
end
