# About database providers

While you will probably use Postgres in your group projects, we will now need to have an `SQLite` database up and running, to test your solution.

You need to [download SQLite](https://www.sqlite.org/download.html) in order to continue. Prisma is currently set up to rely on SQLite to be able to work with the db.

There is a file in the `prisma/` folder called `test.db` - this is where the test database lives. **DO NOT MODIFY IT**. The tests will not run correctly if you do. 

The tests also need `database.db` file in the `prisma/` folder to run, even if the file is completely empty.

The existence of the `test.db` means, that the task 2 and 3 are independent - you do not need to seed the database in order to run your tests for task 3.
