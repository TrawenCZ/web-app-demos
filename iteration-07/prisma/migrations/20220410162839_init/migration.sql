-- CreateTable
CREATE TABLE "Accomodation" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "mainPhoto" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "addedAt" DATETIME NOT NULL,
    "userId" TEXT NOT NULL,
    "price" REAL NOT NULL,
    CONSTRAINT "Accomodation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Reservations" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "from" DATETIME NOT NULL,
    "to" DATETIME NOT NULL,
    "guestCount" INTEGER NOT NULL,
    "reservedAt" DATETIME NOT NULL,
    "canceledAt" DATETIME,
    "accomodationId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "isPaid" BOOLEAN NOT NULL DEFAULT FALSE,
    CONSTRAINT "Reservations_accomodationId_fkey" FOREIGN KEY ("accomodationId") REFERENCES "Accomodation" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Reservations_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "avatar" TEXT NOT NULL
);


INSERT INTO User (id, name, avatar) VALUES ('9447ca3b-92f0-4fb1-a9fc-90bf7ee4cb30', 'Jose', 'jose.jpeg');
INSERT INTO User (id, name, avatar) VALUES ('6b143cf5-dc36-431e-a7a1-202444e75786', 'Daniela', 'daniela.jpeg');
INSERT INTO User (id, name, avatar) VALUES ('ca9b9472-578b-4f5a-baf0-4ae851bccd8d', 'Tom', 'tom.jpeg');
INSERT INTO User (id, name, avatar) VALUES ('3f038d4b-9857-46b0-b36a-6b893b7fc8ca', 'Clara', 'clara.jpeg');
INSERT INTO User (id, name, avatar) VALUES ('5a8f2697-5fbe-4a25-8168-da5c20810874', 'Lara', 'lara.jpeg');

INSERT INTO Accomodation (id, name, description, mainPhoto, location, addedAt, userId, price) VALUES ('53efd933-f722-4575-983d-75750ad97365', 'Å Auge - River Eye - Treehouse', 'Experience being in the trees, falling asleep under the stars and waking up to the sound of birdsong in this spectacular treehouse. If you are looking for an intimate, simple and restful retreat, look no further.', 'photo-1550355191-aa8a80b41353.jpeg', 'Tinn, Telemark, Nórsko', '0', '3f038d4b-9857-46b0-b36a-6b893b7fc8ca', 50);
INSERT INTO Accomodation (id, name, description, mainPhoto, location, addedAt, userId, price) VALUES ('2f0ff579-40d1-4586-932c-b8b78421acbb', 'Aska Modern Cabin', 'Aska is a part of Hlíð Ferðaþjónusta is a complex of accomodations on the northern shore of lake Mývatn, right beneath the airport. We are situated about one kilometer away from the lakeside, in the middle of a 300 years old lava field and with a fantastic view over the lake.', 'photo-1579033462043-0f11a7862f7d.jpeg', 'Reykjahlíð, Island', '0', '5a8f2697-5fbe-4a25-8168-da5c20810874', 60);
INSERT INTO Accomodation (id, name, description, mainPhoto, location, addedAt, userId, price) VALUES ('9c14e680-62b4-4af6-b817-296610922ae9', 'Glass cottage with Hot tub "Blár"', 'We are located on a lava desert in the south of Iceland. 5 minutes from the small town of Hella, close to all the popular attractions that southern Iceland has to offer, but also in a secret and secluded location.', 'photo-1590725121839-892b458a74fe.jpeg', 'Hella, Island', '0', 'ca9b9472-578b-4f5a-baf0-4ae851bccd8d', 70);
INSERT INTO Accomodation (id, name, description, mainPhoto, location, addedAt, userId, price) VALUES ('8a4e0e83-fd0d-4d45-b6ad-1de458942dff', 'The Mud House', 'Beautiful mud brick, earth roof open plan small house. Set in an abundant organic paradise of birds and orchards surrounded by regenerating bush within walking distance to the water in peaceful Pigeon Bay. ', 'photo-1590725140246-20acdee442be.jpeg', 'Pigeon Bay, Canterbury, Nový Zéland', '0', '6b143cf5-dc36-431e-a7a1-202444e75786', 37);
INSERT INTO Accomodation (id, name, description, mainPhoto, location, addedAt, userId, price) VALUES ('35a23b2f-288e-4b87-b941-c2e4da2f256e', 'Casa Tata 4', 'These gorgeous 9 cabins right in front of the sea are the perfect spot if you want to enjoy Chacahua’s captivating nature and still have a clean, quiet, luxurious and tasteful accommodation.', 'photo-1619292585355-ab0e3fd509fe.jpeg', 'Laguna de Chacahua, Oaxaca, Mexiko', '0', '9447ca3b-92f0-4fb1-a9fc-90bf7ee4cb30', 45);

INSERT INTO Reservations (id, "from", "to", guestCount, reservedAt, accomodationId, userId) VALUES ('84d37846-88f2-4692-b788-0c62e48b39db', '1644846274000', '1644209756000', 3, '0', '2f0ff579-40d1-4586-932c-b8b78421acbb', '5a8f2697-5fbe-4a25-8168-da5c20810874');
INSERT INTO Reservations (id, "from", "to", guestCount, reservedAt, accomodationId, userId) VALUES ('4b52822e-37cc-498b-b516-32d7ccbc7299', '1643251977000', '1644943314000', 2, '0', '53efd933-f722-4575-983d-75750ad97365', '6b143cf5-dc36-431e-a7a1-202444e75786');
