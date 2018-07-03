# 2018-07-03-highchart-test
##Prerequisites:
- Composer
- PHP >=7.1
- Node >=6.11.2
- npm >=3.10.10
- Composer >=1.5.1

##Installation Steps:
- composer install
- npm install
- Use the .env.example to create a .env file with appropriate Intrinio keys and Database Credentials
- php artisan key:generate
- php artisan migrate (If this doesn't work, check your .env db credentials and maybe try run 'php artisan serve' before trying to migrate again)
- php artisan db:seed
- npm run production
- php artisan serve