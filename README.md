# bxb-website

Hi. this site is now written statically with jekyll.




## to run dev site locally (in VSCode)

### Installing Jekyll
Multi-platform instrustions for installing Jekyll are available on the [Jekyll Website](https://jekyllrb.com/docs/installation/).

### Running the dev server
Assuming you have everything installed correctly, you can run `bundle exec jekyll serve` to host the website locally.

This creates a web server on your local computer that is configured by default to be accessible in a web browser at http://127.0.0.1:4000. This is how you can view the website to look at the changes you have made.


_NOTE:_ some dependencies cant deal with file paths that have spaces in them, so if you get an error while installing bundler or jekyll, double check that you did not download this repository into a folder path that contains spaces. For example, if you downloaded the project into `Users/Me/Hello World/bxb-website` it might not work. to fix this rename any folders that contain spaces (such as the `Hello World` folder in this example) to something that does not contain spaces.


## About the files in this repo
here is a short summary of the most important files or folders in this repo

|   File/folder |  Purpose  |
| ------------- | --------- |
| `_config.yml` | [configuration for jekyll](https://jekyllrb.com/docs/configuration/). This is where site-wide variables (like for social media links or email addresses) are defined |
| `.html` files      |  these are where the content for each page of our site lives |
| `_layouts` | This is the folder for jekyll [layouts](https://jekyllrb.com/docs/layouts/). These provide a sort of "fill-in-the-blank" HTML structure (`<head>`, `<body>` .etc) that is filled in with the contents of each page of the site |
| `_includes` | This folder is similar to `_layouts`, but allow you to "include" snippets of HTML across multiple pages on the site without copy-pasting them (such as for the navigation or footer). [documentation](https://jekyllrb.com/docs/includes/) |
| `imgs`, `scripts`, `archives` etc | These are folders of [static files](https://jekyllrb.com/docs/static-files/) that dont require any special processing and are just copied as-is to the generated site this is the default behavior for files  |
| `styles` | This folder is treated the same as the static files above, however these styles require processing to turn them into actual CSS, so each stylesheet must start with two lines of triple-dashes (`---`) so that jekyll knows it needs to process them |
| `_sass` | Confusingly, this folder _also_ contains styles for the site. This folder is configured in `config.yml` as the `sass_dir` ([documentation](https://jekyllrb.com/docs/assets/#sassscss)) and is the folder that holds style information that is shared by many stylesheets on the site, such as variables to define the color scheme |

Most other files or folders you see on the site can usually be ignored. These other files or folders are usually either automatically generated, or are configuration files that shouldn't need to be changed in order to edit the site.