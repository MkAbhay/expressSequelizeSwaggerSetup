const initDB = async (db) => {
  try {
    await db.sequelize.authenticate();
    console.log("✅ Database connection established");

    await db.sequelize.sync({ force: false });
    console.log("✅ Tables synced");
  } catch (err) {
    console.error("❌ DB connection or sync failed:", err);
  }
};

module.exports = {
    initDB,
}