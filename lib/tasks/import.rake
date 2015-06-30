namespace :import do
  desc "TODO"
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
