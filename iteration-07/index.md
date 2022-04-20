# Airbnb Clone

REST API and SSR focused iteration.

## Introduction

This iteration is a bit different. You had a chance to play around with express during seminars.
We know that implementing endpoints in the express is time demanding. Thus there is low **DX** (Developer experience).
As a developer, you need to quickly understand concepts to fix bugs or implement new features.
We decided to give you more a less freehand for this iteration, sort of. The decision is mainly on your tutor and you,
if you feel like you need to master express, then feel free to use it; otherwise, there is option 2.
You will choose one of the provided frameworks in the Requirements section, then assign `xplaking` as reviewer and 
assignee in option two. Remember, he will not have any mercy, but you will learn something new, which is good.

## Help

Please use channel `iteration-07` on Discord or add a comment under this issue. Check `iteration-06` and also
seminars 07, 08.

## Description

Implement REST API for endpoints to fullfill the following functionality:

![](https://www.plantuml.com/plantuml/png/RT3BQkmm30RWlPv2P3-BCvTP7kO2RJU5RkO1DBQQc3XsaEN2KFhkJS8KRCXEl_J9s3ub9T4yUF3ygQWHnRMTedN2HbqCa7eNHX8Qy4wcRoNcO4tqKL25Gff671I0Z4wjvZLpqWOfOJjNV-st-EnsKm4mdqsXzOnd9vTmmMz0p8aD9SRcdNf6uSJoHVCLbiNRzLzfFkYnGdObkL8mx5VKiLHdQv6CYKEqfTcMvZPECrvZ-vAzEAyi5SFx0qTnXf_-03y0oy_Wncx-Bw_gufpoahRrS5V7GnsFrUeUuCJ1vi7_0W00)

Hint to implement filtering by price you following URL syntax: `/accomodations?price[gte]=10&price[lte]=100`.

### REST API

| Requirement                  	| Endpoint           	| Acceptance criteria                                                                                                                                                     	|
|------------------------------	|--------------------	|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
| Update accomodation          	| /api/accomodations 	| Requires full object for update and results in updated. accomodation                                                                                                     	|
| Add accomodation             	| /api/accomodations 	| Adds new accomodation into database.                                                                                                                                    	|
| Make reservation             	| /api/reservations  	| Adds new reservation into the database only if there's no other paid reservation within that time range. The `guestCount` needs to be higher than 1. API sets `reservedAt` date. And time range must be in future. 	|
| Pay reservation              	| /api/reservations  	| Partially updates reservation and marks it as paid.                                                                                                                     	|
| Cancel reservation           	| /api/reservations  	| Deletes reservation by marking it with `cancelledAt`, only reservations that are not currently happening can be cancelled. Guest cannot cancel old reservations.                                               	|
| Filter accomodation by Price 	| /api/accomodations 	| Allows clients to query accommodations by the price, which is between some range of numbers.                                                                                   	|
| Show accomodations           	| /api/accomodations 	| Returns a list of accomodations                                                                                                                                         	|
### SSR

The server returns rendered template inspired by `examples`, copy the relevant parts and 
create partial templates that can be filled with data.

| Requirement        	| Url                 	| Acceptance criteria     	|
|--------------------	|---------------------	|-------------------------	|
| Show accomodations 	| /accomodations\|/   	| Shows all accomodations 	|
| Show accomodation  	| /accomodations/{id} 	| Show one accomodation   	|

## Requirements

Use one of the following frameworks in TypeScript:

- [ExpressJS](https://expressjs.com/) - Safest option, possibly more hours spend

Exotic options (assign: xplaking):

- [AdonisJS](https://adonisjs.com/) - Simple and effective, need learning
- [NestJS](https://nestjs.com/) - Steeper learning curve but powerful

For templating engines choose one of:

- [Pug](https://pugjs.org/api/getting-started.html)
- [Twig](https://github.com/twigjs/twig.js/)
- [Edge](https://docs.adonisjs.com/guides/views/introduction)
- [EJS](https://ejs.co/)


## Data and Schema

All data you need are stored in `prisma/dev.db`. If you need to reset the database, simply run:

```bash
npx prisma migrate reset
```

The database contains following schema:

```prisma
model Accomodation {
  id           String         @id @default(uuid())
  name         String
  description  String
  mainPhoto    String
  host         User           @relation(fields: [userId], references: [id])
  location     String
  addedAt      DateTime
  userId       String
  price        Float
  reservations Reservations[]
}

model Reservations {
  id             String       @id @default(uuid())
  accomodation   Accomodation @relation(fields: [accomodationId], references: [id])
  user           User         @relation(fields: [userId], references: [id])
  from           DateTime
  to             DateTime
  guestCount     Int
  reservedAt     DateTime
  canceledAt     DateTime?
  accomodationId String
  userId         String
  isPaid         Boolean     @default(false)
}

model User {
  id         String         @id @default(uuid())
  name       String
  avatar     String
  hosting    Accomodation[]
  reservated Reservations[]
}
```
You can preview the data by running: `npx prisma studio`

## Grading

- 1p for REST API (0.5 for validation and 0.5 for functionality such as status codes, input handling)
- 1p for SSR and Templates(0.5 for accomodation page and 0.5 for accomodations)
- 1p for TypeScript usage (async/await, database...)

## Hereoic mode - Boss level

You can enter the heroic mode when you accomplish one of the following:

- Implement Rest API in [Deno](https://deno.land/) (+1p)
- Implement simple checking of user permissions via `Authorisation` header with middleware, that would contain `userId` (+0.25p)
- Implement JWT Token Authentication (+1p)
- Implement tests in Jest (+1p)
- Documentation in Swagger (+0.5p)

When you are _mad_, sorry **expert** you can get additional 3.75 points from this iteration.