# The New Improved MonkeyBars Landing Page

## Getting Started
The site is managed by [Generator-Jekyllrb](https://github.com/robwierzbowski/generator-jekyllrb) which merges 
  [Jekyll](http://jekyllrb.com/) and [Yeoman](http://yeoman.io/). 
  
First, install the following: 
  
#### NodeJS and NPM
[Install Page](http://nodejs.org/)

#### Ruby through RVM
[Install Page](https://rvm.io/rvm/install)

Install Ruby 2.1: 

`rvm install 2.1` 

`rvm --default use 2.1`

#### Yeoman 
`npm install -g yo`
 
#### Grunt CLI 
`npm install -g grunt-cli`

#### Generator-Jekyllrb
`npm install -g generator-jekyllrb` 

#### Finally... 
Clone the repo, `cd` into it, then run: 

`bower install` 

`grunt serve` 

The server will immediately open a new browser tab and update any changes made to the source files. 

## Publishing 
In order to publish, run: 

`grunt build` 

Commit any changes to the `develop` branch, push, then push to the `master` branch: 

`git subtree push --prefix dist origin master` 
