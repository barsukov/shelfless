class AccountsController < ApplicationController
  include BasicAccountKeeper
  before_action { set_account params[:id] }

  def show
  end

  def edit
  end

   # PATCH/PUT /books/1
  # PATCH/PUT /books/1.json
  def update
    respond_to do |format|
      if @account.update(account_params)
        format.html { redirect_to account_path(@account), notice: I18n.t('notice.update', model: t('account.name')) }
        format.json { render :show, status: :ok, location: @account }
      else
        format.html { render :edit }
        format.json { render json: @account.errors, status: :unprocessable_entity }
      end
    end
  end

  def account_params
    params[:account]
  end
end
