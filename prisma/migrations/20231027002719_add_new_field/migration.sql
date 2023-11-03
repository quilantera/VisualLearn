-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Activity" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "deadline" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "activityMongodbUrl" TEXT NOT NULL,
    "subjectId" TEXT NOT NULL,
    "color" TEXT NOT NULL DEFAULT 'bg-primary-500',
    CONSTRAINT "Activity_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "Subject" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Activity" ("activityMongodbUrl", "deadline", "id", "name", "subjectId") SELECT "activityMongodbUrl", "deadline", "id", "name", "subjectId" FROM "Activity";
DROP TABLE "Activity";
ALTER TABLE "new_Activity" RENAME TO "Activity";
CREATE TABLE "new_Subject" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "classId" TEXT NOT NULL,
    "teacherId" TEXT NOT NULL,
    "cor" TEXT NOT NULL DEFAULT 'bg-primary-500',
    "urlFoto" TEXT NOT NULL DEFAULT 'https://media.istockphoto.com/id/1095003184/vector/vector-bag-with-school-stationery.jpg?s=612x612&w=0&k=20&c=mAtn0PnqRVR8iQeBQ7TUlUD2kh4O9s-dGTpknyOwDTc=',
    CONSTRAINT "Subject_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Class" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Subject_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Subject" ("classId", "cor", "id", "name", "teacherId") SELECT "classId", "cor", "id", "name", "teacherId" FROM "Subject";
DROP TABLE "Subject";
ALTER TABLE "new_Subject" RENAME TO "Subject";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
