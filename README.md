# bxb-website

Hi. this site is now written statically with jekyll.




## to run dev site locally (in VSCode)
### You Will Need:
- Ruby and DevelopmentKit ([Windows](https://stackoverflow.com/questions/18908708/installing-ruby-gem-in-windows#22151329) install)
	- IMPORTANT: make sure you check `Add Ruby executables to your PATH` on the install screen


### Steps
1. Open the project in VSCode
2. On the top menu bar, go to `Terminal > New Terminal"
3. Install bundler by typing `gem install bundler`
4. Install jekyll and other site dependencies by typing `bundle install`
5. Run the site as a local development server by typing `bundle exec jekyll serve`

_NOTE:_ some dependencies cant deal with file paths that have spaces in them, so if you get an error on `bundle install`, double check that you did not download this repository into a folder path that contains spaces. For example, if you downloaded the project into `Users/Me/Hello World/bxb-website` it might not work. to fix this, close vscode and rename the `Hello World` folder to something that does not contain spaces and 