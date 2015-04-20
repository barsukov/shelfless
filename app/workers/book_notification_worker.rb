class BookNotificationWorker
  include Sidekiq::Worker

  def perform(user, message)
    puts 'Doing hard work'
  end
end
