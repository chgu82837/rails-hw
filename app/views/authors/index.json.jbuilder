json.array!(@authors) do |author|
  json.extract! author, :id, :name, :email, :tel
  json.url author_url(author, format: :json)
end
