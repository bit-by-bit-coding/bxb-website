# bxb-website

Hi. this site is now written statically with jekyll.




## to run dev site locally (in VSCode)

### Installing Jekyll
Multi-platform instrustions for installing Jekyll are available on the [Jekyll Website](https://jekyllrb.com/docs/installation/).

### Running the dev server
Assuming you have everything installed correctly, you can run `bundle exec jekyll serve` to host the website locally.

This creates a web server on your local computer that is configured by default to be accessible in a web browser at http://127.0.0.1:4000. This is how you can view the website to look at the changes you have made.


_NOTE:_ some dependencies cant deal with file paths that have spaces in them, so if you get an error while installing bundler or jekyll, double check that you did not download this repository into a folder path that contains spaces. For example, if you downloaded the project into `Users/Me/Hello World/bxb-website` it might not work. to fix this rename any folders that contain spaces (such as the `Hello World` folder in this example) to something that does not contain spaces.
