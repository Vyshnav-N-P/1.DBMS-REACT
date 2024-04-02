let pool=require ("pg").Pool;

pool=new pool({
    user: "postgres",
    password: "vyshnav7770",
    host: "localhost",
    port: 5432,
    database: "postgres",
});

module.exports = pool;