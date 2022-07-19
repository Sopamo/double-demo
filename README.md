<div id="top"></div>

<div align="center">
  <h1 align="center">Double Demo</h1>

  <p align="center">
    This is a project to showcase how to use double with webpack & vite
  </p>
</div>
<br>

## Setup (with docker)
    # Clone this project
    git clone git@github.com:Sopamo/double-demo.git

    # Install dependencies
    cd double-demo
    ./setup.sh

    # Start the laravel project
    ./vendor/bin/sail up -d

    # Start the double project
    cd double-vite
    npm run serve

The double demo is now running. Open http://localhost:3000 in your Browser to try it.

> **Note**
> If you want to try the webpack integration, make sure to update the frontend_root configuration
> in config/double.php accordingly.

For more info & documentation on double see the [double-vue](https://github.com/Sopamo/double-vue) repository.
