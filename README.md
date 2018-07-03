# 2018-07-03-highchart-test
##Prerequisites:
- Composer
- PHP >=7.1
- Node >=6.11.2
- npm >=3.10.10
- Composer >=1.5.1

##Installation Steps:
- run 'composer install'
- run 'npm install'
- Use the .env.example to create a .env file with appropriate Intrinio keys and Database Credentials
- run 'php artisan key:generate'
- run 'php artisan migrate' (If this doesn't work, check your .env db credentials and maybe try run 'php artisan serve' before trying to migrate again)
- run 'php artisan db:seed'
- run 'npm run production'
- run 'php artisan serve'
- Navigate to the URL where you have hosted the app

##Additionally:
- run 'phpmyadmin-ctl install' if you want to view the database via hostname/phpmyadmin