rs.status();
db.createUser({user: 'admin', pwd: 'admin', roles: [ { role: 'root', db: 'admin' } ]});
use admin;
db.createUser({ user: "wendell", pwd: "duda123", roles: ["readWriteAnyDatabase"] });
