class BookNotificationWorker
  include Sidekiq::Worker

  def perform(user, message)
    puts 'This fucking #{user.name} need to return this fucking book'
  end
end
