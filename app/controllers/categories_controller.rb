class CategoriesController < ApplicationController
  # GET /categories.json
  def index
   @categories = Category.all
  end

  # GET /category/1.json
  def show

  end
end
