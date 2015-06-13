module MainHelper
  def get_user_login_path
    if user_signed_in?
      books_path
    else
      new_user_session_path
    end
  end
end
