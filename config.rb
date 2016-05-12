###
# Page options, layouts, aliases and proxies
###

require 'tzinfo'
Time.zone = "America/Los_Angeles"

# Per-page layout changes:
#
# With no layout
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# With alternative layout
# page "/path/to/file.html", layout: :otherlayout

# set :css_dir, 'stylesheets'
# set :fonts_dir,  "fonts"
# set :js_dir, 'javascripts'
# set :images_dir, 'images'

# With alternative layout
# page "/path/to/file.html", layout: :otherlayout

# Proxy pages (http://middlemanapp.com/basics/dynamic-pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", locals: {
#  which_fake_page: "Rendering a fake page with a local variable" }

# General configuration

# Reload the browser automatically whenever files change
# configure :development do
#   activate :livereload
# end

activate :blog do |blog|
  blog.permalink = "projects/{title}.html"
  blog.sources = "articles/:title.html"

  blog.default_extension = ".erb"
  # blog.paginate = true
  # blog.per_page = 10
  # blog.page_link = "page/{num}"
end

###
# Helpers
###

# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     "Helping"
#   end
# end

# Build-specific configuration
configure :build do
  # Hash assets
  # activate :asset_hash

  # Zip it
  activate :gzip

  # Minify CSS on build
  activate :minify_css

  # Minify Javascript on build
  activate :minify_javascript
  
  # Minify HTML on build
  activate :minify_html
end
