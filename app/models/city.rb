class City
  attr_accessor :cities

  def initialize
    file = File.read('lib/germany_cities.json')
    parsed_filed = JSON.parse file
    self.cities = Set.new parsed_filed["Germany"]
  end

  def get_requested_cities(name)
    self.cities.select {|s| s.include? name.camelize}
  end

  def get_city(name)
    get_requested_cities(name).first
  end
end
