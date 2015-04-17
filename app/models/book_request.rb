class BookRequest < ActiveRecord::Base
  belongs_to :book
  belongs_to :reader, class_name: "Account"
  belongs_to :holder, class_name: "Account"

  scope :get_reader_requests_by_account, -> (account) { where(:reader => account) }
  delegate :title, to: :book, allow_nil: true
  delegate :author, to: :book, allow_nil: true
  delegate :postcode, to: :book, allow_nil: true
  delegate :category, to: :book, allow_nil: true
  delegate :holder_name, to: :holder, allow_nil: true

  def status
    self.human_state_name
  end

  state_machine :state do
    event :accept do
      transition :pending => :accepted
    end
    event :decline do
      transition :pending => :declined
    end
    event :gift do
      transition :pending => :declined
    end
    state :gifted, :value => 3
    state :declined, :value => 2
    state :accepted, :value => 1
    state :pending, :value => 0
  end

end
