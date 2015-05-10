class AuthorsController < ApplicationController
  # GET /authors.json
  def index
   @authors = Author.all
  end

  # GET /author/1.json
  def show

  end
end
