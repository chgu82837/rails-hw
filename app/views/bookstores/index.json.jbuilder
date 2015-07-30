json.array!(@bookstores) do |bookstore|
  json.extract! bookstore, :id, :name, :address
  json.url bookstore_url(bookstore, format: :json)
end
