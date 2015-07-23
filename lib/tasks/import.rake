namespace :import do
  desc "TODO"
  task update: :environment do
    arr_of_arrs = CSV.read("public/shelfless_updated.csv")
    all_books = Book.where(account_id: nil)
    arr_of_arrs.each_with_index do |row, index|
      begin
        book = all_books.where(title: row[0]).first
        user = User.find_by_email row[6]
        if user && book
          account = user.account
          unless book.account
            book.account = user.account
            book.save
            puts "Book #{book.title} updated "
          end
        elsif book
          book.destroy
          puts "Book #{book.title} destroyed "
        end
        rescue
          puts "Update failed #{index} of #{arr_of_arrs.length}"
        end
      end
  end

  task destroy: :environment do
    Book.where(account_id: nil).destroy_all
  end

  task update_account: :environment do
    arr_of_arrs = CSV.read("public/shelfless_updated.csv")
    arr_of_arrs.each_with_index do |row, index|
    user = User.find_by_email row[6]
    if user
      account = user.account
      if account
        unless account.name || account.surname
          name = row[5].split
          account.name = name.first
          account.surname = name.last
          account.city = row[4]
          if account.save
            puts "Account #{account.full_name} updated "
          else
            puts "Update failed #{index} of #{arr_of_arrs.length}"
          end
        end
      end
    end
    end
  end

  task now: :environment do
    arr_of_arrs = CSV.read("public/shelfless.csv")
    arr_of_arrs.each_with_index do |row, index|
      begin
        author =  Author.find_or_create_by(name: row[1])
        category = Category.find_or_create_by(name: row[2])
        book = Book.new
        book.title = row[0]
        book.author = author
        book.category = category
        book.language = row[3]
        book.save
        puts "Iport correct #{index} of #{arr_of_arrs.length}"
      rescue
        puts "Iport failed #{index} of #{arr_of_arrs.length}"
      end
    end
  end

end
